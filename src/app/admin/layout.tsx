"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import {
  Sprout,
  LayoutDashboard,
  CalendarDays,
  ClipboardList,
  LogOut,
  ExternalLink,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session && pathname !== "/admin/login") {
        router.replace("/admin/login");
      } else {
        setAuthenticated(!!session);
      }
      setChecking(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session && pathname !== "/admin/login") {
        router.replace("/admin/login");
      }
      setAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, [router, pathname]);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="h-8 w-8 border-3 border-sage border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!authenticated) return null;

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/events", label: "Events", icon: CalendarDays },
    { href: "/admin/bookings", label: "Bookings", icon: ClipboardList },
  ];

  return (
    <div className="min-h-screen bg-cream flex">
      {/* Sidebar */}
      <aside className="w-64 bg-forest text-cream flex flex-col shrink-0 hidden md:flex">
        <div className="p-6">
          <div className="flex items-center gap-2 text-lg font-bold">
            <Sprout className="h-6 w-6 text-sage" />
            <span className="font-heading">We The Farm</span>
          </div>
          <p className="text-xs text-cream/50 mt-1">Admin Dashboard</p>
        </div>

        <nav className="flex-1 px-3">
          {navItems.map((item) => {
            const active =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm mb-1 transition-colors ${
                  active
                    ? "bg-forest-light text-cream"
                    : "text-cream/70 hover:bg-forest-light/50 hover:text-cream"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 mt-auto border-t border-forest-light">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-cream/70 hover:bg-forest-light/50 hover:text-cream transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            View Site
          </Link>
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              router.push("/admin/login");
            }}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-cream/70 hover:bg-forest-light/50 hover:text-cream transition-colors w-full"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-forest text-cream px-4 py-3 flex items-center justify-between z-50">
        <div className="flex items-center gap-2 font-bold">
          <Sprout className="h-5 w-5 text-sage" />
          <span className="font-heading text-sm">Admin</span>
        </div>
        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const active =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`p-2 rounded-lg ${
                  active ? "bg-forest-light" : "hover:bg-forest-light/50"
                }`}
              >
                <item.icon className="h-4 w-4" />
              </Link>
            );
          })}
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              router.push("/admin/login");
            }}
            className="p-2 rounded-lg hover:bg-forest-light/50"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 md:p-8 p-4 pt-16 md:pt-8">{children}</div>
    </div>
  );
}
