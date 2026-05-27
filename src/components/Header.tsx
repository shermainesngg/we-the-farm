"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/70 backdrop-blur-md shadow-[0_1px_0_0_rgba(58,42,26,0.06)]"
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
          wethefarm
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "Events", href: "/events" },
            { label: "Shop", href: "/shop" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-[13px] tracking-[0.15em] uppercase transition-colors duration-500 ${
                scrolled
                  ? "text-soil/60 hover:text-forest"
                  : "text-cream/70 hover:text-cream"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/cart"
            className={`relative transition-colors duration-500 ${
              scrolled
                ? "text-soil/60 hover:text-forest"
                : "text-cream/70 hover:text-cream"
            }`}
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber text-soil text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <Link
            href="/cart"
            className={`relative transition-colors duration-500 ${
              scrolled
                ? "text-soil/60 hover:text-forest"
                : "text-cream/70 hover:text-cream"
            }`}
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber text-soil text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
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
        </div>
      </nav>

      {open && (
        <div
          className={`md:hidden px-6 pb-6 ${
            scrolled ? "bg-cream/95" : "bg-forest/90 backdrop-blur-md"
          }`}
        >
          {[
            { label: "Events", href: "/events" },
            { label: "Shop", href: "/shop" },
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
