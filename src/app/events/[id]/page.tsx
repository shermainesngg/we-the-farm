"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import type { Event } from "@/lib/supabase";
import { Calendar, MapPin, Users, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function EventDetailPage() {
  const params = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookingCount, setBookingCount] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState(1);
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("events")
        .select("*")
        .eq("id", params.id)
        .single();
      setEvent(data);

      if (data) {
        const { count } = await supabase
          .from("bookings")
          .select("*", { count: "exact", head: true })
          .eq("event_id", data.id);
        setBookingCount(count ?? 0);
      }

      setLoading(false);
    }
    load();
  }, [params.id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const { error: err } = await supabase.from("bookings").insert({
      event_id: event!.id,
      name,
      email,
      attendees,
      notes: notes || null,
    });

    if (err) {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
    setSubmitting(false);
  }

  if (loading) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="h-8 w-8 border-3 border-sage border-t-transparent rounded-full animate-spin" />
        </main>
        <Footer />
      </>
    );
  }

  if (!event) {
    return (
      <>
        <Header />
        <main className="flex-1 mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="font-heading text-2xl text-earth mb-4">
            Event not found
          </h1>
          <Link
            href="/events"
            className="text-forest hover:text-forest-light transition-colors"
          >
            Back to events
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const dateStr = new Date(event.date).toLocaleDateString("en-SG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const spotsLeft = event.max_attendees
    ? event.max_attendees - bookingCount
    : null;
  const isFull = spotsLeft !== null && spotsLeft <= 0;

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-sm text-forest hover:text-forest-light transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All Events
          </Link>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Event Details */}
            <div className="lg:col-span-3">
              {event.image_url && (
                <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                  <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <h1 className="font-heading text-3xl md:text-4xl text-earth mb-4">
                {event.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-soil/70 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-terracotta" />
                  <span>
                    {dateStr}
                    {event.time && ` · ${event.time}`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-terracotta" />
                  <span>{event.location}</span>
                </div>
                {event.max_attendees && (
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-terracotta" />
                    <span>
                      {isFull
                        ? "Fully booked"
                        : `${spotsLeft} spot${spotsLeft === 1 ? "" : "s"} left`}
                    </span>
                  </div>
                )}
              </div>

              {event.description && (
                <div className="prose prose-sm max-w-none text-soil/80 whitespace-pre-line">
                  {event.description}
                </div>
              )}
            </div>

            {/* RSVP Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-6">
                {submitted ? (
                  <div className="text-center py-6">
                    <CheckCircle className="mx-auto h-12 w-12 text-forest mb-4" />
                    <h3 className="font-heading text-xl text-earth mb-2">
                      You&apos;re in!
                    </h3>
                    <p className="text-sm text-soil/70">
                      We&apos;ll see you there. Check your email for details.
                    </p>
                  </div>
                ) : isFull ? (
                  <div className="text-center py-6">
                    <h3 className="font-heading text-xl text-earth mb-2">
                      Fully Booked
                    </h3>
                    <p className="text-sm text-soil/70">
                      This event is full. Check back for future sessions!
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-heading text-xl text-earth mb-4">
                      RSVP for this Event
                    </h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div>
                        <label className="block text-sm font-medium text-soil mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-xl border border-cream-dark px-4 py-2.5 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soil mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl border border-cream-dark px-4 py-2.5 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soil mb-1">
                          Number of Attendees
                        </label>
                        <select
                          value={attendees}
                          onChange={(e) =>
                            setAttendees(Number(e.target.value))
                          }
                          className="w-full rounded-xl border border-cream-dark px-4 py-2.5 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
                        >
                          {[1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n}>
                              {n}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soil mb-1">
                          Notes{" "}
                          <span className="text-soil/40 font-normal">
                            (optional)
                          </span>
                        </label>
                        <textarea
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          rows={3}
                          className="w-full rounded-xl border border-cream-dark px-4 py-2.5 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage resize-none"
                        />
                      </div>

                      {error && (
                        <p className="text-sm text-red-600">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-forest text-cream py-3 rounded-xl font-medium hover:bg-forest-light transition-colors disabled:opacity-50"
                      >
                        {submitting ? "Submitting..." : "Reserve My Spot"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
