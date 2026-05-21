import Link from "next/link";
import { Calendar, MapPin, Users } from "lucide-react";
import type { Event } from "@/lib/supabase";

export default function EventCard({ event }: { event: Event }) {
  const dateStr = new Date(event.date).toLocaleDateString("en-SG", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/events/${event.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-[16/10] bg-cream-dark relative overflow-hidden">
        {event.image_url ? (
          <img
            src={event.image_url}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sage/40">
            <svg
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-heading text-xl text-earth mb-2 group-hover:text-forest transition-colors">
          {event.title}
        </h3>

        <div className="flex flex-col gap-1.5 text-sm text-soil/70">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-terracotta" />
            <span>
              {dateStr}
              {event.time && ` · ${event.time}`}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-terracotta" />
            <span>{event.location}</span>
          </div>
          {event.max_attendees && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-terracotta" />
              <span>{event.max_attendees} spots</span>
            </div>
          )}
        </div>

        {event.description && (
          <p className="mt-3 text-sm text-soil/60 line-clamp-2">
            {event.description}
          </p>
        )}
      </div>
    </Link>
  );
}
