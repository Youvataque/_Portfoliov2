"use client";

import { cn } from "@/lib/utils";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiFlutter,
  SiDart,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
} from "react-icons/si";

/////////////////////////////////////////////////////////////////
// data des technologies (icône + couleur de marque)
const techs = [
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
];

/////////////////////////////////////////////////////////////////
// corp du code
export function TechStack() {
  return (
    <div className="flex flex-wrap justify-center gap-3 w-full">
      {techs.map(({ name, icon: Icon, color }) => (
        <div
          key={name}
          className={cn(
            "group relative flex flex-col items-center justify-center gap-2 rounded-2xl p-3 w-[120px] h-[120px] max-md:w-[92px] max-md:h-[92px]",
            "border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-md",
            "shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
          )}
        >
          {/* halo couleur de marque au survol */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `radial-gradient(circle at 50% 35%, ${color}22, transparent 70%)` }}
          />
          <Icon
            className="relative z-10 w-7 h-7 transition-transform duration-300 group-hover:scale-110"
            style={{ color }}
          />
          <span className="relative z-10 text-xs font-medium text-primary/90 text-center leading-tight">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
