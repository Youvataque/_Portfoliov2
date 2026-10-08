"use client";
/* eslint-disable */
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BodyTemplate from "@/components/FondamentalAppComp/BodyTemplate";
import ProjectTile from "@/components/ViewTemplate/ProjectTile";
import OtherProjectsBanner from "@/components/ViewTemplate/OtherProjectsBanner";
import { projects } from "@/data/projects";
import { TechStack } from "@/components/ViewTemplate/TechStack";
import Footer from "@/components/FondamentalAppComp/Footer";
import SocialMedia from "@/components/ViewTemplate/SocialMedia";
import ProfileScene from "@/components/ViewTemplate/ProfileScene";
import SectionHeader from "@/components/ViewTemplate/SectionHeader";
import PerspectiveReveal from "@/components/ViewTemplate/PerspectiveReveal";

/////////////////////////////////////////////////////////////////
// apparition décalée des éléments du hero
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Home() {

  /////////////////////////////////////////////////////////////////
  // header du composant avec pp et infos
  function header() {
    return <section className="flex min-h-screen flex-col justify-center gap-16 max-md:gap-12 pt-28 pb-16">
      <div className="flex items-center justify-between gap-12 max-md:flex-col-reverse max-md:items-start max-md:gap-8">
        <div className="flex flex-1 flex-col items-start">
          <motion.span {...fadeUp(0)} className="bg-elementColor/60 backdrop-blur-xl shadow-sm shadow-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary">
            Bienvenue ! Je suis —
          </motion.span>
          <motion.h1 {...fadeUp(0.1)} className="mt-6 whitespace-nowrap text-6xl max-xl:text-5xl max-lg:text-4xl font-bold tracking-tight text-primary">
            Yannis Seguin
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="mt-6 max-w-xl text-xl max-xl:text-lg max-md:text-base leading-relaxed text-foreground">
            <b className="text-primary">Product Engineer. </b>Je conçois et déploie des architectures web & mobile complètes. Mon expertise : transformer des besoins métier en produits robustes et scalables (Flutter & Laravel).
          </motion.p>
        </div>
        <ProfileScene className="w-full max-w-[340px] max-lg:max-w-[280px] max-md:max-w-[240px] shrink-0 max-md:mx-auto" />
      </div>
      <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-3">
        <Link href="/projects" className="group flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-background shadow-lg shadow-primary/15 transition-shadow duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-xl hover:shadow-primary/35">
          Voir mes projets
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link href="/about" className="bg-elementColor/60 backdrop-blur-lg shadow-sm shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-2xl px-6 py-3 text-sm font-medium text-primary">
          Me contacter
        </Link>
        <SocialMedia />
      </motion.div>
    </section>
  }

  /////////////////////////////////////////////////////////////////
  // section affichant tout les projets sous forme de bento
  function projectZone() {
    return <section className="py-24 max-md:py-16">
      <SectionHeader title="Mes projets les plus importants" />
      <PerspectiveReveal>
        <div className="flex flex-col gap-6">
          {projects.filter((p) => p.category === "principal").map((project) => (
            <ProjectTile key={project.slug} project={project} />
          ))}
        </div>
      </PerspectiveReveal>
      <OtherProjectsBanner />
    </section>
  }

  /////////////////////////////////////////////////////////////////
  // section affichant les technos maîtrisées
  function infoZone() {
    return <section className="py-24 max-md:py-16">
      <SectionHeader title="Mes technos" />
      <PerspectiveReveal>
        <TechStack />
      </PerspectiveReveal>
    </section>
  }

  /////////////////////////////////////////////////////////////////
  // corp du code
  return (
    <BodyTemplate>
      <div className="flex w-full max-w-6xl flex-col px-6 max-md:px-4">
        {header()}
        {projectZone()}
        {infoZone()}
        <Footer />
      </div>
    </BodyTemplate>
  );
}
