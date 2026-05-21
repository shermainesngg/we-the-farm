import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Recycle, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ─── Hero ─── */}
        <section className="relative h-svh flex items-center justify-center overflow-hidden">
          {/* Atmospheric background — swap for a real farm photo via
              <img> or CSS background-image on the parent div */}
          <div className="absolute inset-0 bg-forest">
            <div
              className="absolute inset-0"
              style={{
                background: [
                  "radial-gradient(ellipse at 25% 30%, rgba(75, 124, 52, 0.5) 0%, transparent 50%)",
                  "radial-gradient(ellipse at 75% 50%, rgba(123, 160, 91, 0.25) 0%, transparent 45%)",
                  "radial-gradient(ellipse at 55% 10%, rgba(212, 168, 83, 0.12) 0%, transparent 35%)",
                  "radial-gradient(ellipse at 40% 90%, rgba(0, 0, 0, 0.35) 0%, transparent 50%)",
                ].join(", "),
              }}
            />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl">
            <p className="hero-animate text-amber text-[13px] tracking-[0.25em] uppercase font-medium mb-6">
              Beauty World Centre Rooftop, Singapore
            </p>
            <h1 className="hero-animate hero-delay-1 font-heading text-cream text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight">
              Farming in the Sky
              <br />
              with Friends
            </h1>
            <div className="hero-animate hero-delay-2 mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-amber text-[13px] tracking-[0.2em] uppercase hover:gap-3 transition-all duration-300"
              >
                Our Story
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="hero-animate hero-delay-3 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="text-[10px] tracking-[0.35em] uppercase text-cream/40">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-cream/30 to-transparent" />
          </div>
        </section>

        {/* ─── The Farm — photo left, text right ─── */}
        <section className="py-16 md:py-0">
          <div className="grid md:grid-cols-2 items-center">
            <div className="aspect-[4/5] md:aspect-auto md:min-h-[640px] relative overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(145deg, #4A7C34 0%, #2D5016 40%, #1B3A0E 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-end p-8">
                <span className="text-[11px] tracking-widest uppercase text-cream/20">
                  Your farm photo here
                </span>
              </div>
            </div>

            <div className="px-6 py-12 md:py-0 md:px-12 lg:px-20 xl:px-28">
              <div className="max-w-sm">
                <Recycle className="h-5 w-5 text-sage mb-4" />
                <span className="text-[11px] tracking-[0.25em] uppercase text-soil/40 font-medium block">
                  Our Farm
                </span>
                <h2 className="font-heading text-3xl md:text-[2.5rem] md:leading-[1.1] text-earth mt-4 mb-6">
                  Turning Waste
                  <br />
                  into Wonder
                </h2>
                <p className="text-soil/60 leading-relaxed text-[15px]">
                  We collect food waste from the Beauty World neighbourhood —
                  homes, businesses, and supermarkets — and turn it into rich
                  compost. From herbs to vegetables, we grow food on the rooftop
                  using what the community gives back.
                </p>
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-terracotta text-[13px] tracking-[0.15em] uppercase hover:gap-3 transition-all duration-300"
                  >
                    Our Story
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Community — text left, photo right ─── */}
        <section className="py-16 md:py-0">
          <div className="grid md:grid-cols-2 items-center">
            <div className="aspect-[4/5] md:aspect-auto md:min-h-[640px] relative overflow-hidden md:order-2">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(210deg, #5C4033 0%, #3E2723 50%, #2E1D14 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-end p-8">
                <span className="text-[11px] tracking-widest uppercase text-cream/20">
                  Your community photo here
                </span>
              </div>
            </div>

            <div className="px-6 py-12 md:py-0 md:px-12 lg:px-20 xl:px-28 md:order-1">
              <div className="max-w-sm md:ml-auto">
                <Users className="h-5 w-5 text-sage mb-4" />
                <span className="text-[11px] tracking-[0.25em] uppercase text-soil/40 font-medium block">
                  Community
                </span>
                <h2 className="font-heading text-3xl md:text-[2.5rem] md:leading-[1.1] text-earth mt-4 mb-6">
                  Come Get Your
                  <br />
                  Hands Dirty
                </h2>
                <p className="text-soil/60 leading-relaxed text-[15px]">
                  No experience needed — just bring yourself and a willingness
                  to dig in. We bridge generations, spark collaborations, and
                  build community around shared food, shared soil, and shared
                  purpose. Our events are free and open to everyone.
                </p>
                <div className="mt-8">
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 text-terracotta text-[13px] tracking-[0.15em] uppercase hover:gap-3 transition-all duration-300"
                  >
                    See Events
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Events CTA ─── */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #2D5016 0%, #1B3A0E 60%, #0E2207 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 80% 50%, rgba(212, 168, 83, 0.3) 0%, transparent 50%)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
            <span className="text-[11px] tracking-[0.3em] uppercase text-amber/60 block">
              Weekends on the Rooftop
            </span>
            <h2 className="font-heading text-cream text-3xl md:text-5xl mt-4 mb-6 max-w-2xl mx-auto leading-tight">
              Weekend Sessions Are Open to All
            </h2>
            <p className="text-cream/50 max-w-lg mx-auto mb-10 text-[15px] leading-relaxed">
              Farming sessions, composting workshops, and community gatherings.
              Check out what&apos;s coming up and reserve your spot.
            </p>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 bg-terracotta text-cream px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-terracotta/90 transition-colors"
            >
              Browse Events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
