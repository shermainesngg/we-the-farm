"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import type { Event } from "@/lib/supabase";
import {
  Calendar,
  MapPin,
  Users,
  ArrowLeft,
  CheckCircle,
  Sprout,
  ExternalLink,
} from "lucide-react";
import { getPastEvent, type PastEvent } from "@/lib/past-events";

function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 20C25 0 35 40 55 20S85 0 115 20"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function OrganicBlob({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <path
        d="M90 10C130 5 180 30 185 80S170 150 120 180C80 190 20 160 15 110S30 30 90 10z"
        fill="currentColor"
      />
    </svg>
  );
}

function Asterisk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <line x1="20" y1="4" x2="20" y2="36" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
      <line x1="4" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
      <line x1="9" y1="9" x2="31" y2="31" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
      <line x1="31" y1="9" x2="9" y2="31" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
    </svg>
  );
}

export default function EventDetailPage() {
  const params = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [pastEvent, setPastEvent] = useState<PastEvent | null>(null);
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
      const pe = getPastEvent(params.id as string);
      if (pe) {
        setPastEvent(pe);
        setLoading(false);
        return;
      }

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

  if (pastEvent) {
    const pastDateStr = new Date(pastEvent.date).toLocaleDateString("en-SG", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return (
      <>
        <Header />
        <main className="flex-1">
          {/* ─── Hero ─── */}
          <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-end overflow-hidden">
            <div className="absolute inset-0 bg-earth">
              <OrganicBlob className="absolute -top-20 -right-20 w-72 h-72 text-soil opacity-20" />
              <Squiggle className="absolute bottom-[25%] left-[8%] w-32 text-cream opacity-[0.06] -rotate-6" />
              <Asterisk className="absolute top-[35%] right-[20%] w-8 text-cream/[0.08]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-10 md:pb-14 pt-32">
              <Link
                href="/events"
                className="hero-animate inline-flex items-center gap-1.5 text-sm text-cream/50 hover:text-cream/80 transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                All Events
              </Link>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-cream/15 text-cream/60 text-[10px] tracking-[0.15em] uppercase font-medium px-3 py-1 rounded-full">
                  Past Event
                </span>
              </div>
              <h1 className="hero-animate hero-delay-1 font-heading text-cream text-[clamp(2rem,5vw,4rem)] leading-[0.95] max-w-3xl">
                {pastEvent.title}
              </h1>
            </div>
          </section>

          {/* ─── Metadata Bar ─── */}
          <div className="bg-earth border-t border-cream/10">
            <div className="mx-auto max-w-6xl px-6 py-4 md:py-5 flex flex-wrap gap-x-8 gap-y-2.5">
              <div className="flex items-center gap-2 text-cream/60 text-sm">
                <Calendar className="h-4 w-4 text-terracotta shrink-0" />
                <span>
                  {pastDateStr}
                  {pastEvent.time && ` · ${pastEvent.time}`}
                </span>
              </div>
              <div className="flex items-center gap-2 text-cream/60 text-sm">
                <MapPin className="h-4 w-4 text-terracotta shrink-0" />
                <span>{pastEvent.location}</span>
              </div>
            </div>
          </div>

          {/* ─── Content ─── */}
          <section className="bg-cream relative overflow-hidden">
            <OrganicBlob className="absolute -bottom-32 -right-32 w-80 h-80 text-parchment" />

            <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:py-16">
              <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
                {/* Description */}
                <div className="lg:col-span-3">
                  {pastEvent.description && (
                    <>
                      <Asterisk className="w-7 h-7 text-sage/60 mb-6" />
                      <div className="text-soil/70 leading-relaxed text-base max-w-[65ch] whitespace-pre-line">
                        {pastEvent.description}
                      </div>
                    </>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-2">
                  <div className="bg-parchment rounded-2xl p-6 md:p-8 sticky top-6">
                    <div className="text-center py-4">
                      <Sprout className="mx-auto h-10 w-10 text-sage mb-4" />
                      <h3 className="font-heading text-xl text-earth mb-2">
                        This event has ended
                      </h3>
                      <p className="text-sm text-soil/60 leading-relaxed mb-6">
                        Thanks to everyone who joined us! We run events most
                        weekends — check back for upcoming sessions.
                      </p>

                      {pastEvent.highlights && pastEvent.highlights.length > 0 && (
                        <div className="text-left mb-6 border-t border-cream-dark/30 pt-5">
                          <span className="text-[10px] tracking-[0.2em] uppercase text-soil/40 font-medium block mb-3">
                            Highlights
                          </span>
                          <ul className="space-y-2">
                            {pastEvent.highlights.map((h) => (
                              <li
                                key={h}
                                className="flex items-center gap-2 text-sm text-soil/60"
                              >
                                <CheckCircle className="h-3.5 w-3.5 text-forest shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {pastEvent.external_url && (
                        <a
                          href={pastEvent.external_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-forest font-medium hover:text-forest-light transition-colors"
                        >
                          View original listing
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}

                      <div className="mt-5 pt-5 border-t border-cream-dark/30">
                        <Link
                          href="/events"
                          className="inline-flex items-center gap-2 bg-forest text-cream px-7 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-forest-light transition-colors w-full justify-center"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          See Upcoming Events
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  if (!event) {
    return (
      <>
        <Header />
        <main className="flex-1">
          <section className="bg-cream relative overflow-hidden">
            <OrganicBlob className="absolute -bottom-32 -right-32 w-80 h-80 text-parchment" />
            <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center">
              <Asterisk className="w-8 h-8 text-sage/40 mx-auto mb-6" />
              <h1 className="font-heading text-2xl md:text-3xl text-earth mb-4">
                Event not found
              </h1>
              <p className="text-soil/50 mb-8">
                This event may have ended or been removed.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 bg-forest text-cream px-7 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-forest-light transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Events
              </Link>
            </div>
          </section>
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
        {/* ─── Hero ─── */}
        <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-end overflow-hidden">
          {event.image_url ? (
            <>
              <img
                src={event.image_url}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(44,29,16,0.88) 0%, rgba(44,29,16,0.4) 45%, rgba(44,29,16,0.15) 100%)",
                }}
              />
            </>
          ) : (
            <div className="absolute inset-0 bg-forest">
              <OrganicBlob className="absolute -top-20 -right-20 w-72 h-72 text-forest-light opacity-30" />
              <Squiggle className="absolute bottom-[25%] left-[8%] w-32 text-cream opacity-[0.06] -rotate-6" />
              <Asterisk className="absolute top-[35%] right-[20%] w-8 text-cream/[0.08]" />
            </div>
          )}

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-10 md:pb-14 pt-32">
            <Link
              href="/events"
              className="hero-animate inline-flex items-center gap-1.5 text-sm text-cream/50 hover:text-cream/80 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              All Events
            </Link>
            <h1 className="hero-animate hero-delay-1 font-heading text-cream text-[clamp(2rem,5vw,4rem)] leading-[0.95] max-w-3xl">
              {event.title}
            </h1>
          </div>
        </section>

        {/* ─── Metadata Bar ─── */}
        <div className="bg-earth">
          <div className="mx-auto max-w-6xl px-6 py-4 md:py-5 flex flex-wrap gap-x-8 gap-y-2.5">
            <div className="flex items-center gap-2 text-cream/60 text-sm">
              <Calendar className="h-4 w-4 text-terracotta shrink-0" />
              <span>
                {dateStr}
                {event.time && ` · ${event.time}`}
              </span>
            </div>
            <div className="flex items-center gap-2 text-cream/60 text-sm">
              <MapPin className="h-4 w-4 text-terracotta shrink-0" />
              <span>{event.location}</span>
            </div>
            {event.max_attendees && (
              <div className="flex items-center gap-2 text-cream/60 text-sm">
                <Users className="h-4 w-4 text-terracotta shrink-0" />
                <span>
                  {isFull
                    ? "Fully booked"
                    : `${spotsLeft} spot${spotsLeft === 1 ? "" : "s"} left`}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ─── Content ─── */}
        <section className="bg-cream relative overflow-hidden">
          <OrganicBlob className="absolute -bottom-32 -right-32 w-80 h-80 text-parchment" />

          <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:py-16">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
              {/* Description */}
              <div className="lg:col-span-3">
                {event.description && (
                  <>
                    <Asterisk className="w-7 h-7 text-sage/60 mb-6" />
                    <div className="text-soil/70 leading-relaxed text-base max-w-[65ch] whitespace-pre-line">
                      {event.description}
                    </div>
                  </>
                )}
              </div>

              {/* RSVP Form */}
              <div className="lg:col-span-2">
                <div className="bg-parchment rounded-2xl p-6 md:p-8 sticky top-6">
                  {submitted ? (
                    <div className="text-center py-4">
                      <CheckCircle className="mx-auto h-10 w-10 text-forest mb-4" />
                      <h3 className="font-heading text-xl text-earth mb-2">
                        You&apos;re in!
                      </h3>
                      <p className="text-sm text-soil/60 leading-relaxed">
                        We&apos;ll see you there. Check your email for details.
                      </p>
                      <Squiggle className="w-16 text-terracotta opacity-30 mx-auto mt-6" />
                    </div>
                  ) : isFull ? (
                    <div className="text-center py-4">
                      <Sprout className="mx-auto h-10 w-10 text-sage mb-4" />
                      <h3 className="font-heading text-xl text-earth mb-2">
                        Fully Booked
                      </h3>
                      <p className="text-sm text-soil/60 leading-relaxed">
                        This session is full — but we run events most weekends.
                        Check back soon!
                      </p>
                      <div className="mt-6">
                        <Link
                          href="/events"
                          className="inline-flex items-center gap-1.5 text-sm text-forest font-medium hover:text-forest-light transition-colors"
                        >
                          Browse other events
                          <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-terracotta font-medium">
                        Reserve Your Spot
                      </span>
                      <h3 className="font-heading text-xl md:text-2xl text-earth mt-1 mb-6">
                        RSVP
                      </h3>
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                      >
                        <div>
                          <label className="block text-sm font-medium text-soil mb-1.5">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-xl border border-cream-dark bg-cream px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-shadow"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-soil mb-1.5">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl border border-cream-dark bg-cream px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-shadow"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-soil mb-1.5">
                            Number of Attendees
                          </label>
                          <select
                            value={attendees}
                            onChange={(e) =>
                              setAttendees(Number(e.target.value))
                            }
                            className="w-full rounded-xl border border-cream-dark bg-cream px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-shadow"
                          >
                            {[1, 2, 3, 4, 5].map((n) => (
                              <option key={n} value={n}>
                                {n}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-soil mb-1.5">
                            Notes{" "}
                            <span className="text-soil/40 font-normal">
                              (optional)
                            </span>
                          </label>
                          <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            rows={3}
                            className="w-full rounded-xl border border-cream-dark bg-cream px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage resize-none transition-shadow"
                          />
                        </div>

                        {error && (
                          <p className="text-sm text-red-600">{error}</p>
                        )}

                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full bg-forest text-cream py-3 rounded-xl font-medium hover:bg-forest-light transition-colors disabled:opacity-50 mt-1"
                        >
                          {submitting ? "Submitting..." : "Count Me In"}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
