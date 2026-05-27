import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FarmCritters from "@/components/FarmCritters";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

/* ─── Process section line-art icons ─── */

function BucketIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-16 h-16 mx-auto"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 26L20 52H44L48 26" />
      <ellipse cx={32} cy={26} rx={16} ry={4.5} />
      <path d="M22 22C22 14 42 14 42 22" />
      <circle cx={27} cy={36} r={2.5} fill="currentColor" opacity={0.12} />
      <circle cx={37} cy={40} r={2} fill="currentColor" opacity={0.12} />
      <path d="M30 33L33 29" />
    </svg>
  );
}

function WormIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-16 h-16 mx-auto"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x={16} y={22} width={32} height={30} rx={3} />
      <path d="M14 22H50" />
      <path d="M28 18V22M36 18V22" />
      <path d="M24 38C28 33 32 43 36 38C40 33 43 39 46 37" strokeWidth={2.2} />
      <path d="M27 14C27 10 29 10 29 14" opacity={0.4} />
      <path d="M35 12C35 8 37 8 37 12" opacity={0.4} />
    </svg>
  );
}

function SproutIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-16 h-16 mx-auto"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 40L22 56H42L46 40" />
      <path d="M16 40H48" />
      <path d="M32 40V24" />
      <path d="M32 30C24 26 20 20 22 16" />
      <path d="M32 30C24 26 20 20 22 16C26 18 30 24 32 30" fill="currentColor" opacity={0.08} />
      <path d="M32 24C40 20 44 14 42 10" />
      <path d="M32 24C40 20 44 14 42 10C38 12 34 18 32 24" fill="currentColor" opacity={0.08} />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <FarmCritters />
      <Header />
      <main className="flex-1 relative overflow-x-clip">
        {/* Fixed plant photo background */}
        <div className="fixed inset-0" style={{ zIndex: -1 }}>
          <img
            src="/hero-farm.jpg"
            alt=""
            className="w-full h-full object-cover scale-[1.02]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(170deg, rgba(59,74,43,0.32) 0%, rgba(44,60,30,0.48) 100%)",
            }}
          />
        </div>

        {/* ─── Hero Card ─── */}
        <section className="pt-28 md:pt-36 px-4 md:px-6">
          <div className="flex justify-center mb-8 md:mb-10">
            <Image
              src="/logo-animated.svg"
              alt="We The Farm"
              width={480}
              height={240}
              className="w-[320px] md:w-[420px] h-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
              priority
            />
          </div>
          <div className="max-w-3xl mx-auto bg-cream/[0.94] rounded-[2rem] px-8 md:px-16 py-14 md:py-20 text-center shadow-[0_8px_40px_-12px_rgba(44,29,16,0.10)] hero-animate">
            <h1 className="font-heading text-earth text-[clamp(2.8rem,8vw,5rem)] leading-[0.88]">
              Farming
              <span className="block font-sans text-forest/35 text-[clamp(0.8rem,1.8vw,1.15rem)] tracking-[0.3em] uppercase font-light my-2 md:my-3">
                in the
              </span>
              <span className="text-terracotta">Sky</span>
            </h1>
            <p className="text-forest text-xs md:text-sm tracking-[0.25em] uppercase font-medium mt-6">
              For the soil. For the people. For the fun of it.
            </p>
            <p className="text-soil/50 mt-8 max-w-lg mx-auto leading-relaxed">
              We&apos;re a rooftop farm on Level 5 of a carpark in Beauty World.
              The hawker aunties and uncles downstairs save their food scraps
              for us, we turn it into compost, and we grow food with it.
              That&apos;s basically the whole thing.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 bg-forest text-cream px-7 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-forest-light transition-colors"
              >
                Join a Session
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-soil/35 text-sm tracking-[0.12em] uppercase hover:text-soil/60 transition-colors"
              >
                Our Story
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Decorative Gap 1 ─── */}
        <div className="relative h-36 md:h-48">
          <WormShape className="absolute left-[4%] md:left-[8%] -top-6 w-16 md:w-24 h-auto text-terracotta opacity-85 rotate-[15deg]" />
          <BlobRing className="absolute right-[5%] md:right-[12%] top-0 w-24 md:w-40 h-auto text-amber opacity-60 -rotate-6" />
          <CurlyShape className="absolute left-[38%] md:left-[46%] bottom-0 w-20 md:w-32 h-auto text-forest-light opacity-50 rotate-[-18deg]" />
          <DotCluster className="absolute right-[24%] md:right-[30%] -top-4 w-14 md:w-20 h-auto text-honey opacity-45" />
        </div>

        {/* ─── Process Card ─── */}
        <section className="px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-cream/[0.94] rounded-[2rem] px-6 md:px-14 py-12 md:py-16 shadow-[0_8px_40px_-12px_rgba(44,29,16,0.10)]">
            <div className="text-center mb-10 md:mb-14">
              <span className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-forest font-medium">
                How It Works
              </span>
              <h2 className="font-heading text-[clamp(1.8rem,4.5vw,3rem)] text-earth mt-2">
                Rot It, Grow It, Eat It
              </h2>
            </div>

            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-earth/10">
              {[
                {
                  icon: <BucketIcon />,
                  title: "Collect the Scraps",
                  body: "The hawkers downstairs save their food scraps for us. 40 litres a day, hauled up to Level 5.",
                },
                {
                  icon: <WormIcon />,
                  title: "Let It Rot (Nicely)",
                  body: "Worms, black soldier fly larvae, and good old heat. Four composting systems running at once.",
                },
                {
                  icon: <SproutIcon />,
                  title: "Grow & Eat",
                  body: "Compost feeds the soil, soil feeds the plants. Harvest goes into workshops and cooking sessions.",
                },
              ].map(({ icon, title, body }, i) => (
                <div
                  key={title}
                  className={`py-8 md:py-0 text-center ${
                    i > 0 ? "md:pl-8 lg:pl-10" : ""
                  } ${i < 2 ? "md:pr-8 lg:pr-10" : ""}`}
                >
                  <h3 className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-earth font-semibold mb-5">
                    {title}
                  </h3>
                  <div className="text-earth/60 mb-5">{icon}</div>
                  <p className="text-soil/45 text-[14px] leading-relaxed max-w-[28ch] mx-auto">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Decorative Gap 2 ─── */}
        <div className="relative h-36 md:h-48">
          <WormShape className="absolute right-[5%] md:right-[10%] top-0 w-14 md:w-20 h-auto text-amber opacity-70 -rotate-[20deg]" />
          <LoopyShape className="absolute left-[6%] md:left-[14%] top-2 w-24 md:w-36 h-auto text-terracotta opacity-55 rotate-[8deg]" />
          <DotCluster className="absolute left-[48%] md:left-[52%] -top-2 w-12 md:w-18 h-auto text-forest-light opacity-40 rotate-45" />
          <BlobRing className="absolute right-[30%] md:right-[35%] bottom-0 w-18 md:w-28 h-auto text-honey opacity-45 rotate-[22deg]" />
        </div>

        {/* ─── The Farm — editorial split ─── */}
        <section className="px-4 md:px-6">
          <div className="max-w-5xl mx-auto bg-cream/[0.94] rounded-[2rem] overflow-hidden shadow-[0_8px_40px_-12px_rgba(44,29,16,0.10)]">
            <div className="grid md:grid-cols-2 items-center">
              <div className="aspect-[4/3] md:aspect-auto md:min-h-[440px] relative overflow-hidden">
                <img
                  src="/hero-farm.jpg"
                  alt="We The Farm rooftop garden"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="px-8 md:px-12 lg:px-16 py-12 md:py-0">
                <div className="max-w-sm">
                  <span className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-terracotta font-medium block">
                    The Farm
                  </span>
                  <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.5rem)] text-earth leading-tight mt-3 mb-5">
                    Raw Concrete,
                    <br />
                    No Soil, Full Sun
                  </h2>
                  <p className="text-soil/45 leading-relaxed text-[15px]">
                    This rooftop wasn&apos;t supposed to be a farm. It&apos;s a
                    carpark roof next to Bukit Timah Hill &mdash; bare concrete,
                    zero shade. Jin Xiang, Nicholas, and Darren started clearing
                    it one weekend at a time. Now there&apos;s soil up here.
                    And worms. Lots of worms.
                  </p>
                  <div className="mt-7">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 text-terracotta font-medium text-sm tracking-wide hover:gap-3 transition-all duration-300"
                    >
                      Read Our Story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Decorative Gap 3 ─── */}
        <div className="relative h-36 md:h-48">
          <CurlyShape className="absolute right-[4%] md:right-[8%] top-0 w-22 md:w-36 h-auto text-terracotta opacity-60 rotate-[30deg]" />
          <WormShape className="absolute left-[15%] md:left-[22%] top-2 w-14 md:w-20 h-auto text-forest-light opacity-55 -rotate-[10deg]" />
          <DotCluster className="absolute right-[36%] bottom-0 w-16 md:w-22 h-auto text-amber opacity-40" />
          <LoopyShape className="absolute left-[50%] md:left-[55%] top-4 w-18 md:w-28 h-auto text-honey opacity-40 -rotate-12" />
        </div>

        {/* ─── CTA Card ─── */}
        <section className="px-4 md:px-6 pb-20 md:pb-28">
          <div className="max-w-2xl mx-auto bg-cream/[0.94] rounded-[2rem] px-8 md:px-14 py-12 md:py-16 text-center shadow-[0_8px_40px_-12px_rgba(44,29,16,0.10)]">
            <span className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-terracotta font-medium">
              Saturdays on the Roof
            </span>
            <h2 className="font-heading text-earth text-[clamp(2rem,5vw,3.5rem)] mt-3 mb-5 leading-tight">
              Come Lah
            </h2>
            <p className="text-soil/45 max-w-md mx-auto mb-8 text-[15px] leading-relaxed">
              We do farming, composting, cooking, and whatever else comes up.
              Saturdays, Level 5, Beauty World Centre. Bring sunscreen.
              Don&apos;t know anything about composting? No worries lah &mdash;
              most people who show up also first time one.
            </p>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 bg-terracotta text-cream px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:brightness-110 transition-all"
            >
              Browse Events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
        {/* ─── SG Marquee ─── */}
        <div className="bg-forest overflow-hidden py-3">
          <div className="marquee-track flex whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-cream/15 text-xs md:text-sm tracking-[0.3em] uppercase font-medium px-2"
              >
                BEAUTY WORLD · LEVEL 5 · KOPI · PANDAN · KANGKONG · HAWKER SCRAPS · BUKIT TIMAH · CHILI PADI · SHIOK · GOTONG ROYONG ·{" "}
              </span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
