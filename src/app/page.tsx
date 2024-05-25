"use client";
import BodyTemplate from "@/components/FondamentalAppComp/BodyTemplate"; 
import Title from "@/components/ViewTemplate/Title";
import Text from "@/components/ViewTemplate/Text";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Youtube from "@/Icon/Youtube";
import Twitter from "@/Icon/Twitter";
import Linkedin from "@/Icon/Linkedin";
import Github from "@/Icon/Github";
import Facebook from "@/Icon/Facebook";
import { MyBentoGrid } from "@/components/ViewTemplate/MyBentoGrid";
import IconCloud from "@/components/magicui/icon-cloud";
import { MyAnimatedList } from "@/components/ViewTemplate/MyAnimatedList";
import Footer from "@/components/FondamentalAppComp/Footer";
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
      <b>Developpeur Front-end. </b>
      Passionné par l'informatique, mes technologies de prédilection sont Flutter pour le mobile et React.js pour le web (toujours avec tailwind).
    </h1>
  }

  /////////////////////////////////////////////////////////////////
  // bouton pour les icones
  function iconButton(icon:JSX.Element, link:string) {
    return <a href={link} target="_blank" className="group">
      {icon}
    </a>
  }

  /////////////////////////////////////////////////////////////////
  // zone des icones
  function docZone() {
    return <Dock className="max-md:hidden">
      <DockIcon className="group">
        {iconButton(<Github width="33px" height="33px" color="text-primary fill-current group-hover:text-secondary"/>, "https://github.com/Youvataque")}
      </DockIcon>
      <DockIcon className="group">
        {iconButton(<Linkedin width="33px" height="33px" color="text-primary fill-current group-hover:text-secondary"/>, "https://www.linkedin.com/in/yannis-seguin-540432161/")}
      </DockIcon>
      <DockIcon className="group" size={20}>
        {iconButton(<Youtube width="31px" height="31px" color="text-primary fill-current group-hover:text-secondary"/>, "https://www.youtube.com/channel/UCQUgpvsakyzaLKko-a4lfBA")}
      </DockIcon>
      <DockIcon className="group">
        {iconButton(<Twitter width="31px" height="31px" color="text-primary fill-current group-hover:text-secondary"/>, "https://x.com/SEGUIN_Yannis")}
      </DockIcon>
      <DockIcon className="group max-md:hidden">
        {iconButton(<Facebook width="28px" height="28px" color="text-primary fill-current group-hover:text-secondary"/>, "https://www.facebook.com/youvataque?locale=fr_FR")}
      </DockIcon>
    </Dock>
  }

  /////////////////////////////////////////////////////////////////
  // version du docZone pour mobile
  function mobileDocZone() {
    return <div className="flex flex-row md:hidden gap-1 pt-1">
      {iconButton(<Github width="33px" height="33px" color="text-primary fill-current group-hover:text-secondary"/>, "https://github.com/Youvataque")}
      {iconButton(<Linkedin width="33px" height="33px" color="text-primary fill-current group-hover:text-secondary"/>, "https://www.linkedin.com/in/yannis-seguin-540432161/")}
      {iconButton(<Youtube width="31px" height="31px" color="text-primary fill-current group-hover:text-secondary"/>, "https://www.youtube.com/channel/UCQUgpvsakyzaLKko-a4lfBA")}
      {iconButton(<Twitter width="31px" height="31px" color="text-primary fill-current group-hover:text-secondary"/>, "https://x.com/SEGUIN_Yannis")}
      {iconButton(<Facebook width="28px" height="28px" color="text-primary fill-current group-hover:text-secondary"/>, "https://www.facebook.com/youvataque?locale=fr_FR")}
    </div>
  }

  /////////////////////////////////////////////////////////////////
  // header du composant avec pp et infos
  function header(){
    return <div className="flex flex-row justify-between items-center w-[50vw] max-2xl:w-[70vw] max-md:w-[95vw]">
      <div className="flex flex-col w-full items-start">
        <Text text="Bienvenue ! Je suis -" style="text-secondary" />
        <Title text="Yannis Seguin" style="text-secondary" />
        {docZone()}
        {mobileDocZone()}
        <div className="max-md:hidden">{textCustom()}</div>
      </div>
      <div className="flex flex-col w-full max-md:w-auto items-end">
        <img src="/Img/profilPic.webp" alt="Yannis Seguin" className="w-96 max-2xl:w-80 max-xl:w-64 max-md:w-44" draggable={false}/>
      </div>
    </div>
  }

  /////////////////////////////////////////////////////////////////
  // composant d'icon animé
  function iconCloud() {
    return (
      <div className="relative w-[50vw] max-2xl:w-[70vw] max-md:w-[95vw] flex max-md:justify-center items-center bg-transparent">
        <div className="w-96 max-2xl:w-80 max-md:w-64"><IconCloud iconSlugs={cloudIconsData.iconSlugs} /></div>
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
          <Text text="Mes derniers projets :" style="text-secondary" />
        </div>
        <MyBentoGrid />
        <div className="pt-[20vw] max-2xl:pt-[16vw] max-md:pt-32"/>
        <div className="w-[50vw] max-2xl:w-[70vw] max-md:w-[95vw] flex items-center justify-start pb-4">
          <Text text="Quelques informations :" style="text-secondary"/>
        </div>
        <div className="flex flex-row max-md:flex-col-reverse justify-between max-md:justify-center items-center w-[50vw] max-2xl:w-[70vw] max-md:w-[95vw]">
          {iconCloud()}
          <MyAnimatedList/>
        </div>
        <div className="pt-[16vw] max-2xl:pt-[16vw] max-md:pt-12"/>
        <Footer/>
        <div className="pb-4"/>
      </div>
    </BodyTemplate>
  );
}
