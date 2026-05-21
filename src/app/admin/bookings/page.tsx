"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Booking } from "@/lib/supabase";
import { Download, Trash2, Users } from "lucide-react";

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [events, setEvents] = useState<{ id: string; title: string }[]>([]);

  async function loadBookings() {
    const { data: eventsData } = await supabase
      .from("events")
      .select("id, title")
      .order("date", { ascending: false });
    setEvents(eventsData ?? []);

    let query = supabase
      .from("bookings")
      .select("*, events(title, date)")
      .order("created_at", { ascending: false });

    if (filter !== "all") {
      query = query.eq("event_id", filter);
    }

    const { data } = await query;
    setBookings(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    loadBookings();
  }, [filter]);

  async function deleteBooking(id: string) {
    if (!confirm("Remove this RSVP?")) return;
    await supabase.from("bookings").delete().eq("id", id);
    loadBookings();
  }

  function exportCSV() {
    const headers = ["Name", "Email", "Attendees", "Event", "Date", "Notes"];
    const rows = bookings.map((b) => [
      b.name,
      b.email,
      b.attendees,
      (b.events as unknown as { title: string })?.title ?? "",
      new Date(b.created_at).toLocaleDateString("en-SG"),
      b.notes ?? "",
    ]);

    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bookings-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-2xl md:text-3xl text-earth">
            Bookings
          </h1>
          <p className="text-sm text-soil/60 mt-1">
            See who has signed up for your events.
          </p>
        </div>
        {bookings.length > 0 && (
          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-2 bg-white text-soil border border-cream-dark px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-cream-dark transition-colors"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        )}
      </div>

      {/* Filter */}
      <div className="mb-6">
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setLoading(true);
          }}
          className="rounded-xl border border-cream-dark px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
        >
          <option value="all">All Events</option>
          {events.map((ev) => (
            <option key={ev.id} value={ev.id}>
              {ev.title}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 border-3 border-sage border-t-transparent rounded-full animate-spin" />
        </div>
      ) : bookings.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
          <Users className="mx-auto h-10 w-10 text-sage/40 mb-3" />
          <p className="text-soil/60">No bookings yet.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cream-dark text-left">
                  <th className="px-5 py-3 text-soil/50 font-medium">Name</th>
                  <th className="px-5 py-3 text-soil/50 font-medium">Email</th>
                  <th className="px-5 py-3 text-soil/50 font-medium">Pax</th>
                  <th className="px-5 py-3 text-soil/50 font-medium">Event</th>
                  <th className="px-5 py-3 text-soil/50 font-medium">
                    Booked On
                  </th>
                  <th className="px-5 py-3 text-soil/50 font-medium text-right">
                    &nbsp;
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-cream-dark/50 last:border-0"
                  >
                    <td className="px-5 py-3 font-medium text-earth">
                      {booking.name}
                    </td>
                    <td className="px-5 py-3 text-soil/70">{booking.email}</td>
                    <td className="px-5 py-3 text-soil/70">
                      {booking.attendees}
                    </td>
                    <td className="px-5 py-3 text-soil/70">
                      {(booking.events as unknown as { title: string })
                        ?.title ?? "-"}
                    </td>
                    <td className="px-5 py-3 text-soil/50">
                      {new Date(booking.created_at).toLocaleDateString("en-SG")}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <button
                        onClick={() => deleteBooking(booking.id)}
                        className="p-2 rounded-lg hover:bg-red-50 transition-colors text-soil/50 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
