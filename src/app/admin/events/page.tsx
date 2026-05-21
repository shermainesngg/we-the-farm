"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Event } from "@/lib/supabase";
import Link from "next/link";
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadEvents() {
    const { data } = await supabase
      .from("events")
      .select("*")
      .order("date", { ascending: false });
    setEvents(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    loadEvents();
  }, []);

  async function togglePublish(event: Event) {
    await supabase
      .from("events")
      .update({ is_published: !event.is_published })
      .eq("id", event.id);
    loadEvents();
  }

  async function deleteEvent(event: Event) {
    if (!confirm(`Delete "${event.title}"? This cannot be undone.`)) return;
    await supabase.from("events").delete().eq("id", event.id);
    loadEvents();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-2xl md:text-3xl text-earth">
            Events
          </h1>
          <p className="text-sm text-soil/60 mt-1">
            Manage your farm events here.
          </p>
        </div>
        <Link
          href="/admin/events/new"
          className="inline-flex items-center gap-2 bg-forest text-cream px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-forest-light transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Event
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 border-3 border-sage border-t-transparent rounded-full animate-spin" />
        </div>
      ) : events.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
          <p className="text-soil/60 mb-4">No events yet.</p>
          <Link
            href="/admin/events/new"
            className="inline-flex items-center gap-2 bg-forest text-cream px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-forest-light transition-colors"
          >
            <Plus className="h-4 w-4" />
            Create Your First Event
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cream-dark text-left">
                  <th className="px-5 py-3 text-soil/50 font-medium">Event</th>
                  <th className="px-5 py-3 text-soil/50 font-medium">Date</th>
                  <th className="px-5 py-3 text-soil/50 font-medium">
                    Status
                  </th>
                  <th className="px-5 py-3 text-soil/50 font-medium text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => {
                  const dateStr = new Date(event.date).toLocaleDateString(
                    "en-SG",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }
                  );
                  const isPast =
                    new Date(event.date) <
                    new Date(new Date().toISOString().split("T")[0]);

                  return (
                    <tr
                      key={event.id}
                      className="border-b border-cream-dark/50 last:border-0"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          {event.image_url ? (
                            <img
                              src={event.image_url}
                              alt=""
                              className="w-10 h-10 rounded-lg object-cover shrink-0"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-cream-dark shrink-0" />
                          )}
                          <div>
                            <p className="font-medium text-earth">
                              {event.title}
                            </p>
                            <p className="text-xs text-soil/50">
                              {event.location}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-soil/70">
                        {dateStr}
                        {event.time && (
                          <span className="text-soil/40"> · {event.time}</span>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        {isPast ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-cream-dark text-soil/50">
                            Past
                          </span>
                        ) : event.is_published ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-sage/15 text-forest">
                            Published
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-amber/15 text-terracotta">
                            Draft
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1 justify-end">
                          <button
                            onClick={() => togglePublish(event)}
                            title={
                              event.is_published ? "Unpublish" : "Publish"
                            }
                            className="p-2 rounded-lg hover:bg-cream-dark transition-colors text-soil/50 hover:text-soil"
                          >
                            {event.is_published ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                          <Link
                            href={`/admin/events/${event.id}`}
                            className="p-2 rounded-lg hover:bg-cream-dark transition-colors text-soil/50 hover:text-soil"
                          >
                            <Pencil className="h-4 w-4" />
                          </Link>
                          <button
                            onClick={() => deleteEvent(event)}
                            className="p-2 rounded-lg hover:bg-red-50 transition-colors text-soil/50 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
