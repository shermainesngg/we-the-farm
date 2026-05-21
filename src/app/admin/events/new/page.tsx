"use client";

import EventForm from "@/components/EventForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewEventPage() {
  return (
    <div>
      <Link
        href="/admin/events"
        className="inline-flex items-center gap-1.5 text-sm text-forest hover:text-forest-light transition-colors mb-4"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Events
      </Link>
      <h1 className="font-heading text-2xl md:text-3xl text-earth mb-6">
        Create New Event
      </h1>
      <EventForm />
    </div>
  );
}
