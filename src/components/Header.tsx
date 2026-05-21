"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(62,39,35,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-5">
        <Link
          href="/"
          className={`font-heading text-xl md:text-2xl tracking-tight transition-colors duration-500 ${
            scrolled ? "text-earth" : "text-cream"
          }`}
        >
          We The Farm
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "Events", href: "/events" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-[13px] tracking-[0.15em] uppercase transition-colors duration-500 ${
                scrolled
                  ? "text-soil/60 hover:text-earth"
                  : "text-cream/70 hover:text-cream"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X
              className={`h-6 w-6 transition-colors duration-500 ${
                scrolled ? "text-earth" : "text-cream"
              }`}
            />
          ) : (
            <Menu
              className={`h-6 w-6 transition-colors duration-500 ${
                scrolled ? "text-earth" : "text-cream"
              }`}
            />
          )}
        </button>
      </nav>

      {open && (
        <div
          className={`md:hidden px-6 pb-6 ${
            scrolled ? "bg-cream/95" : "bg-forest/80 backdrop-blur-md"
          }`}
        >
          {[
            { label: "Events", href: "/events" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-[13px] tracking-[0.15em] uppercase transition-colors ${
                scrolled ? "text-soil" : "text-cream/90"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
