import BodyTemplate from "@/components/FondamentalAppComp/BodyTemplate";
import Footer from "@/components/FondamentalAppComp/Footer";
import MainText from "@/components/ViewTemplate/MainText";
import SousTitle from "@/components/ViewTemplate/SousTitle";
import Title from "@/components/ViewTemplate/Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";

const About: React.FC = () => {

  /////////////////////////////////////////////////////////////////
  // data des contacts
  const contactData = [
    {
      title: "Email",
      description: "Pour tout contact professionnel c'est par ici. Je réponds dans la journée !",
      link: "mailto:yannisseguin@gmail.com",
    },
    {
      title: "Téléphone",
      description:
        "De la prise de contact rapide ? Des questions sur un produit ? C'est par ici.",
      link: "tel:+33628264561",
    },
    {
      title: "LinkedIn",
      description:
        "Pour suivre mes activités je vous invite à venir faire un tour ici.",
      link: "https://www.linkedin.com/in/yannis-seguin-540432161/",
    },
    {
      title: "Twitter",
      description:
        "En principe on y discute techno, donc si vous êtes développeur n'hésitez pas !",
      link: "https://x.com/SEGUIN_Yannis",
    },
    {
      title: "YouTube",
      description:
        "Vous retrouverez ici mes vidéos promotionnelles, mais aussi des vidéos de mes projets !",
      link: "https://www.youtube.com/channel/UCQUgpvsakyzaLKko-a4lfBA",
    },
    {
      title: "GitHub",
      description:
        "Si vous souhaitez comprendre les ficelles de certains de mes projets c'est par ici !",
      link: "https://github.com/youvataque",
    },
  ];

  /////////////////////////////////////////////////////////////////
  // mini description de mon parcours
  function description() {
    return <MainText
      // src/app/about/page.tsx @ 55

      text={"Passé par le freelance et aujourd'hui CTO, je connais les contraintes du réel. Je déploie des stacks complètes (Front, Back, DevOps) avec une obsession : éviter la dette technique et garantir la scalabilité.\n\nUne technologie doit être invisible et efficace. J'utilise l'IA et l'automatisation pour coder intelligemment, ce qui me permet de livrer des architectures robustes en des temps records. Pas de sur-ingénierie, juste du résultat."}
      style="text-primary pt-4"
    />
  }

  /////////////////////////////////////////////////////////////////
  // header du composant avec pp et infos
  function header() {
    return <div className="flex flex-row justify-between items-center h-full">
      <div className="flex flex-col w-full items-start">
        <SousTitle text="Un peu sur moi -" style="text-secondary" />
        <Title text="Yannis Seguin" style="text-secondary" />
        <div className="max-md:hidden">
          {description()}
        </div>
      </div>
      <div className="flex flex-col w-full max-md:w-auto items-end">
        <div className="relative w-96 h-96 max-2xl:w-80 max-2xl:h-80 max-xl:w-64 max-xl:h-64 max-md:w-44 max-md:h-44">
          <Image fill src="/Img/profilPic.webp" alt="Yannis Seguin" />
        </div>
      </div>
    </div>
  }

  /////////////////////////////////////////////////////////////////
  // corp du code
  return (
    <BodyTemplate>
      <div className="flex flex-col justify-center items-center w-[50vw] max-2xl:w-[70vw] max-md:w-[95vw]">
        <div className="flex flex-col justify-center items-center min-h-screen">
          {header()}
          <div className="md:hidden">
            {description()}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center min-h-screen w-screen">
          <SousTitle text="Mes contacts :" style="text-secondary" />
          <div className="max-w-5xl mx-auto px-8 mt-8">
            <HoverEffect items={contactData} />
          </div>
        </div>
        <Footer />
        <div className="pb-4" />
      </div>
    </BodyTemplate>
  );
};

export default About;
