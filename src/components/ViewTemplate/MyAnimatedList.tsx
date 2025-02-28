"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
  link: string;
}

/////////////////////////////////////////////////////////////////
// data de la list animé
let notifications = [
  {
    name: "Site vitrine",
    description: "Apportez un plus à votre entreprise avec un site internet.",
    time: "Starter",
    icon: "🖥️",
    color: "border-orange-400 text-orange-400 px-1 rounded-lg",
    link: "mailto:yannisseguin@gmail.com?subject=Renseignements%20site%20vitrine&body=Bonjour,",
  },
  {
    name: "Site connecté",
    description: "Gardez le contrôle avec un site connecté.",
    time: "Avancé",
    icon: "🌐",
    color: "border-blue-400 text-blue-400 px-1 rounded-lg",
    link: "mailto:yannisseguin@gmail.com?subject=Renseignements%20site%20internet%20connectée&body=Bonjour,",
  },
  {
    name: "Application mobile",
    description: "Développez votre entreprise ou réalisez votre rève avec une application mobile !",
    time: "Avancé",
    icon: "📱",
    color: "border-blue-400 text-blue-400 px-1 rounded-lg",
    link: "mailto:yannisseguin@gmail.com?subject=Renseignements%20Application%20mobile&body=Bonjour,",
  },
  {
    name: "Service web / mobile",
    description: "Profitez de l'un de nos services pour mettre un pied dans le digital à moindre coût.",
    time: "Économique",
    icon: "💵",
    color: "border-green-400 text-green-400 px-1 rounded-lg",
    link: "mailto:yannisseguin@gmail.com?subject=Renseignements%20Service%20web%20/%20mobile&body=Bonjour,",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

/////////////////////////////////////////////////////////////////
// template d'un élément de list
const Notification = ({ name, description, icon, color, time, link }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full px-4 transform cursor-pointer overflow-hidden rounded-2xl py-2",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <a
        href={link}
        target="_blank"
        className="flex flex-row items-center gap-3 group"
      >
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-primary group-hover:text-secondary">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className={cn("text-sm border", color)}>{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-primary group-hover:text-secondary">
            {description}
          </p>
        </div>
      </a>
    </figure>
  );
};

/////////////////////////////////////////////////////////////////
// corp du code
export function MyAnimatedList() {
  return (
    <div className="relative flex h-[270px] w-full max-w-[32rem] flex-col items-center justify-center overflow-hidden border border-primary hover:border-secondary bg-foreground rounded-2xl shadow-lg">
      <AnimatedList
        delay={2700}
      >
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
