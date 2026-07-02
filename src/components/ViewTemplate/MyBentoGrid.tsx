import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { NeekoBentoItem } from "./NeekoBentoItem";
import Tag, { TagColor } from "./Tag";
import Image from "next/image";

/////////////////////////////////////////////////////////////////
// corp du code
export function MyBentoGrid() {
  return (
    <BentoGrid className="w-[50vw] max-2xl:w-[70vw] max-md:w-[85vw] mx-auto lg:auto-rows-[20rem]">
      <NeekoBentoItem />
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
// pastille de type (tag unifié)
function pastille(text: string, color: TagColor) {
  return <Tag color={color}>{text}</Tag>
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
    icon: pastille("openSource", "purple"),
    link: "/projects#mobile"
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
    icon: pastille("Prestation", "blue"),
    link: "/projects#web"
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
    icon: pastille("Service", "green"),
    link: "/projects#mobile"
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
    icon: pastille("Prestation", "blue"),
    link: "/projects#web"
  },

];
