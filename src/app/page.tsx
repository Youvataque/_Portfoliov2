"use client";
/* eslint-disable */
import BodyTemplate from "@/components/FondamentalAppComp/BodyTemplate"; 
import Title from "@/components/ViewTemplate/Title";
import { MyBentoGrid } from "@/components/ViewTemplate/MyBentoGrid";
import IconCloud from "@/components/magicui/icon-cloud";
import { MyAnimatedList } from "@/components/ViewTemplate/MyAnimatedList";
import Footer from "@/components/FondamentalAppComp/Footer";
import SousTitle from "@/components/ViewTemplate/SousTitle";
import SocialMedia from "@/components/ViewTemplate/SocialMedia";
import Image from "next/image";
export default function Home() {

  /////////////////////////////////////////////////////////////////
  // icons des technologies utilisés pour le dev web & mobile
  const cloudIconsData = {
    iconSlugs: [
      "typescript",
      "javascript",
      "dart",
      "react",
      "flutter",
      "android",
      "ios",
      "pixelmator",
      "html5",
      "css3",
      "firebase",
      "vercel",
      "git",
      "github",
      "visualstudiocode",
      "figma",
      "nextjs",
      "tailwindcss",
    ],
   };

  /////////////////////////////////////////////////////////////////
  // text custom pour la description
  function textCustom(){
    return <h1 className="text-2xl max-xl:text-lg max-md:text-md text-primary pt-4">
      <b>Developpeur Front-end. </b>Passionné par l'informatique, mes technologies de prédilection sont Flutter pour le mobile et React.js pour le web (toujours avec tailwind).
    </h1>
  }

  /////////////////////////////////////////////////////////////////
  // header du composant avec pp et infos
  function header(){
    return <div className="flex flex-row justify-between items-center w-[50vw] max-2xl:w-[70vw] max-md:w-[95vw]">
      <div className="flex flex-col w-full items-start">
        <SousTitle text="Bienvenue ! Je suis -" style="text-secondary" />
        <Title text="Yannis Seguin" style="text-secondary" />
          <SocialMedia/>
        <div className="max-md:hidden">{textCustom()}</div>
      </div>
      <div className="flex flex-col w-full max-md:w-auto items-end">
      <div className="relative w-96 h-96 max-2xl:w-80 max-2xl:h-80 max-xl:w-64 max-xl:h-64 max-md:w-44 max-md:h-44">
        <Image fill src="/Img/profilPic.webp" alt="Yannis Seguin"/>
      </div>
      </div>
    </div>
  }

  /////////////////////////////////////////////////////////////////
  // composant d'icon animé
  function iconCloud() {
    return (
      <div className="relative w-[50vw] max-2xl:w-[70vw] max-md:w-[95vw] flex max-lg:justify-center items-center bg-transparent">
        <div className="w-96 max-2xl:w-80 max-md:w-64 pb-12 max-2xl:pb-10 max-lg:pb-0">
          <IconCloud iconSlugs={cloudIconsData.iconSlugs} />
        </div>
      </div>
    );
  }

  /////////////////////////////////////////////////////////////////
  // corp du code
  return (
    <BodyTemplate>
      <div className="flex flex-col items-center">
        {header()}
        <div className="md:hidden w-[95vw]">{textCustom()}</div>
        <div className="pt-[20vw] max-2xl:pt-[16vw] max-md:pt-32"/>
        <div className="w-[50vw] max-2xl:w-[70vw] max-md:w-[95vw] flex items-center justify-start pb-4">
          <SousTitle text="Mes derniers projets :" style="text-secondary" />
        </div>
        <MyBentoGrid />
        <div className="pt-[20vw] max-2xl:pt-[16vw] max-md:pt-32"/>
        <div className="w-[50vw] max-2xl:w-[70vw] max-md:w-[95vw] flex items-center justify-start pb-4">
          <SousTitle text="Quelques informations :" style="text-secondary"/>
        </div>
        <div className="flex flex-row max-lg:flex-col-reverse justify-between max-lg:justify-center items-center w-[50vw] max-2xl:w-[70vw] max-md:w-[95vw]">
          {iconCloud()}
          <MyAnimatedList/>
        </div>
        <div className="pt-[16vw] max-md:pt-12"/>
        <Footer/>
        <div className="pb-4"/>
      </div>
    </BodyTemplate>
  );
}
