"use client";

import { useEffect, useRef, useState, useCallback, type FC, type SVGProps } from "react";

/* ─── SG-themed SVG Illustrations ─── */

function Otter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 44" fill="none" {...props}>
      <ellipse cx={24} cy={28} rx={14} ry={10} fill="#8B6914" />
      <ellipse cx={24} cy={30} rx={10} ry={6} fill="#C4A44A" fillOpacity={0.5} />
      <ellipse cx={24} cy={18} rx={10} ry={9} fill="#8B6914" />
      <circle cx={18} cy={15} r={3} fill="#8B6914" />
      <circle cx={30} cy={15} r={3} fill="#8B6914" />
      <circle cx={18} cy={15} r={2} fill="#3A2A1A" />
      <circle cx={30} cy={15} r={2} fill="#3A2A1A" />
      <circle cx={17.4} cy={14.4} r={0.7} fill="#FAF4E8" />
      <circle cx={29.4} cy={14.4} r={0.7} fill="#FAF4E8" />
      <ellipse cx={24} cy={20} rx={5} ry={3} fill="#C4A44A" fillOpacity={0.6} />
      <ellipse cx={24} cy={20} rx={2} ry={1.2} fill="#3A2A1A" />
      <circle cx={22} cy={19} r={0.6} fill="#3A2A1A" opacity={0.4} />
      <circle cx={26} cy={19} r={0.6} fill="#3A2A1A" opacity={0.4} />
      <path d="M20 22c2 1.5 6 1.5 8 0" stroke="#3A2A1A" strokeWidth={0.7} fill="none" />
      <path d="M38 26c4 0 7-2 8-5" stroke="#8B6914" strokeWidth={2.5} strokeLinecap="round" fill="none" />
    </svg>
  );
}

function Mynah(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 44 48" fill="none" {...props}>
      <ellipse cx={22} cy={30} rx={11} ry={12} fill="#3A2A1A" />
      <ellipse cx={22} cy={32} rx={7} ry={6} fill="#4A3628" />
      <circle cx={22} cy={16} r={9} fill="#3A2A1A" />
      <path d="M16 12c-1-3-1-6 1-7 1 1 2 4 1 7" fill="#E2A63B" />
      <path d="M28 12c1-3 1-6-1-7-1 1-2 4-1 7" fill="#E2A63B" />
      <circle cx={18} cy={15} r={2.5} fill="#FAF4E8" />
      <circle cx={26} cy={15} r={2.5} fill="#FAF4E8" />
      <circle cx={18.5} cy={15.5} r={1.3} fill="#3A2A1A" />
      <circle cx={26.5} cy={15.5} r={1.3} fill="#3A2A1A" />
      <path d="M22 18l-4 3h8z" fill="#E2A63B" />
      <path d="M18 42v4l-2 1M18 46l2 1" stroke="#E2A63B" strokeWidth={1.2} strokeLinecap="round" fill="none" />
      <path d="M26 42v4l-2 1M26 46l2 1" stroke="#E2A63B" strokeWidth={1.2} strokeLinecap="round" fill="none" />
    </svg>
  );
}

function MonitorLizard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 36" fill="none" {...props}>
      <ellipse cx={28} cy={20} rx={14} ry={8} fill="#5C6B3A" />
      <ellipse cx={28} cy={22} rx={10} ry={4} fill="#7A8C52" fillOpacity={0.4} />
      <ellipse cx={14} cy={16} rx={8} ry={6} fill="#5C6B3A" />
      <circle cx={10} cy={13} r={2} fill="#E2A63B" />
      <circle cx={10.5} cy={13} r={1} fill="#3A2A1A" />
      <path d="M7 18l-3 1" stroke="#D4764E" strokeWidth={1} strokeLinecap="round" />
      <path d="M7 18l-2 2" stroke="#D4764E" strokeWidth={0.8} strokeLinecap="round" />
      <path d="M20 28c-3 3-4 5-3 6l2-1 1.5 1" stroke="#5C6B3A" strokeWidth={1.3} strokeLinecap="round" fill="none" />
      <path d="M36 28c3 3 4 5 3 6l-2-1-1.5 1" stroke="#5C6B3A" strokeWidth={1.3} strokeLinecap="round" fill="none" />
      <path d="M42 20c4 0 8 1 12 0 4-1 7-3 9-4" stroke="#5C6B3A" strokeWidth={3} strokeLinecap="round" fill="none" />
      <circle cx={22} cy={18} r={1} fill="#7A8C52" opacity={0.5} />
      <circle cx={28} cy={17} r={1.2} fill="#7A8C52" opacity={0.5} />
      <circle cx={34} cy={19} r={0.9} fill="#7A8C52" opacity={0.5} />
    </svg>
  );
}

function Hornbill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 52 48" fill="none" {...props}>
      <ellipse cx={28} cy={30} rx={12} ry={13} fill="#1A1A1A" />
      <ellipse cx={28} cy={32} rx={8} ry={6} fill="#FAF4E8" fillOpacity={0.15} />
      <circle cx={26} cy={16} r={10} fill="#1A1A1A" />
      <circle cx={22} cy={14} r={2.5} fill="#FAF4E8" />
      <circle cx={22.5} cy={14.5} r={1.3} fill="#1A1A1A" />
      <path d="M16 18c-8 2-14 0-16-2l16-2z" fill="#E2A63B" />
      <path d="M16 16c-6-2-10-1-12 0" fill="#D4764E" />
      <path d="M20 8c-2-4-1-7 1-8 1 2 2 5 1 8" fill="#D4764E" />
      <path d="M24 6c0-3 2-6 4-6 0 2-1 5-3 7" fill="#E2A63B" />
      <ellipse cx={12} cy={14} rx={10} ry={3} fill="#E2A63B" transform="rotate(-5 12 14)" />
      <path d="M24 42v4l-2 1M24 46l2 1" stroke="#4A3628" strokeWidth={1.2} strokeLinecap="round" fill="none" />
      <path d="M32 42v4l-2 1M32 46l2 1" stroke="#4A3628" strokeWidth={1.2} strokeLinecap="round" fill="none" />
      <ellipse cx={18} cy={14} rx={6} ry={3.5} fill="#E2A63B" transform="rotate(-5 18 14)" />
    </svg>
  );
}

function Merlion(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 44 48" fill="none" {...props}>
      <path d="M16 44c0-6 2-12 2-18" stroke="#B8C4D4" strokeWidth={2} strokeLinecap="round" fill="none" />
      <path d="M28 44c0-6-2-12-2-18" stroke="#B8C4D4" strokeWidth={2} strokeLinecap="round" fill="none" />
      <ellipse cx={22} cy={28} rx={10} ry={6} fill="#B8C4D4" />
      <path d="M14 26c-2-2-3-6-2-10 2 2 4 6 4 10" fill="#B8C4D4" />
      <path d="M30 26c2-2 3-6 2-10-2 2-4 6-4 10" fill="#B8C4D4" />
      <ellipse cx={22} cy={18} rx={8} ry={7} fill="#B8C4D4" />
      <circle cx={18} cy={16} r={1.8} fill="#3A2A1A" />
      <circle cx={26} cy={16} r={1.8} fill="#3A2A1A" />
      <circle cx={18.3} cy={15.7} r={0.6} fill="#FAF4E8" />
      <circle cx={26.3} cy={15.7} r={0.6} fill="#FAF4E8" />
      <ellipse cx={22} cy={20} rx={3} ry={1.5} fill="#3A2A1A" opacity={0.3} />
      <path d="M18 6c-1-3 0-5 2-6 1 1 1 3 0 5" fill="#E2A63B" />
      <path d="M22 5c0-3 1-5 3-5 0 2-1 4-2 5" fill="#E2A63B" />
      <path d="M26 6c1-3 0-5-2-6-1 1-1 3 0 5" fill="#E2A63B" />
      <path d="M12 22c-4 2-6 4-6 2 0-1 2-4 6-4" fill="#B8C4D4" />
      <path d="M8 20c-3 0-5-1-4-2 1-1 3 0 4 2" fill="#B8C4D4" />
      <path d="M6 18l-4 1" stroke="#4A9BD9" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M5 20l-3 2" stroke="#4A9BD9" strokeWidth={1.2} strokeLinecap="round" opacity={0.7} />
      <path d="M7 22l-4 3" stroke="#4A9BD9" strokeWidth={1} strokeLinecap="round" opacity={0.5} />
      <path d="M22 26c-2 4-3 8 0 12 3-4 2-8 0-12" fill="#4A9BD9" fillOpacity={0.15} />
    </svg>
  );
}

function Orchid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 48" fill="none" {...props}>
      <path d="M20 48c0-10 -1-16 0-26" stroke="#4A8B3F" strokeWidth={1.8} strokeLinecap="round" fill="none" />
      <path d="M20 36c-6-1-10-4-10-7 3 0 7 2 10 6" fill="#8CBC7B" />
      <ellipse cx={20} cy={14} rx={5} ry={8} fill="#C77DBA" fillOpacity={0.7} />
      <ellipse cx={20} cy={14} rx={5} ry={8} fill="#C77DBA" fillOpacity={0.6} transform="rotate(72 20 14)" />
      <ellipse cx={20} cy={14} rx={5} ry={8} fill="#D4A0CC" fillOpacity={0.5} transform="rotate(144 20 14)" />
      <ellipse cx={20} cy={14} rx={5} ry={8} fill="#C77DBA" fillOpacity={0.6} transform="rotate(216 20 14)" />
      <ellipse cx={20} cy={14} rx={5} ry={8} fill="#D4A0CC" fillOpacity={0.5} transform="rotate(288 20 14)" />
      <circle cx={20} cy={14} r={3.5} fill="#FAF4E8" />
      <circle cx={20} cy={14} r={2} fill="#E2A63B" fillOpacity={0.6} />
      <path d="M18 13c1 1 3 1 4 0" stroke="#C77DBA" strokeWidth={0.6} fill="none" />
    </svg>
  );
}

function PandanLeaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 36 48" fill="none" {...props}>
      <path d="M18 46c1-10 1-24 0-38" stroke="#4A8B3F" strokeWidth={1.5} strokeLinecap="round" fill="none" />
      <path d="M18 12c-8 2-14 8-14 6 2-4 8-9 14-9" fill="#4A8B3F" fillOpacity={0.7} />
      <path d="M18 12c8 2 14 8 14 6-2-4-8-9-14-9" fill="#8CBC7B" fillOpacity={0.7} />
      <path d="M18 20c-10 3-15 8-14 6 3-4 8-8 14-8" fill="#8CBC7B" fillOpacity={0.6} />
      <path d="M18 20c10 3 15 8 14 6-3-4-8-8-14-8" fill="#4A8B3F" fillOpacity={0.6} />
      <path d="M18 28c-9 4-12 7-11 6 2-3 6-7 11-7" fill="#4A8B3F" fillOpacity={0.5} />
      <path d="M18 28c9 4 12 7 11 6-2-3-6-7-11-7" fill="#8CBC7B" fillOpacity={0.5} />
      <path d="M18 36c-7 4-9 5-8 4 2-2 4-5 8-5" fill="#8CBC7B" fillOpacity={0.4} />
      <path d="M18 36c7 4 9 5 8 4-2-2-4-5-8-5" fill="#4A8B3F" fillOpacity={0.4} />
    </svg>
  );
}

function ChiliPadi(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 48" fill="none" {...props}>
      <path d="M14 10c-1-4 1-7 2-9" stroke="#4A8B3F" strokeWidth={1.5} strokeLinecap="round" fill="none" />
      <path d="M10 12c-2-1-3-4-1-5 2-1 4 1 5 3 1-2 3-4 5-3 2 1 1 4-1 5" fill="#4A8B3F" />
      <path d="M10 12c-1 10 0 18 4 34 4-16 5-24 4-34" fill="#D4764E" />
      <path d="M10 12c-1 10 0 18 4 34" stroke="#C43A2B" strokeWidth={0.5} fill="none" opacity={0.3} />
      <ellipse cx={14} cy={20} rx={3} ry={1.5} fill="#E8795E" fillOpacity={0.3} />
    </svg>
  );
}

function KopiCup(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 44" fill="none" {...props}>
      <path d="M8 12H32L29 38H11L8 12Z" fill="#F5ECD6" />
      <path d="M8 12H32L29 38H11L8 12Z" stroke="#D4A130" strokeWidth={1.2} />
      <path d="M32 18c4 0 6 3 6 7s-2 7-6 7" stroke="#D4A130" strokeWidth={1.5} strokeLinecap="round" fill="none" />
      <path d="M6 12H34" stroke="#D4A130" strokeWidth={2.5} strokeLinecap="round" />
      <rect x={10} y={14} width={20} height={6} rx={1} fill="#6B3E1A" fillOpacity={0.7} />
      <path d="M16 6c0-3 2-5 3-3 1 2 2 0 3-2" stroke="#8B6914" strokeWidth={1.2} strokeLinecap="round" fill="none" opacity={0.4} />
      <path d="M22 4c0-2 2-4 3-2" stroke="#8B6914" strokeWidth={1} strokeLinecap="round" fill="none" opacity={0.3} />
      <ellipse cx={20} cy={40} rx={12} ry={2.5} fill="#D4A130" fillOpacity={0.3} />
    </svg>
  );
}

function Durian(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 44" fill="none" {...props}>
      <ellipse cx={20} cy={24} rx={14} ry={16} fill="#8B7D3C" />
      <path d="M10 14c-1-3 0-5 2-4" stroke="#6B5E2A" strokeWidth={1.5} strokeLinecap="round" fill="none" />
      <path d="M16 10c0-3 1-5 3-4" stroke="#6B5E2A" strokeWidth={1.5} strokeLinecap="round" fill="none" />
      <path d="M22 9c0-3 1-5 3-4" stroke="#6B5E2A" strokeWidth={1.5} strokeLinecap="round" fill="none" />
      <path d="M28 12c1-3 2-4 3-3" stroke="#6B5E2A" strokeWidth={1.5} strokeLinecap="round" fill="none" />
      <path d="M8 20c-1-2-1-3 0-3" stroke="#6B5E2A" strokeWidth={1.2} strokeLinecap="round" fill="none" />
      <path d="M32 20c1-2 1-3 0-3" stroke="#6B5E2A" strokeWidth={1.2} strokeLinecap="round" fill="none" />
      <path d="M10 28c-1 0-2-1-1-2" stroke="#6B5E2A" strokeWidth={1.2} strokeLinecap="round" fill="none" />
      <path d="M30 28c1 0 2-1 1-2" stroke="#6B5E2A" strokeWidth={1.2} strokeLinecap="round" fill="none" />
      <path d="M20 8l0-4" stroke="#4A8B3F" strokeWidth={2} strokeLinecap="round" />
      <path d="M18 5c-2-1-4 0-4 1" stroke="#4A8B3F" strokeWidth={1.2} strokeLinecap="round" fill="none" />
      <path d="M22 5c2-1 4 0 4 1" stroke="#4A8B3F" strokeWidth={1.2} strokeLinecap="round" fill="none" />
      <ellipse cx={20} cy={24} rx={8} ry={10} fill="#A89544" fillOpacity={0.3} />
    </svg>
  );
}

/* ─── Critter registry ─── */

type CritterKind = "otter" | "mynah" | "monitorLizard" | "hornbill" | "merlion" | "orchid" | "pandanLeaf" | "chiliPadi" | "kopiCup" | "durian";

const CRITTER_COMPONENTS: Record<CritterKind, FC<SVGProps<SVGSVGElement>>> = {
  otter: Otter,
  mynah: Mynah,
  monitorLizard: MonitorLizard,
  hornbill: Hornbill,
  merlion: Merlion,
  orchid: Orchid,
  pandanLeaf: PandanLeaf,
  chiliPadi: ChiliPadi,
  kopiCup: KopiCup,
  durian: Durian,
};

const FAUNA_KINDS: CritterKind[] = ["otter", "mynah", "monitorLizard", "hornbill", "merlion"];
const FLORA_KINDS: CritterKind[] = ["orchid", "pandanLeaf", "chiliPadi", "kopiCup", "durian"];

interface Critter {
  id: number;
  kind: CritterKind;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  flip: boolean;
}

const SPAWN_INTERVAL = 3200;
const MAX_CRITTERS = 5;

let idCounter = 0;

export default function FarmCritters() {
  const [critters, setCritters] = useState<Critter[]>([]);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const spawnCritter = useCallback(() => {
    if (prefersReducedMotion.current) return;

    const isFauna = Math.random() > 0.4;
    const pool = isFauna ? FAUNA_KINDS : FLORA_KINDS;
    const kind = pool[Math.floor(Math.random() * pool.length)];
    const duration = 4000 + Math.random() * 3500;

    const critter: Critter = {
      id: ++idCounter,
      kind,
      x: 5 + Math.random() * 88,
      y: 10 + Math.random() * 75,
      size: 36 + Math.random() * 24,
      duration,
      delay: Math.random() * 500,
      flip: Math.random() > 0.5,
    };

    setCritters((prev) => {
      const next = prev.length >= MAX_CRITTERS ? prev.slice(1) : prev;
      return [...next, critter];
    });

    setTimeout(() => {
      setCritters((prev) => prev.filter((c) => c.id !== critter.id));
    }, critter.duration + critter.delay + 200);
  }, []);

  useEffect(() => {
    const initial = setTimeout(() => spawnCritter(), 1500);
    const interval = setInterval(spawnCritter, SPAWN_INTERVAL);
    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, [spawnCritter]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      {critters.map((c) => {
        const SvgComponent = CRITTER_COMPONENTS[c.kind];
        return (
          <div
            key={c.id}
            className="critter-spawn absolute"
            style={{
              left: `${c.x}%`,
              top: `${c.y}%`,
              width: `${c.size}px`,
              height: `${c.size}px`,
              animationDuration: `${c.duration}ms`,
              animationDelay: `${c.delay}ms`,
              transform: c.flip ? "scaleX(-1)" : undefined,
            }}
          >
            <SvgComponent className="w-full h-full" />
          </div>
        );
      })}
    </div>
  );
}
