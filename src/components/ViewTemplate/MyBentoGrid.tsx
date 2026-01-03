import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { cn } from "@/lib/utils";
import Image from "next/image";

/////////////////////////////////////////////////////////////////
// corp du code
export function MyBentoGrid() {
  return (
    <BentoGrid className="w-[50vw] max-2xl:w-[70vw] max-md:w-[85vw] mx-auto lg:auto-rows-[20rem]">
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
    title: "HomeFlix: Streaming maison !",
    description: "Mettez vous aussi en place votre propre plateforme vidéo ! Relié à la source de votre choix vous pourrez télécharger, regarder et administrer votre contenue de n'importe où !",
    header: <div className="relative w-full h-full flex items-center justify-center bg-purple-500/10">
      <div className="relative w-20 h-20">
        <Image fill src="/Img/homeflixLogo.webp" alt="HomeFlix" className="object-contain" />
      </div>
    </div>,
    className: "lg:col-span-2",
    icon: pastille("openSource", "bg-transparent border-purple-400 text-purple-400"),
    link: "https://github.com/Youvataque/HomeFlix-yggpowered"
  },
  {
    title: "Épona & Vous",
    description: "Site vitrine sur-mesure élégant, fluide et optimisé SEO pour cette agence de Wedding Planning.",
    header: <div className="relative w-full h-full flex items-center justify-center bg-blue-500/10">
      <div className="relative w-20 h-20">
        <Image fill src="/Img/epona.png" alt="Épona & Vous" className="object-contain" />
      </div>
    </div>,
    className: "lg:col-span-1",
    icon: pastille("Prestation", "bg-transparent text-blue-400 border-blue-400"),
    link: "https://epona-et-vous.fr/"
  },
  {
    title: "NewBat",
    description: "Entreprise du batiment ? Vous souhaitez passer au numérique ? Avec NewBat entamez votre transition !",
    header: <div className="relative w-full h-full flex items-center justify-center bg-green-500/10">
      <div className="relative w-20 h-20">
        <Image fill src="/Img/logoWhite.webp" alt="NewBat" className="object-contain" />
      </div>
    </div>,
    className: "lg:col-span-1",
    icon: pastille("Service", "bg-transparent text-green-400 border-green-400"),
    link: "https://www.youtube.com/watch?v=z0gpEHgiw-M"
  },
  {
    title: "SolsEnergiesBains",
    description: "SolsÉnergiesBains est aujourd'hui équipé d'un site internet sur mesure, piloté par une application mobile. Cela leur permet d'avoir toujours un site internet à la page, sans couts mensuels.",
    header: <div className="relative w-full h-full flex items-center justify-center bg-blue-500/10">
      <div className="relative w-20 h-20">
        <Image fill src="/Img/Logo_SEB.png" alt="SolsEnergiesBains" className="object-contain" />
      </div>
    </div>,
    className: "lg:col-span-2",
    icon: pastille("Prestation", "bg-transparent text-blue-400 border-blue-400"),
    link: "https://www.solsenergiesbains.com"
  },

];
