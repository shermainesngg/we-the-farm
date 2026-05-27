import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ─── Background Doodle Shapes ─── */

function WormDoodle({ className }: { className?: string }) {
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

function CurlyDoodle({ className }: { className?: string }) {
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

function BlobDoodle({ className }: { className?: string }) {
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

function LoopDoodle({ className }: { className?: string }) {
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

function DotsDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <circle cx={15} cy={30} r={8} fill="currentColor" />
      <circle cx={38} cy={15} r={6} fill="currentColor" opacity={0.7} />
      <circle cx={48} cy={44} r={9} fill="currentColor" opacity={0.5} />
    </svg>
  );
}

function ZigzagDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 160" className={className} aria-hidden="true">
      <path
        d="M30 8C10 28 50 48 30 68C10 88 50 108 30 128C15 142 45 152 30 155"
        stroke="currentColor"
        strokeWidth={12}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function StarDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <line x1="20" y1="4" x2="20" y2="36" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
      <line x1="4" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
      <line x1="9" y1="9" x2="31" y2="31" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
      <line x1="31" y1="9" x2="9" y2="31" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
    </svg>
  );
}

/* ─── Concept Illustration Icons ─── */

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 54L32 10L54 54H10Z" />
      <path d="M18 54V50" />
      <path d="M26 54V48" />
      <path d="M34 54V50" />
      <path d="M42 54V48" />
      <path d="M32 10C28 6 26 2 28 0" opacity={0.5} />
      <path d="M32 10C36 6 38 2 36 0" opacity={0.5} />
    </svg>
  );
}

function BeakerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 6V24L12 50C11 54 14 58 18 58H46C50 58 53 54 52 50L42 24V6" />
      <path d="M18 6H46" />
      <path d="M16 40H48" strokeDasharray="3 2" opacity={0.25} />
      <circle cx={28} cy={46} r={2.5} opacity={0.12} fill="currentColor" />
      <circle cx={37} cy={43} r={1.8} opacity={0.08} fill="currentColor" />
      <path d="M34 14V28" strokeWidth={2} />
      <circle cx={34} cy={30} r={2.2} fill="currentColor" opacity={0.1} />
    </svg>
  );
}

function TrowelIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M38 6V26" strokeWidth={2} />
      <path d="M34 6H42" />
      <path d="M26 26H38H50C50 38 44 46 38 46C32 46 26 38 26 26Z" />
      <path d="M8 54H56" strokeDasharray="4 3" opacity={0.25} />
      <path d="M20 54V44" />
      <path d="M20 48C16 44 14 40 16 37" opacity={0.6} />
      <path d="M20 48C16 44 14 40 16 37C18 40 20 44 20 48" fill="currentColor" opacity={0.06} />
      <path d="M20 44C24 40 26 36 24 33" opacity={0.6} />
      <path d="M20 44C24 40 26 36 24 33C22 36 20 40 20 44" fill="currentColor" opacity={0.06} />
    </svg>
  );
}

function VermicultureIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x={8} y={18} width={48} height={38} rx={4} />
      <path d="M8 30H56" strokeDasharray="3 2" opacity={0.15} />
      <path d="M8 42H56" strokeDasharray="3 2" opacity={0.15} />
      <path d="M16 36C22 31 28 41 34 36C40 31 46 38 50 35" strokeWidth={2.5} />
      <circle cx={50} cy={35} r={1.5} fill="currentColor" />
      <path d="M28 18V24" opacity={0.35} />
      <path d="M28 20L26 22" opacity={0.35} />
    </svg>
  );
}

function BSFIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx={34} cy={34} rx={18} ry={10} />
      <path d="M22 26V42" opacity={0.2} />
      <path d="M28 25V43" opacity={0.2} />
      <path d="M34 24V44" opacity={0.2} />
      <path d="M40 25V43" opacity={0.2} />
      <path d="M46 26V42" opacity={0.2} />
      <circle cx={16} cy={34} r={4.5} />
      <circle cx={14} cy={33} r={1.2} fill="currentColor" />
      <path d="M24 44L22 50" opacity={0.35} />
      <path d="M30 44L28 50" opacity={0.35} />
      <path d="M36 44L34 50" opacity={0.35} />
      <path d="M42 44L40 50" opacity={0.35} />
    </svg>
  );
}

function IsopodIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx={32} cy={34} rx={16} ry={20} />
      <path d="M16 24H48" opacity={0.2} />
      <path d="M16 30H48" opacity={0.2} />
      <path d="M16 36H48" opacity={0.2} />
      <path d="M16 42H48" opacity={0.2} />
      <path d="M32 14V54" opacity={0.1} />
      <path d="M28 14C26 8 22 5 20 7" />
      <path d="M36 14C38 8 42 5 44 7" />
      <path d="M16 26L10 23" opacity={0.35} />
      <path d="M16 32L10 30" opacity={0.35} />
      <path d="M16 38L10 36" opacity={0.35} />
      <path d="M48 26L54 23" opacity={0.35} />
      <path d="M48 32L54 30" opacity={0.35} />
      <path d="M48 38L54 36" opacity={0.35} />
    </svg>
  );
}

function ThermometerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x={26} y={6} width={12} height={36} rx={6} />
      <circle cx={32} cy={48} r={9} />
      <rect x={30} y={14} width={4} height={30} rx={2} fill="currentColor" opacity={0.1} />
      <circle cx={32} cy={48} r={5.5} fill="currentColor" opacity={0.1} />
      <path d="M38 14H43" opacity={0.25} />
      <path d="M38 20H41" opacity={0.25} />
      <path d="M38 26H43" opacity={0.25} />
      <path d="M38 32H41" opacity={0.25} />
      <path d="M48 38C50 36 50 33 48 31" opacity={0.25} />
      <path d="M52 40C54 36 54 30 52 26" opacity={0.15} />
    </svg>
  );
}

/* ─── Marquee ─── */

const MARQUEE_TOP =
  "ROOFTOP FARM · COMMUNITY COMPOSTING · URBAN AGRICULTURE · ZERO WASTE · FOOD SECURITY · ";

const MARQUEE_MID =
  "40 LITRES SAVED DAILY · 4 COMPOSTING SYSTEMS · 30% LOCAL BY 2030 · EVERY SATURDAY · ";

const MARQUEE_BTM =
  "GROW FOOD · BUILD COMMUNITY · CLOSE THE LOOP · FROM SCRAPS TO SOIL · ";

/* ─── Page ─── */

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-clip">

        {/* ─── Hero · cream ─── */}
        <section className="bg-cream relative overflow-hidden">
          <WormDoodle className="absolute left-[1%] md:left-[3%] top-[40px] w-14 md:w-24 h-auto text-terracotta opacity-75" />
          <BlobDoodle className="absolute right-[-2%] md:right-[3%] top-[100px] w-28 md:w-44 h-auto text-amber opacity-40 -rotate-12" />
          <CurlyDoodle className="absolute left-[6%] md:left-[10%] bottom-[10%] w-16 md:w-28 h-auto text-forest-light opacity-35 rotate-[18deg]" />
          <DotsDoodle className="absolute right-[8%] md:right-[14%] bottom-[20%] w-10 md:w-16 h-auto text-sage opacity-30" />
          <StarDoodle className="absolute left-[22%] top-[60%] w-5 md:w-7 text-terracotta opacity-18" />
          <StarDoodle className="absolute right-[18%] top-[30%] w-4 md:w-5 text-amber opacity-12" />

          <div className="relative z-10 pt-32 md:pt-44 pb-20 md:pb-28 px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="hero-animate text-forest/45 text-xs md:text-sm tracking-[0.3em] uppercase font-medium mb-8 md:mb-10">
                Level 5, Beauty World Centre · Next to Bukit Timah Hill
              </p>

              <h1 className="hero-animate hero-delay-1">
                <span className="block font-heading text-earth text-[clamp(3rem,9vw,7rem)] leading-[0.88]">
                  Three Guys,
                </span>
                <span className="block font-heading text-terracotta text-[clamp(3rem,9vw,7rem)] leading-[0.88]">
                  One Roof,
                </span>
                <span className="block font-heading text-amber text-[clamp(3rem,9vw,7rem)] leading-[0.88]">
                  No Plan
                </span>
              </h1>

              <p className="hero-animate hero-delay-2 text-soil/45 mt-8 md:mt-12 max-w-lg mx-auto leading-relaxed">
                How a landscape architect, a lab tech, and a farmer
                turned a carpark rooftop into something that feeds
                a neighbourhood. Still figuring it out, honestly.
              </p>

              <div className="hero-animate hero-delay-3 mt-8 flex flex-wrap items-center justify-center gap-5">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 bg-forest text-cream px-7 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-forest-light transition-colors"
                >
                  Join a Session
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://www.instagram.com/wethefarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-soil/35 text-sm tracking-[0.12em] uppercase hover:text-soil/60 transition-colors"
                >
                  Message Us
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Marquee ─── */}
        <div className="bg-earth overflow-hidden py-3">
          <div className="marquee-track flex whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-cream/20 text-xs md:text-sm tracking-[0.3em] uppercase font-medium px-2"
              >
                {MARQUEE_TOP}
              </span>
            ))}
          </div>
        </div>

        {/* ─── Origin Story · parchment ─── */}
        <section className="bg-parchment relative overflow-hidden">
          <LoopDoodle className="absolute right-[-1%] md:right-[2%] top-[10%] w-20 md:w-32 h-auto text-terracotta opacity-30 rotate-[22deg]" />
          <WormDoodle className="absolute left-[0%] md:left-[2%] bottom-[8%] w-10 md:w-18 h-auto text-amber opacity-35 -rotate-[20deg]" />
          <StarDoodle className="absolute right-[20%] bottom-[15%] w-5 text-forest opacity-12" />

          <div className="relative z-10 py-20 md:py-28 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-16 items-start">
                <div>
                  <span className="font-heading text-[clamp(6rem,16vw,9rem)] leading-none text-terracotta/[0.07] block">
                    2022
                  </span>
                  <p className="text-xs tracking-[0.25em] uppercase text-forest font-medium mt-3">
                    Post-circuit breaker
                  </p>
                </div>

                <div>
                  <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-terracotta font-medium block mb-3">
                    Our Story
                  </span>
                  <h2 className="font-heading text-[clamp(2rem,4.5vw,3rem)] text-earth leading-tight mb-8">
                    It Started With
                    <br />
                    <span className="text-terracotta">a Bare Rooftop</span>
                  </h2>
                  <div className="space-y-6 text-soil/50 leading-relaxed max-w-[60ch]">
                    <p>
                      There&apos;s a carpark on top of Beauty World Centre. Level 5.
                      Nobody really goes up there. After the circuit breaker
                      lifted, three friends looked at that empty concrete slab
                      and thought: could we grow food here? Probably not. But
                      let&apos;s try anyway.
                    </p>
                    <p>
                      <strong className="text-earth font-semibold">Jin Xiang</strong> is
                      a landscape architect. <strong className="text-earth font-semibold">Nicholas</strong> works
                      in a lab. <strong className="text-earth font-semibold">Darren</strong> is
                      the actual farmer — he&apos;d been growing stuff on leased
                      land in Yishun before this. The rooftop was a different
                      beast: bare concrete, zero shade, full tropical sun. They
                      started hauling soil up on weekends, between their real
                      jobs. No registration, no funding, no plan.
                    </p>
                    <p>
                      Their families thought they were a bit crazy. Their bosses
                      were weirdly supportive. Bit by bit, a small herb patch
                      became actual farming plots, then a composting setup, then
                      a place where random neighbours started showing up on
                      Saturdays to help out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Three Founders · forest ─── */}
        <section className="bg-forest text-cream relative overflow-hidden">
          <BlobDoodle className="absolute left-[-2%] md:left-[1%] top-[5%] w-24 md:w-36 h-auto text-cream opacity-[0.06] rotate-[15deg]" />
          <CurlyDoodle className="absolute right-[0%] md:right-[3%] bottom-[8%] w-20 md:w-32 h-auto text-amber opacity-[0.08] -rotate-12" />
          <ZigzagDoodle className="absolute left-[5%] md:left-[8%] bottom-[-5%] w-10 md:w-16 h-auto text-honey opacity-[0.06]" />
          <StarDoodle className="absolute right-[15%] top-[12%] w-5 text-cream opacity-[0.08]" />
          <StarDoodle className="absolute left-[20%] bottom-[20%] w-4 text-amber opacity-[0.06]" />

          <div className="relative z-10 py-20 md:py-28 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-14 md:mb-20">
                <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-honey/50 font-medium block mb-3">
                  The Ones Responsible
                </span>
                <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] leading-tight">
                  Blame These Three
                </h2>
              </div>

              <div className="grid md:grid-cols-3">
                {[
                  {
                    icon: <CompassIcon className="w-16 h-16 mx-auto" />,
                    name: "Jin Xiang",
                    role: "Landscape Architect",
                    desc: "Looked at a bare concrete slab and saw a farm. Drew up the layout — where the plots go, where compost happens, where people sit. His day job is designing spaces; this one he does for free on Saturdays.",
                  },
                  {
                    icon: <BeakerIcon className="w-16 h-16 mx-auto" />,
                    name: "Nicholas",
                    role: "Lab Technologist",
                    desc: "Owns a thermometer he uses exclusively on compost piles. Runs the decomposition systems like a science experiment because, for him, it is one. Will tell you the hot pile hit 71°C whether you asked or not.",
                  },
                  {
                    icon: <TrowelIcon className="w-16 h-16 mx-auto" />,
                    name: "Darren",
                    role: "Urban Farmer",
                    desc: "Has had soil under his nails since before any of this started. Farmed on leased land in Yishun, then moved up to this rooftop. If something is growing on Level 5, it's probably because Darren put it there.",
                  },
                ].map(({ icon, name, role, desc }, i) => (
                  <div
                    key={name}
                    className={`py-8 md:py-0 text-center ${
                      i > 0 ? "border-t md:border-t-0 md:border-l border-cream/[0.08] md:pl-8 lg:pl-10" : ""
                    } ${i < 2 ? "md:pr-8 lg:pr-10" : ""}`}
                  >
                    <div className="text-cream/50 mb-5">{icon}</div>
                    <span className="font-heading text-terracotta text-2xl md:text-[1.75rem] block mb-1">
                      {name}
                    </span>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-amber/60 font-medium block mb-4">
                      {role}
                    </span>
                    <p className="text-cream/35 leading-relaxed text-[14px] max-w-[26ch] mx-auto">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pull Quote · sunshine ─── */}
        <section className="bg-sunshine relative overflow-hidden">
          <WormDoodle className="absolute right-[1%] md:right-[4%] top-[-10px] w-12 md:w-20 h-auto text-terracotta opacity-40 rotate-[25deg]" />
          <DotsDoodle className="absolute left-[3%] md:left-[6%] bottom-[10%] w-10 md:w-16 h-auto text-forest opacity-15" />
          <LoopDoodle className="absolute left-[-1%] md:left-[2%] top-[15%] w-16 md:w-28 h-auto text-amber opacity-20 -rotate-[10deg]" />

          <div className="relative z-10 px-6 py-16 md:py-20">
            <div className="max-w-3xl mx-auto bg-earth rounded-[1.5rem] md:rounded-[2rem] px-8 md:px-16 py-12 md:py-16 text-center relative overflow-hidden">
              <StarDoodle className="absolute top-4 left-6 w-5 text-cream/10" />
              <StarDoodle className="absolute bottom-5 right-8 w-4 text-cream/[0.06]" />
              <h3 className="font-heading text-cream/40 text-[clamp(1.1rem,2.2vw,1.4rem)] mb-6 tracking-wide">
                What We Believe
              </h3>
              <p className="font-heading text-[clamp(1.3rem,3vw,2.1rem)] text-cream/80 leading-snug max-w-[45ch] mx-auto">
                &ldquo;Any organic matter can be composted given the right
                conditions. Nature already knows how — we just set up the
                space.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ─── Four Ways to Rot · cream ─── */}
        <section className="bg-cream relative overflow-hidden">
          <BlobDoodle className="absolute right-[-2%] md:right-[1%] top-[5%] w-24 md:w-36 h-auto text-sage opacity-25 rotate-[30deg]" />
          <ZigzagDoodle className="absolute left-[0%] md:left-[3%] bottom-[5%] w-10 md:w-18 h-auto text-terracotta opacity-25 rotate-6" />
          <CurlyDoodle className="absolute right-[4%] md:right-[8%] bottom-[15%] w-14 md:w-24 h-auto text-forest-light opacity-20 -rotate-[15deg]" />
          <StarDoodle className="absolute left-[15%] top-[8%] w-5 text-amber opacity-15" />

          <div className="relative z-10 py-20 md:py-28 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-14 md:mb-20">
                <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-terracotta font-medium block mb-3">
                  Powered by the SG Eco Fund
                </span>
                <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] text-earth leading-tight">
                  Four Ways to Rot
                </h2>
              </div>

              <div className="grid md:grid-cols-2">
                {[
                  {
                    icon: <VermicultureIcon className="w-14 h-14" />,
                    num: "01",
                    title: "Vermiculture",
                    body: "Worms. A lot of worms. They eat through fruit scraps, veggie peels, and coffee grounds and leave behind dark, crumbly castings that plants go crazy for. They're not picky eaters.",
                  },
                  {
                    icon: <BSFIcon className="w-14 h-14" />,
                    num: "02",
                    title: "Black Soldier Flies",
                    body: "The stuff worms won't touch — citrus, oily scraps, the tough bits — goes to the BSF larvae. These things are voracious. They chew through waste way faster than the worms.",
                  },
                  {
                    icon: <IsopodIcon className="w-14 h-14" />,
                    num: "03",
                    title: "Isopod Composting",
                    body: "Tiny roly-poly crustaceans that handle the dry, woody stuff. Leaves, twigs, fibrous scraps. They're slower than the worms but they don't complain and they work weekends.",
                  },
                  {
                    icon: <ThermometerIcon className="w-14 h-14" />,
                    num: "04",
                    title: "Hot Composting",
                    body: "Microbes generate so much heat the pile hits 71°C. That kills pathogens and breaks things down fast. This is Nicholas's favourite system.",
                  },
                ].map(({ icon, num, title, body }, i) => (
                  <div
                    key={num}
                    className={`flex gap-5 p-6 md:p-8 border-earth/[0.08] ${
                      i < 2 ? "border-b" : ""
                    } ${i === 2 ? "md:border-b-0" : ""} ${
                      i % 2 === 0 ? "md:border-r" : ""
                    }`}
                  >
                    <div className="text-earth/40 shrink-0 mt-1">{icon}</div>
                    <div>
                      <span className="font-heading text-terracotta text-2xl md:text-[1.75rem] block mb-1 leading-none">
                        {num}
                      </span>
                      <h3 className="font-heading text-lg md:text-xl text-earth mb-2">
                        {title}
                      </h3>
                      <p className="text-soil/40 leading-relaxed text-[14px] max-w-[32ch]">
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Marquee 2 ─── */}
        <div className="bg-terracotta overflow-hidden py-3">
          <div className="marquee-track-reverse flex whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-cream/25 text-xs md:text-sm tracking-[0.3em] uppercase font-medium px-2"
              >
                {MARQUEE_MID}
              </span>
            ))}
          </div>
        </div>

        {/* ─── The Bigger Picture · sunshine ─── */}
        <section className="bg-sunshine relative overflow-hidden">
          <WormDoodle className="absolute left-[0%] md:left-[2%] top-[10%] w-12 md:w-20 h-auto text-forest opacity-20 -rotate-[18deg]" />
          <BlobDoodle className="absolute right-[-1%] md:right-[3%] bottom-[5%] w-20 md:w-32 h-auto text-amber opacity-15 rotate-[20deg]" />
          <StarDoodle className="absolute right-[22%] top-[15%] w-5 text-terracotta opacity-15" />

          <div className="relative z-10 py-20 md:py-28 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-start">
                <div>
                  <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-terracotta font-medium block mb-3">
                    The Bigger Picture
                  </span>
                  <h2 className="font-heading text-[clamp(2rem,4.5vw,3rem)] text-earth leading-tight mb-8">
                    30 by 30
                  </h2>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                    {[
                      { value: "90%", label: "of SG's food imported" },
                      { value: "71°C", label: "hottest compost pile" },
                      { value: "4", label: "ways we rot things" },
                      { value: "∞", label: "cups of kopi drank" },
                    ].map(({ value, label }) => (
                      <div key={label}>
                        <span className="font-heading text-terracotta text-[clamp(2rem,5vw,3rem)] block leading-none">
                          {value}
                        </span>
                        <p className="text-soil/40 text-xs tracking-wide uppercase mt-2 max-w-[14ch]">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-5 text-soil/50 leading-relaxed">
                  <p>
                    Here&apos;s a number that should bother you: Singapore
                    imports over 90% of its food. From 170+ countries. The
                    government wants to change that — 30% locally grown by
                    2030. That&apos;s ambitious. We&apos;re not going to hit
                    it alone from a carpark roof, obviously.
                  </p>
                  <p>
                    But the loop works. Hawker stalls give us food waste. We
                    compost it. The compost grows the food. Whatever we
                    don&apos;t eat goes back into the pile. Nothing leaves,
                    nothing gets incinerated. It&apos;s a small thing, but
                    it&apos;s a real thing, and the uncle at the drink stall
                    downstairs saves us 40 litres a day, so someone believes
                    in it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Neighbourhood Connection · parchment ─── */}
        <section className="bg-parchment relative overflow-hidden">
          <CurlyDoodle className="absolute right-[0%] md:right-[3%] top-[10%] w-18 md:w-30 h-auto text-terracotta opacity-25 -rotate-[12deg]" />
          <LoopDoodle className="absolute left-[-1%] md:left-[2%] bottom-[10%] w-16 md:w-26 h-auto text-forest-light opacity-20 rotate-[15deg]" />
          <DotsDoodle className="absolute left-[10%] top-[5%] w-8 md:w-14 h-auto text-honey opacity-20" />
          <StarDoodle className="absolute right-[18%] bottom-[18%] w-5 text-forest opacity-10" />

          <div className="relative z-10 py-20 md:py-28 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-[1fr_220px] gap-8 md:gap-16 items-start">
                <div>
                  <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-terracotta font-medium block mb-3">
                    The Neighbourhood Loop
                  </span>
                  <h2 className="font-heading text-[clamp(2rem,4.5vw,3rem)] text-earth leading-tight mb-8">
                    From Hawker Stalls
                    <br />
                    <span className="text-terracotta">to Rooftop Soil</span>
                  </h2>
                  <div className="space-y-6 text-soil/50 leading-relaxed max-w-[60ch]">
                    <p>
                      The hawker stalls, the juice shops, the supermarket — they
                      all save their scraps for us now. Fruit pulp, veggie
                      trimmings, coffee grounds. Hundreds of litres a week that
                      would otherwise get incinerated.
                    </p>
                    <p>
                      <strong className="text-earth font-semibold">Uncle Meng Chai</strong> runs
                      the beverage stall downstairs. He&apos;s 75. Been at that
                      stall for over 20 years. Every morning he sets aside about
                      40 litres of food waste for us. Doesn&apos;t miss a day.
                      We didn&apos;t ask him to be that consistent — he just is.
                    </p>
                    <p>
                      Everything loops back. Compost feeds the soil, soil grows
                      the food, whatever we don&apos;t use gets composted again.
                      The harvest ends up in cooking workshops, or gets shared
                      around the neighbourhood. We want this place to be the
                      kind of spot where you wander up out of curiosity and
                      leave with a bag of kangkong and a new friend.
                    </p>
                  </div>
                </div>

                <div className="md:mt-14">
                  <span className="font-heading text-[clamp(5rem,14vw,7rem)] leading-none text-forest/[0.06] block">
                    40L
                  </span>
                  <p className="text-xs tracking-[0.25em] uppercase text-forest font-medium mt-3">
                    Daily from one stall alone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA · earth ─── */}
        <section className="bg-earth relative overflow-hidden">
          <WormDoodle className="absolute right-[2%] md:right-[6%] top-[10%] w-14 md:w-22 h-auto text-terracotta opacity-[0.08] rotate-[18deg]" />
          <BlobDoodle className="absolute left-[-2%] md:left-[2%] bottom-[-10%] w-24 md:w-36 h-auto text-forest opacity-[0.06] -rotate-6" />
          <CurlyDoodle className="absolute left-[15%] top-[5%] w-14 md:w-24 h-auto text-amber opacity-[0.06] rotate-[12deg]" />
          <StarDoodle className="absolute right-[25%] bottom-[20%] w-5 text-cream opacity-[0.06]" />

          <div className="relative z-10 px-6 py-24 md:py-32 text-center">
            <div className="max-w-2xl mx-auto">
              <StarDoodle className="w-7 h-7 text-amber/30 mx-auto mb-6" />
              <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-honey/45 block">
                Saturdays, Level 5
              </span>
              <h2 className="font-heading text-cream text-[clamp(2.5rem,6vw,4.5rem)] mt-4 mb-6 leading-tight">
                Take the Lift
                <br />
                to the Roof
              </h2>
              <p className="text-cream/35 max-w-md mx-auto mb-10 leading-relaxed">
                Want to volunteer? Great. Want to drop off food scraps?
                Also great. Want to just see what a rooftop farm looks
                like? Honestly, that&apos;s how most people start.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 bg-terracotta text-cream px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:brightness-110 transition-all"
                >
                  Join an Event
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://www.instagram.com/wethefarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-cream/15 text-cream/50 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-cream/5 transition-colors"
                >
                  Message Us on Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Bottom Marquee ─── */}
        <div className="bg-forest overflow-hidden py-3">
          <div className="marquee-track-reverse flex whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-cream/15 text-xs md:text-sm tracking-[0.3em] uppercase font-medium px-2"
              >
                {MARQUEE_BTM}
              </span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
