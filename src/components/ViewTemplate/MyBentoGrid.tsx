import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function MyBentoGrid() {
  return (
    <BentoGrid className="w-[50vw] max-2xl:w-[70vw] max-md:w-[95vw] mx-auto md:auto-rows-[20rem]">
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

function pastille(text: string, color: string) {
    return <div className={cn("w-min h-7 text-sm px-3 overflow-hidden border border-solid flex items-center justify-center pb-[2px]", color, "rounded-xl")}>{text}</div>
}

const items = [
  {
    title: "NewBat : l'informatique du bâtiment !",
    description: "Entreprise du batiment ? Vous souhaitez passer au numérique ? Avec NewBat entamez votre transition ! Gérez vos entretiens, vos chantiers ainsi que vos devis avec une simplicité encore inégalé.",
    header: <div className="w-full flex items-center justify-center pt-2 max-md:pt-0">
        <img src="/Img/newbat.webp" alt="NewBat" className="h-40 rounded-md max-md:h-32" />
     </div>,
    className: "md:col-span-2 bg-foreground z-0",
    icon: pastille("Service", "bg-transparent text-green-400 border-green-400"),
    link: "https://www.youtube.com/watch?v=z0gpEHgiw-M"
  },
  {
    title: "NewBat website",
    description: "Site vitrine servant à présenter plus en détail NewBat et son offre. Si vous êtes une entreprise du bâtiment, vous devriez jeter un œil.",
    header: <div className="w-full flex items-center justify-center pt-4 max-md:pt-0">
        <img src="/Img/newbatLogo.webp" alt="NewBat" className="h-28 max-md:h-20 rounded-2xl" />
    </div>,
    className: "md:col-span-1 bg-foreground z-0",
    icon: pastille("Service", "bg-transparent text-green-400 border-green-400"),
    link: "https://www.seguin-newbat.fr"
  },
  {
    title: "Montpellier Transport",
    description: "Vous en avez assez d'utiliser une application mal conçue au quotidien ? Vous souhaitez profiter d'une ergonomie et d'un design adaptés aux gots actuels ? Choisissez Montpellier Transport !",
    header: <div className="w-full flex items-center justify-center pt-4 max-md:pt-0">
        <img src="/Img/Mt.webp" alt="NewBat" className="h-28 max-md:h-20 rounded-2xl" />
    </div>,
    className: "md:col-span-1 bg-foreground z-0",
    icon: pastille("Contribution", "bg-transparent text-yellow-400 border-yellow-400"),
    link: "https://www.NotOnline.fr"
  },
  {
    title: "SolsEnergiesBains",
    description:"SolsÉnergiesBains est aujourd'hui équipé d'un site internet sur mesure, piloté par une application mobile. Cela leur permet d'avoir toujours un site internet à la page, sans cots mensuels.",
    header: <div className="w-full flex items-center justify-center pt-2 max-md:pt-0">
        <img src="/Img/sebWebsite.webp" alt="solsenergiesbains" className="h-40 rounded-lg max-md:h-32" />
    </div>,
    className: "md:col-span-2 bg-foreground z-0",
    icon: pastille("Prestation", "bg-transparent text-blue-400 border-blue-400"),
    link: "https://www.solsenergiesbains.com"
  },
];
