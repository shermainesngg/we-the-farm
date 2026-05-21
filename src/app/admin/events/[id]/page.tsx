"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Event } from "@/lib/supabase";
import EventForm from "@/components/EventForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EditEventPage() {
  const params = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("events")
        .select("*")
        .eq("id", params.id)
        .single();
      setEvent(data);
      setLoading(false);
    }
    load();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="h-8 w-8 border-3 border-sage border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="text-center py-12">
        <p className="text-soil/60">Event not found.</p>
      </div>
    );
  }

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
        Edit Event
      </h1>
      <EventForm event={event} />
    </div>
  );
}
