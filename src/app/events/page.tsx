"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import type { Event } from "@/lib/supabase";
import { supabase } from "@/lib/supabase";
import { CalendarX } from "lucide-react";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("events")
        .select("*")
        .eq("is_published", true)
        .gte("date", new Date().toISOString().split("T")[0])
        .order("date", { ascending: true });
      setEvents(data ?? []);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-forest text-cream">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h1 className="font-heading text-4xl md:text-5xl">
              Upcoming Events
            </h1>
            <p className="mt-3 text-cream/70 max-w-xl">
              Weekend farming sessions, composting workshops, and community
              gatherings. All are welcome — no experience needed.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="h-8 w-8 border-3 border-sage border-t-transparent rounded-full animate-spin" />
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-20">
              <CalendarX className="mx-auto h-12 w-12 text-sage/40 mb-4" />
              <h3 className="font-heading text-xl text-earth mb-2">
                No upcoming events
              </h3>
              <p className="text-soil/60">
                Check back soon — we usually run events on weekends!
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
