import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { cn } from "@/lib/utils";
import Image from "next/image";

/////////////////////////////////////////////////////////////////
// corp du code
export function MyBentoGrid() {
  return (
    <BentoGrid className="w-[50vw] max-2xl:w-[70vw] max-md:w-[95vw] mx-auto lg:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          link={item.link}
        />
      ))}
    </BentoGrid>
  );
}

/////////////////////////////////////////////////////////////////
// pastille de type
function pastille(text: string, color: string) {
    return <div className={cn("w-min h-7 text-sm px-3 overflow-hidden border border-solid flex items-center justify-center pb-[2px]", color, "rounded-xl")}>{text}</div>
}

/////////////////////////////////////////////////////////////////
// data des items
const items = [
  {
    title: "NewBat : l'informatique du bâtiment !",
    description: "Entreprise du batiment ? Vous souhaitez passer au numérique ? Avec NewBat entamez votre transition ! Gérez vos entretiens, vos chantiers ainsi que vos devis avec une simplicité encore inégalé.",
    header: <div className="flex items-center justify-center pt-2 max-md:pt-0">
      <div className="max-md:pt-0 relative h-40 w-80 max-md:w-64 max-md:h-32">
        <Image fill src="/Img/newbat.webp" alt="NewBat" className="rounded-md" />
     </div>,  
    </div>,
    className: "lg:col-span-2 bg-foreground z-0",
    icon: pastille("Service", "bg-transparent text-green-400 border-green-400"),
    link: "https://www.youtube.com/watch?v=z0gpEHgiw-M"
  },
  {
    title: "HomeFlix",
    description: "Mettez vous aussi en place votre propre plateforme vidéo ! Relié à la source de votre choix vous pourrez télécharger, regarder et administrer votre contenue.",
    header: <div className="flex items-center justify-center pt-4 max-lg:pt-0 ">
      <div className="h-28 max-md:h-20 w-28 max-md:w-20 relative">
        <Image fill src="/Img/homeflixLogo.webp" alt="NewBat" className="rounded-2xl" />
      </div>
    </div>,
    className: "lg:col-span-1 bg-foreground z-0",
    icon: pastille("Service", "bg-transparent text-green-400 border-green-400"),
    link: "https://github.com/Youvataque/HomeFlix-yggpowered"
  },
  {
    title: "Montpellier Transport",
    description: "Vous en avez assez d'utiliser une application mal conçue au quotidien ? Vous souhaitez profiter d'une ergonomie et d'un design adaptés aux gouts actuels ? Choisissez Montpellier Transport !",
    header: <div className="flex items-center justify-center pt-4 max-lg:pt-0 ">
      <div className="h-28 max-md:h-20 w-28 max-md:w-20 relative">
        <Image fill src="/Img/Mt.webp" alt="NewBat" className="rounded-2xl" />
      </div>,
    </div>, 
    className: "lg:col-span-1 bg-foreground z-0",
    icon: pastille("Contribution", "bg-transparent text-yellow-400 border-yellow-400"),
    link: "https://montpellier-transports.fr/"
  },
  {
    title: "SolsEnergiesBains",
    description:"SolsÉnergiesBains est aujourd'hui équipé d'un site internet sur mesure, piloté par une application mobile. Cela leur permet d'avoir toujours un site internet à la page, sans couts mensuels.",
    header: <div className="flex items-center justify-center pt-2 max-md:pt-0">
      <div className="max-md:pt-0 relative h-40 w-80 max-md:w-64 max-md:h-32">
        <Image fill src="/Img/sebWebsite.webp" alt="NewBat" className="rounded-md" />
      </div>,  
    </div>,
    className: "lg:col-span-2 bg-foreground z-0",
    icon: pastille("Prestation", "bg-transparent text-blue-400 border-blue-400"),
    link: "https://www.solsenergiesbains.com"
  },
];
