import BodyTemplate from "@/components/FondamentalAppComp/BodyTemplate";
import Footer from "@/components/FondamentalAppComp/Footer";
import MainText from "@/components/ViewTemplate/MainText";
import SectionHeader from "@/components/ViewTemplate/SectionHeader";
import PerspectiveReveal from "@/components/ViewTemplate/PerspectiveReveal";
import ProfileScene from "@/components/ViewTemplate/ProfileScene";
import { HoverEffect } from "@/components/ui/card-hover-effect";

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
  // header du composant avec pp et parcours
  function header() {
    return <section className="flex min-h-screen items-center justify-between gap-12 pt-28 pb-16 max-md:flex-col-reverse max-md:items-start max-md:justify-center max-md:gap-8">
      <div className="flex flex-1 flex-col items-start">
        <span className="bg-elementColor/60 backdrop-blur-xl shadow-lg shadow-primary/15 rounded-full px-4 py-1.5 text-sm font-medium text-primary">
          Un peu sur moi —
        </span>
        <h1 className="mt-6 whitespace-nowrap text-6xl max-xl:text-5xl max-lg:text-4xl font-bold tracking-tight text-primary">
          Yannis Seguin
        </h1>
        <MainText
          text={"Passé par le freelance, je suis aujourd'hui CTO de Neeko. J'y ai repris un MVP fragile pour en faire une plateforme temps réel en production. À côté, je développe Clane, un SaaS pour les entreprises de clim et de chauffage, utilisable hors connexion.\n\nJe travaille sur toute la chaîne, de l'app Flutter au back Laravel, jusqu'au déploiement avec Docker et GitHub Actions. J'utilise l'IA au quotidien comme outil de travail, et tout ce qui part en production est relu et compris."}
          style="mt-6 pt-0 max-w-xl text-lg max-xl:text-base leading-relaxed text-foreground"
        />
      </div>
      <ProfileScene className="w-full max-w-[340px] max-lg:max-w-[280px] max-md:max-w-[240px] shrink-0 max-md:mx-auto" />
    </section>
  }

  /////////////////////////////////////////////////////////////////
  // corp du code
  return (
    <BodyTemplate>
      <div className="flex w-full max-w-6xl flex-col px-6 max-md:px-4">
        {header()}
        <section className="py-24 max-md:py-16">
          <SectionHeader title="Mes contacts" />
          <PerspectiveReveal>
            <HoverEffect items={contactData} className="-mx-2" />
          </PerspectiveReveal>
        </section>
        <Footer />
      </div>
    </BodyTemplate>
  );
};

export default About;
