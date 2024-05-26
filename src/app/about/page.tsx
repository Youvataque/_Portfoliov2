import BodyTemplate from "@/components/FondamentalAppComp/BodyTemplate";
import Footer from "@/components/FondamentalAppComp/Footer";
import MainText from "@/components/ViewTemplate/MainText";
import SousTitle from "@/components/ViewTemplate/SousTitle";
import Title from "@/components/ViewTemplate/Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";

const About:React.FC = () => {

    /////////////////////////////////////////////////////////////////
    // data des contacts
    const contactData = [
        {
          title: "Email",
          description:"Pour tout contact professionnel c'est par ici. Je réponds dans la journée !",
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
            "Si vous souhaitez comprendre les ficelles de certains de mes projets vous en retrouverez la majorité ici.",
          link: "https://github.com/youvataque",
        },
    ];

    /////////////////////////////////////////////////////////////////
    // mini description de mon parcours
    function description() {
        return <MainText 
            text="Passionné d'informatique depuis toujours, j'ai débuté en bricolant des ordinateurs à 10 ans. En entrant au lycée, j'ai trouvé un certain plaisir dans le scripting avec Python pour finalement trouver ma vocation en 2023 avec le développement mobile (SwiftUI à cette époque). Je suis aujourd'hui développeur Front-end en React.js et Flutter."
            style="text-primary pt-4"
        />
    }

    /////////////////////////////////////////////////////////////////
    // header du composant avec pp et infos
    function header(){
        return <div className="flex flex-row justify-between items-center w-[50vw] max-2xl:w-[70vw] max-md:w-[95vw]">
        <div className="flex flex-col w-full items-start">
            <SousTitle text="Un peu sur moi -" style="text-secondary" />
            <Title text="Yannis Seguin" style="text-secondary" />
            <div className="max-md:hidden">
                {description()}
            </div>
        </div>
        <div className="flex flex-col w-full max-md:w-auto items-end">
          <div className="relative w-96 h-96 max-2xl:w-80 max-2xl:h-80 max-xl:w-64 max-xl:h-64 max-md:w-44 max-md:h-44">
              <Image fill src="/Img/profilPic.webp" alt="Yannis Seguin"/>
            </div>
          </div>
        </div>
    }

    /////////////////////////////////////////////////////////////////
    // corp du code
    return (
        <BodyTemplate>
            <div className="flex flex-col justify-center items-center w-[50vw] max-2xl:w-[70vw] max-md:w-[95vw]">
                {header()}
                <div className="md:hidden">
                    {description()}
                </div>
                <div className="pt-[20vw] max-2xl:pt-[16vw] max-md:pt-32"/>
                <SousTitle text="Mes contacts :" style="text-secondary" />
                <div className="max-w-5xl mx-auto px-8 mt-8">
                    <HoverEffect items={contactData} />
                </div>
                <div className="pt-[19vw] max-2xl:pt-[16vw] max-md:pt-32"/>
                <Footer/>
                <div className="pb-4"/>
            </div>
        </BodyTemplate>
    );
};

export default About;
