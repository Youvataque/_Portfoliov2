"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Site vitrine",
    description: "Apportez un plus à votre entreprise avec un site internet.",
    time: "Starter",

    icon: "🖥️",
    color: "border-orange-400 text-orange-400 px-1 rounded-lg",
  },
  {
    name: "Site connecté",
    description: "Gardez le contrôle avec un site connecté.",
    time: "Avancé",
    icon: "🌐",
    color: "border-blue-400 text-blue-400 px-1 rounded-lg",
  },
  {
    name: "Application mobile",
    description: "De la gestion à la prestation client le marché mobile est le plus lucratif.",
    time: "Avancé",
    icon: "📱",
    color: "border-blue-400 text-blue-400 px-1 rounded-lg",
  },
  {
    name: "Service web / mobile",
    description: "Profitez de l'un de nos services pour mettre un pied dans le digital à moindre coût.",
    time: "Économique",
    icon: "💵",
    color: "border-green-400 text-green-400 px-1 rounded-lg",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-primary ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className={cn("text-sm border", color)}>{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-primary">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function MyAnimatedList() {
  return (
    <div className="relative flex h-[290px] w-full max-w-[32rem] flex-col overflow-hidden border border-primary bg-foreground rounded-2xl shadow-lg">
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
