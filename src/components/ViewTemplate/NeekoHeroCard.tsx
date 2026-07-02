"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Tag from "./Tag";
import {
  SiFlutter,
  SiDart,
  SiLaravel,
  SiPhp,
  SiRedis,
  SiMysql,
  SiDocker,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

type IconType = React.ComponentType<{ className?: string }>;
type Tech = { name: string; icon?: IconType };
type Layer = { label: string; color: string; items: Tech[] };

/////////////////////////////////////////////////////////////////
// technos groupées par couche (icône optionnelle)
const layers: Layer[] = [
  {
    label: "Mobile",
    color: "#42A5F5",
    items: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Cubit / Bloc" },
    ],
  },
  {
    label: "Web",
    color: "#A78BFA",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "React", icon: SiReact },
      { name: "Zustand" },
    ],
  },
  {
    label: "Back-end",
    color: "#FF6B6B",
    items: [
      { name: "Laravel", icon: SiLaravel },
      { name: "PHP", icon: SiPhp },
      { name: "Reverb" },
      { name: "Redis", icon: SiRedis },
      { name: "Horizon" },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    label: "Ops",
    color: "#34D399",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Coolify" },
      { name: "Hetzner" },
    ],
  },
];

/////////////////////////////////////////////////////////////////
// rangée de badges
const Badges: React.FC = () => (
  <div className="flex flex-wrap items-center gap-2 mb-3">
    <Tag color="secondary">Projet phare</Tag>
    <Tag color="amber">Refonte complète</Tag>
    <Tag color="blue">Contract</Tag>
    <Tag color="emerald">Longue durée</Tag>
  </div>
);

/////////////////////////////////////////////////////////////////
// puce d'une techno
const Chip: React.FC<Tech> = ({ name, icon: Icon }) => (
  <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-primary/90">
    {Icon && <Icon className="w-3.5 h-3.5" />}
    {name}
  </span>
);

/////////////////////////////////////////////////////////////////
// une couche techno (libellé + puces)
const TechLayer: React.FC<Layer> = ({ label, color, items }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5">
    <span className="w-20 shrink-0 text-[11px] font-bold uppercase tracking-wider" style={{ color }}>
      {label}
    </span>
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <Chip key={t.name} {...t} />
      ))}
    </div>
  </div>
);

/////////////////////////////////////////////////////////////////
// stack des couches technos
const TechStack: React.FC = () => (
  <div className="mt-4 flex flex-col gap-2">
    {layers.map((layer) => (
      <TechLayer key={layer.label} {...layer} />
    ))}
  </div>
);

/////////////////////////////////////////////////////////////////
// panneau visuel (logo)
const LogoPanel: React.FC = () => (
  <div className="relative flex items-center justify-center lg:w-[26%] p-6 max-md:py-8 bg-gradient-to-br from-secondary/15 to-secondary/[0.03] border-b lg:border-b-0 lg:border-r border-white/10">
    <div className="relative w-20 h-20 max-md:w-16 max-md:h-16 transition-transform duration-500 group-hover:scale-110">
      <Image fill src="/Img/neeko_logov0.svg" alt="Neeko" className="object-contain drop-shadow-[0_0_25px_rgba(158,177,255,0.35)]" />
    </div>
  </div>
);

/////////////////////////////////////////////////////////////////
// en-tête du contenu (titre + flèche)
const Header: React.FC = () => (
  <div className="flex items-center justify-between gap-4">
    <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
      Neeko
    </h3>
    <span className="shrink-0 p-1.5 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <ArrowUpRight className="w-4 h-4 text-primary" />
    </span>
  </div>
);

/////////////////////////////////////////////////////////////////
// colonne de contenu
const Content: React.FC = () => (
  <div className="relative z-10 flex flex-col flex-1 p-6 max-md:p-5">
    <Badges />
    <Header />

    <p className="mt-2 text-sm text-primary/85 leading-relaxed max-w-2xl">
      Neeko met en relation les restaurateurs en manque de personnel avec des renforts
      disponibles en moins de deux heures : dépôt de mission, matching géolocalisé et
      notifications en temps réel, sans commission d&apos;agence.
    </p>

    <p className="mt-2 text-sm text-primary/85 leading-relaxed max-w-2xl">
      Écosystème réalisé de A à Z : application mobile, site vitrine et back-office web ultra
      complet, adossés à un back-end temps réel.
    </p>

    <p className="mt-3 border-l-2 border-secondary/50 pl-3 text-xs italic text-primary/70 max-w-2xl">
      Repris d&apos;un MVP factice où chaque fonctionnalité était un mensonge, entièrement
      redressé vers une architecture temps réel propre, robuste et scalable.
    </p>

    <TechStack />
  </div>
);

/////////////////////////////////////////////////////////////////
// carte héro du projet phare
const NeekoHeroCard: React.FC = () => (
  <Link
    href="https://neekoapp.com/"
    target="_blank"
    className={cn(
      "group relative flex flex-col lg:flex-row w-80 flex-none md:w-auto md:flex-1 md:mx-[5vw] overflow-hidden rounded-3xl",
      "border border-white/10 hover:border-white/25 bg-white/5 dark:bg-black/20 hover:bg-white/10 backdrop-blur-md",
      "shadow-2xl shadow-black/30 transition-all duration-300 ease-out hover:-translate-y-1"
    )}
  >
    {/* halo accent */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
    <LogoPanel />
    <Content />
  </Link>
);

export default NeekoHeroCard;
