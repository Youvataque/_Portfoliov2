"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Tag from "./Tag";
import {
  SiFlutter,
  SiDart,
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiPhp,
  SiRedis,
  SiMysql,
  SiDocker,
} from "react-icons/si";

/////////////////////////////////////////////////////////////////
// technos clés (icône + couleur de marque)
const techs = [
  { name: "Flutter", icon: SiFlutter, color: "#42A5F5" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Redis", icon: SiRedis, color: "#FF4438" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
];

/////////////////////////////////////////////////////////////////
// item bento full-width dédié au projet phare Neeko
export function NeekoBentoItem() {
  return (
    <Link
      href="/projects#phare"
      className={cn(
        "lg:col-span-3 row-span-1 group relative flex flex-col lg:flex-row overflow-hidden rounded-3xl",
        "bg-white/5 dark:bg-black/20 backdrop-blur-md border border-white/10",
        "transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/10 hover:border-white/25",
        "shadow-2xl shadow-black/20"
      )}
    >
      {/* halo au survol */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      {/* panneau logo */}
      <div className="relative flex items-center justify-center lg:w-[30%] p-8 max-md:py-10 bg-gradient-to-br from-secondary/15 to-secondary/[0.03] border-b lg:border-b-0 lg:border-r border-white/10">
        <div className="relative w-24 h-24 max-md:w-20 max-md:h-20 transition-transform duration-500 group-hover:scale-110">
          <Image fill src="/Img/neeko_logov0.svg" alt="Neeko" className="object-contain drop-shadow-[0_0_25px_rgba(158,177,255,0.35)]" />
        </div>
      </div>

      {/* contenu */}
      <div className="relative z-10 flex flex-col justify-center flex-1 p-8 max-md:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Tag color="secondary">Projet phare</Tag>
          <Tag color="amber">Refonte complète</Tag>
          <Tag color="blue">Contract</Tag>
          <Tag color="emerald">Longue durée</Tag>
        </div>

        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
            Neeko
          </h2>
          <span className="shrink-0 p-2 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-4 h-4 text-primary" />
          </span>
        </div>

        <p className="mt-2 text-sm text-primary/85 leading-relaxed max-w-3xl">
          Application de staffing en restauration : mise en relation en temps réel des restaurateurs
          et des renforts. Écosystème complet — mobile, web et back-end temps réel — repris d&apos;un
          MVP factice vers une architecture propre et scalable.
        </p>

        {/* strip technos */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {techs.map(({ name, icon: Icon, color }) => (
            <Icon key={name} title={name} className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color }} />
          ))}
        </div>
      </div>
    </Link>
  );
}
