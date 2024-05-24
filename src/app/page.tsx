"use client";
import BodyTemplate from "@/components/FondamentalAppComp/BodyTemplate"; 
import Title from "@/components/ViewTemplate/Title";
import Text from "@/components/ViewTemplate/Text";
import MainText from "@/components/ViewTemplate/MainText";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Youtube from "@/Icon/Youtube";
import Twitter from "@/Icon/Twitter";
import Linkedin from "@/Icon/Linkedin";
import Github from "@/Icon/Github";
import Facebook from "@/Icon/Facebook";

export default function Home() {

  /////////////////////////////////////////////////////////////////
  // text custom pour la description
  function textCustom(){
    return <h1 className="text-2xl max-xl:text-lg max-md:text-md text-primary pt-4 pl-2">
      <b>Developpeur Front-end. </b>
      Passionné par l'informatique, mes technologies de prédilection sont Flutter pour le mobile et React.js pour le web (toujours avec tailwind).
    </h1>
  }

  function iconButton(icon:JSX.Element) {
    return <button className="group">
      {icon}
    </button>
  }

  function docZone() {
    return <Dock>
      <DockIcon className="group">
        {iconButton(<Github width="33px" height="33px" color="text-primary fill-current group-hover:text-secondary"/>)}
      </DockIcon>
      <DockIcon className="group">
        {iconButton(<Linkedin width="33px" height="33px" color="text-primary fill-current group-hover:text-secondary"/>)}
      </DockIcon>
      <DockIcon className="group">
        {iconButton(<Youtube width="33px" height="33px" color="text-primary fill-current group-hover:text-secondary"/>)}
      </DockIcon>
      <DockIcon className="group">
        {iconButton(<Twitter width="33px" height="33px" color="text-primary fill-current group-hover:text-secondary"/>)}
      </DockIcon>
      <DockIcon className="group">
        {iconButton(<Facebook width="25px" height="25px" color="text-primary fill-current group-hover:text-secondary"/>)}
      </DockIcon>
    </Dock>
  }

  /////////////////////////////////////////////////////////////////
  // header du composant avec pp et infos
  function header(){
    return <div className="flex flex-row justify-between items-center w-[70vw] max-md:w-[95vw]">
      <div className="flex flex-col w-full items-start">
        <Text text="Bienvenue ! Je suis -" style="text-secondary" />
        <Title text="Yannis Seguin" style="text-secondary" />
        {docZone()}
        <div className="max-md:hidden">{textCustom()}</div>
      </div>
      <div className="flex flex-col w-full max-md:w-auto items-end">
        <img src="/Img/profilPic.webp" alt="Yannis Seguin" className="w-96 max-xl:w-64 max-md:w-40" draggable={false}/>
      </div>
    </div>
  }

  /////////////////////////////////////////////////////////////////
  // corp du code
  return (
    <BodyTemplate>
      <div className="flex flex-col items-center">
        {header()}
        <div className="md:hidden w-[95vw]">{textCustom()}</div>
      </div>
    </BodyTemplate>
  );
}
