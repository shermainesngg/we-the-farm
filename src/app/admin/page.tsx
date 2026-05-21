"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { CalendarDays, Users, ClipboardList, Plus } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalEvents: 0,
    upcomingEvents: 0,
    totalBookings: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const today = new Date().toISOString().split("T")[0];

      const [eventsRes, upcomingRes, bookingsRes] = await Promise.all([
        supabase.from("events").select("*", { count: "exact", head: true }),
        supabase
          .from("events")
          .select("*", { count: "exact", head: true })
          .gte("date", today),
        supabase.from("bookings").select("*", { count: "exact", head: true }),
      ]);

      setStats({
        totalEvents: eventsRes.count ?? 0,
        upcomingEvents: upcomingRes.count ?? 0,
        totalBookings: bookingsRes.count ?? 0,
      });
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-2xl md:text-3xl text-earth">
            Dashboard
          </h1>
          <p className="text-sm text-soil/60 mt-1">
            Welcome back to We The Farm admin.
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
      ) : (
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-sage/15 rounded-xl flex items-center justify-center">
                <CalendarDays className="h-5 w-5 text-forest" />
              </div>
              <span className="text-sm text-soil/60">Total Events</span>
            </div>
            <p className="text-3xl font-bold text-earth">{stats.totalEvents}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-amber/15 rounded-xl flex items-center justify-center">
                <CalendarDays className="h-5 w-5 text-terracotta" />
              </div>
              <span className="text-sm text-soil/60">Upcoming</span>
            </div>
            <p className="text-3xl font-bold text-earth">
              {stats.upcomingEvents}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-sage/15 rounded-xl flex items-center justify-center">
                <ClipboardList className="h-5 w-5 text-forest" />
              </div>
              <span className="text-sm text-soil/60">Total RSVPs</span>
            </div>
            <p className="text-3xl font-bold text-earth">
              {stats.totalBookings}
            </p>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <Link
          href="/admin/events"
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sage/15 rounded-xl flex items-center justify-center">
              <CalendarDays className="h-5 w-5 text-forest" />
            </div>
            <div>
              <h3 className="font-medium text-earth group-hover:text-forest transition-colors">
                Manage Events
              </h3>
              <p className="text-sm text-soil/60">
                Create, edit, or remove events
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/admin/bookings"
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sage/15 rounded-xl flex items-center justify-center">
              <ClipboardList className="h-5 w-5 text-forest" />
            </div>
            <div>
              <h3 className="font-medium text-earth group-hover:text-forest transition-colors">
                View Bookings
              </h3>
              <p className="text-sm text-soil/60">
                See who&apos;s signed up for events
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
