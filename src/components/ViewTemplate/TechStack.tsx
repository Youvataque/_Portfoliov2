"use client";

import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiFlutter,
  SiDart,
  SiNextdotjs,
  SiDocker,
  SiGit,
  SiPhp,
  SiLaravel,
} from "react-icons/si";

/////////////////////////////////////////////////////////////////
// data des technologies (icône + rôle, inspiré du CV)
const techs = [
  { name: "Laravel", role: "Back-end PHP", icon: SiLaravel },
  { name: "Flutter", role: "Front-end mobile", icon: SiFlutter },
  { name: "PHP", role: "Langage back-end", icon: SiPhp },
  { name: "React.js", role: "Front-end web", icon: SiReact },
  { name: "Next.js", role: "Front-end web SSR", icon: SiNextdotjs },
  { name: "Javascript", role: "Langage web", icon: SiJavascript },
  { name: "Typescript", role: "Langage web typé", icon: SiTypescript },
  { name: "Docker", role: "Déploiement serveur", icon: SiDocker },
  { name: "Git", role: "Versioning", icon: SiGit },
  { name: "Dart", role: "Langage mobile", icon: SiDart },
];

/////////////////////////////////////////////////////////////////
// corp du code : panneau en verre, icône blanche dans un rond bleu foncé + nom + rôle
export function TechStack() {
  return (
    <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 gap-x-6 gap-y-8 rounded-3xl bg-elementColor/50 p-8 max-md:p-5 shadow-sm shadow-primary/10 backdrop-blur-lg">
      {techs.map(({ name, role, icon: Icon }) => (
        <div key={name} className="flex items-center gap-3">
          <div className="flex h-12 w-12 max-md:h-10 max-md:w-10 shrink-0 items-center justify-center rounded-full bg-primary">
            <Icon className="h-6 w-6 max-md:h-5 max-md:w-5 text-background" />
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="text-sm font-semibold text-primary">{name}</span>
            <span className="text-xs leading-tight text-foreground">{role}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
