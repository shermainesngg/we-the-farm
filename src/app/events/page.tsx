import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { pastEvents } from "@/lib/past-events";

/* ─── Decorative organic shapes ─── */

function WormShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 140" className={className} aria-hidden="true">
      <path
        d="M28 8C10 22 44 48 22 65C4 80 40 108 24 125"
        stroke="currentColor"
        strokeWidth={14}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function BlobRing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M52 8C78 12 94 32 90 58C86 78 64 94 42 90C22 86 6 66 10 44C14 22 32 4 52 8Z"
        stroke="currentColor"
        strokeWidth={12}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function CurlyShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 70" className={className} aria-hidden="true">
      <path
        d="M12 55C8 30 28 10 52 14C72 18 80 42 60 52C42 60 34 40 48 34"
        stroke="currentColor"
        strokeWidth={11}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function DotCluster({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <circle cx={15} cy={30} r={8} fill="currentColor" />
      <circle cx={38} cy={15} r={6} fill="currentColor" opacity={0.7} />
      <circle cx={48} cy={44} r={9} fill="currentColor" opacity={0.5} />
    </svg>
  );
}

function LoopyShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 80" className={className} aria-hidden="true">
      <path
        d="M8 60C8 30 35 8 55 12C75 16 85 45 65 58C48 68 38 48 55 42C68 38 78 52 70 62"
        stroke="currentColor"
        strokeWidth={10}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function SeedlingIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <path d="M35 78L42 108H78L85 78" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 78H88" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
      <path d="M42 84C50 80 70 80 78 84" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.3} />
      <path d="M60 78V48" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
      <path d="M60 60C48 54 42 44 44 36" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <path d="M60 60C48 54 42 44 44 36C50 40 56 50 60 60" fill="currentColor" opacity={0.06} />
      <path d="M60 50C72 44 78 34 76 26" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <path d="M60 50C72 44 78 34 76 26C70 30 64 40 60 50" fill="currentColor" opacity={0.06} />
      <path d="M60 48C56 42 54 36 56 32" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.5} />
      <circle cx={50} cy={88} r={2} fill="currentColor" opacity={0.1} />
      <circle cx={65} cy={92} r={1.5} fill="currentColor" opacity={0.1} />
      <circle cx={72} cy={86} r={1.5} fill="currentColor" opacity={0.1} />
    </svg>
  );
}

const cardAccents = [
  { blob: "top-[20%] right-[10%] w-24 rotate-12", dots: "bottom-[30%] left-[8%] w-10 -rotate-6" },
  { blob: "top-[10%] left-[15%] w-20 -rotate-[20deg]", dots: "bottom-[20%] right-[12%] w-12 rotate-45" },
  { blob: "bottom-[15%] right-[8%] w-28 rotate-[35deg]", dots: "top-[25%] left-[10%] w-8" },
];

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ─── Immersive Hero ─── */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
          <img
            src="/hero-farm.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-forest/20 to-forest/60" />

          {/* Floating organic shapes on hero */}
          <WormShape className="absolute bottom-[18%] left-[3%] w-12 md:w-16 text-cream opacity-20 rotate-[20deg] animate-sway" />
          <BlobRing className="absolute top-[20%] right-[5%] w-20 md:w-28 text-honey opacity-15 -rotate-12 animate-float" />
          <DotCluster className="absolute top-[35%] left-[8%] w-10 md:w-14 text-cream opacity-10" />

          <div className="relative z-10 text-center px-6 py-20 max-w-3xl mx-auto hero-animate">
            <p className="text-cream/60 text-xs md:text-sm tracking-[0.3em] uppercase font-medium mb-6">
              Weekends on the Rooftop
            </p>
            <h1 className="font-heading text-cream text-[clamp(3.5rem,10vw,7rem)] leading-[0.88] tracking-tight">
              What&apos;s
              <br />
              <span className="text-honey">Growing</span>
            </h1>
            {/* Squiggly underline under "Growing" */}
            <svg viewBox="0 0 220 16" fill="none" className="w-40 md:w-56 h-4 mx-auto mt-2 text-terracotta opacity-60" aria-hidden="true">
              <path d="M4 10C30 2 50 14 76 8S122 2 148 10S194 14 216 6" stroke="currentColor" strokeWidth={3} strokeLinecap="round" fill="none" />
            </svg>
            <p className="mt-6 md:mt-8 text-cream/50 max-w-md mx-auto text-base md:text-lg leading-relaxed">
              Farming sessions, composting workshops, and community gatherings.
              All are welcome — no experience needed.
            </p>
          </div>

          {/* Curved bottom edge */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-12 md:h-16">
              <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 60 1440 40V80H0Z" fill="#FAF3E3" />
            </svg>
          </div>
        </section>

        {/* ─── Marquee ─── */}
        <div className="bg-cream overflow-hidden py-3 border-b border-earth/[0.06]">
          <div className="marquee-track flex whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-forest/15 text-xs md:text-sm tracking-[0.3em] uppercase font-medium px-2"
              >
                DIG IN · PLANT · GROW · HARVEST · SHARE · COMPOST · REPEAT ·{" "}
              </span>
            ))}
          </div>
        </div>

        {/* ─── Upcoming Events — Empty State ─── */}
        <section className="bg-cream relative overflow-hidden">
          {/* Background decorations */}
          <CurlyShape className="absolute -top-4 right-[6%] w-20 md:w-28 text-terracotta opacity-[0.07] rotate-[30deg]" />
          <LoopyShape className="absolute bottom-[10%] left-[3%] w-24 md:w-36 text-forest opacity-[0.05] -rotate-12" />

          <div className="relative z-10 mx-auto max-w-6xl px-6 pt-12 pb-16 md:pt-16 md:pb-24">
            <div className="flex items-end justify-between mb-10 md:mb-14">
              <div>
                <span className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-forest font-medium">
                  Up Next
                </span>
                <h2 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] text-earth mt-1">
                  Upcoming Sessions
                </h2>
              </div>
            </div>

            <div className="bg-parchment/60 rounded-3xl py-16 md:py-20 px-6 text-center relative overflow-hidden">
              {/* Playful accents inside empty state */}
              <WormShape className="absolute -bottom-4 -left-2 w-10 md:w-14 text-terracotta opacity-20 rotate-[25deg]" />
              <DotCluster className="absolute top-6 right-8 w-10 md:w-14 text-amber opacity-15 -rotate-12" />
              <BlobRing className="absolute -bottom-6 -right-6 w-20 md:w-28 text-forest opacity-[0.06] rotate-[40deg]" />

              <SeedlingIllustration className="w-20 md:w-24 h-20 md:h-24 text-earth/30 mx-auto mb-6 animate-sway" />
              <h3 className="font-heading text-xl md:text-2xl text-earth mb-2">
                Nothing planted yet
              </h3>
              <p className="text-soil/40 max-w-sm mx-auto leading-relaxed text-[15px]">
                We&apos;re preparing the next round of sessions.
                Check back soon — we usually run them on weekends.
              </p>
              <a
                href="https://www.instagram.com/wethefarm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest text-cream px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-forest-light transition-colors mt-6"
              >
                Follow for Updates
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ─── Past Events ─── */}
        {pastEvents.length > 0 && (
          <section className="bg-cream relative overflow-hidden">
            {/* Section decorations */}
            <WormShape className="absolute top-12 right-[4%] w-14 md:w-20 text-amber opacity-60 -rotate-[15deg]" />
            <LoopyShape className="absolute bottom-16 left-[2%] w-20 md:w-32 text-terracotta opacity-[0.08] rotate-[10deg]" />
            <BlobRing className="absolute -bottom-8 right-[20%] w-24 md:w-36 text-forest opacity-[0.05] rotate-[22deg]" />

            <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
              <div className="flex items-end justify-between mb-10 md:mb-14">
                <div className="relative">
                  <span className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-soil/40 font-medium">
                    Looking Back
                  </span>
                  <h2 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] text-earth mt-1">
                    Past Events
                  </h2>
                  {/* Squiggly accent under heading */}
                  <svg viewBox="0 0 120 10" fill="none" className="w-24 h-2.5 mt-1 text-terracotta opacity-40" aria-hidden="true">
                    <path d="M2 6C18 2 28 8 44 4S68 2 84 6S108 8 118 4" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" fill="none" />
                  </svg>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event, i) => {
                  const accent = cardAccents[i % cardAccents.length];
                  return (
                    <Link
                      key={event.id}
                      href={event.external_url ?? `/events/${event.id}`}
                      target={event.external_url ? "_blank" : undefined}
                      rel={event.external_url ? "noopener noreferrer" : undefined}
                      className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_-4px_rgba(44,29,16,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(44,29,16,0.12)] transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Card image area */}
                      <div className="aspect-[16/10] relative overflow-hidden bg-forest">
                        <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-light/80 to-sage/60" />
                        {/* Unique organic shapes per card */}
                        <BlobRing className={`absolute ${accent.blob} text-cream opacity-10`} />
                        <DotCluster className={`absolute ${accent.dots} text-honey opacity-15`} />

                        {/* Date badge */}
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 text-center min-w-[52px] shadow-sm">
                          <span className="block font-heading text-xl text-earth leading-none">
                            {new Date(event.date).getDate()}
                          </span>
                          <span className="block text-[10px] tracking-[0.15em] uppercase text-soil/50 font-medium mt-0.5">
                            {new Date(event.date)
                              .toLocaleDateString("en-SG", { month: "short" })
                              .toUpperCase()}
                          </span>
                        </div>

                        {/* Highlight tags */}
                        {event.highlights && (
                          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                            {event.highlights.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="bg-white/20 backdrop-blur-sm text-white text-[10px] tracking-wide font-medium px-2.5 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Card body */}
                      <div className="p-5">
                        <h3 className="font-heading text-lg text-earth mb-3 group-hover:text-forest transition-colors">
                          {event.title}
                        </h3>

                        <div className="flex flex-col gap-1.5 text-[13px] text-soil/50">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3.5 w-3.5 text-forest/50 shrink-0" />
                            <span>
                              {new Date(event.date).toLocaleDateString("en-SG", {
                                weekday: "short",
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          {event.time && (
                            <div className="flex items-center gap-2">
                              <svg viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5 text-forest/50 shrink-0">
                                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                                <path d="M7 4V7.5L9.5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                              </svg>
                              <span>{event.time}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 text-forest/50 shrink-0" />
                            <span className="truncate">{event.location}</span>
                          </div>
                        </div>

                        {/* Action row */}
                        <div className="mt-4 pt-4 border-t border-earth/[0.06] flex items-center justify-between">
                          <span className="text-[11px] tracking-[0.15em] uppercase text-soil/30 font-medium">
                            Past
                          </span>
                          <span className="text-forest text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Details
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ─── Bottom CTA ─── */}
        <section className="bg-forest relative overflow-hidden">
          {/* Organic accents */}
          <CurlyShape className="absolute -top-4 left-[8%] w-24 md:w-36 text-cream opacity-[0.06] rotate-[15deg]" />
          <WormShape className="absolute bottom-4 right-[6%] w-12 md:w-18 text-honey opacity-10 -rotate-[20deg]" />
          <DotCluster className="absolute top-[30%] right-[25%] w-12 md:w-16 text-cream opacity-[0.05]" />
          <svg viewBox="0 0 200 200" fill="none" className="absolute -bottom-24 -left-24 w-64 h-64 opacity-[0.06]" aria-hidden="true">
            <path d="M90 10C130 5 180 30 185 80S170 150 120 180C80 190 20 160 15 110S30 30 90 10z" fill="white" />
          </svg>

          <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-20 text-center">
            <p className="text-cream/30 text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Can&apos;t make it?
            </p>
            <h2 className="font-heading text-cream text-[clamp(1.5rem,4vw,2.5rem)] mb-4">
              There&apos;s always next weekend
            </h2>
            <svg viewBox="0 0 160 10" fill="none" className="w-28 md:w-36 h-2.5 mx-auto mb-6 text-terracotta opacity-40" aria-hidden="true">
              <path d="M2 6C22 2 38 8 58 4S88 2 108 6S138 8 158 4" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" fill="none" />
            </svg>
            <p className="text-cream/35 text-sm max-w-md mx-auto leading-relaxed mb-8">
              We run sessions most weekends. Follow us to stay in the loop.
            </p>
            <a
              href="https://www.instagram.com/wethefarm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cream text-forest px-7 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-honey transition-colors"
            >
              Follow Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
