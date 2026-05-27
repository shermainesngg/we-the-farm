import Link from "next/link";
import { Calendar, MapPin, Users } from "lucide-react";
import type { Event } from "@/lib/supabase";

export default function EventCard({ event }: { event: Event }) {
  const eventDate = new Date(event.date);
  const day = eventDate.getDate();
  const month = eventDate
    .toLocaleDateString("en-SG", { month: "short" })
    .toUpperCase();

  const dateStr = eventDate.toLocaleDateString("en-SG", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/events/${event.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[16/10] relative overflow-hidden">
        {event.image_url ? (
          <img
            src={event.image_url}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-forest flex items-center justify-center">
            <svg
              className="h-12 w-12 text-cream/10"
              viewBox="0 0 40 40"
              fill="none"
              aria-hidden="true"
            >
              <line x1="20" y1="4" x2="20" y2="36" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
              <line x1="4" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
              <line x1="9" y1="9" x2="31" y2="31" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
              <line x1="31" y1="9" x2="9" y2="31" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
            </svg>
          </div>
        )}

        <div className="absolute top-3 left-3 bg-cream/95 backdrop-blur-sm rounded-xl px-3 py-2 text-center min-w-[52px]">
          <span className="block font-heading text-xl text-earth leading-none">
            {day}
          </span>
          <span className="block text-[10px] tracking-[0.15em] uppercase text-soil/60 font-medium mt-0.5">
            {month}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-heading text-xl text-earth mb-2.5 group-hover:text-forest transition-colors">
          {event.title}
        </h3>

        <div className="flex flex-col gap-1.5 text-sm text-soil/60">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-terracotta shrink-0" />
            <span>
              {dateStr}
              {event.time && ` · ${event.time}`}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-terracotta shrink-0" />
            <span>{event.location}</span>
          </div>
          {event.max_attendees && (
            <div className="flex items-center gap-2">
              <Users className="h-3.5 w-3.5 text-terracotta shrink-0" />
              <span>{event.max_attendees} spots</span>
            </div>
          )}
        </div>

        {event.description && (
          <p className="mt-3 text-sm text-soil/40 line-clamp-2">
            {event.description}
          </p>
        )}
      </div>
    </Link>
  );
}
