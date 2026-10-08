import { Suspense } from "react";
import BodyTemplate from "@/components/FondamentalAppComp/BodyTemplate";
import Footer from "@/components/FondamentalAppComp/Footer";
import ProjectsBrowser from "@/components/ViewTemplate/ProjectsBrowser";

/////////////////////////////////////////////////////////////////
// page de tous les projets au nouveau format (tuile + étude de cas)
export default function Projects() {
    return (
        <BodyTemplate>
            <div className="flex w-full max-w-6xl flex-col px-6 max-md:px-4">
                <header className="flex flex-col items-start gap-6 pt-40 pb-10 max-md:pt-32 max-md:pb-8">
                    <span className="rounded-full bg-elementColor/60 px-4 py-1.5 text-sm font-medium text-primary shadow-lg shadow-primary/15 backdrop-blur-xl">
                        Mes projets
                    </span>
                    <h1 className="text-6xl max-xl:text-5xl max-md:text-4xl font-bold tracking-tight text-primary">
                        Ce que j&apos;ai construit
                    </h1>
                    <p className="max-w-2xl text-xl max-xl:text-lg max-md:text-base leading-relaxed text-foreground">
                        Les produits sur lesquels j&apos;ai le plus appris. Chacun a son étude de cas, du problème de départ aux choix techniques.
                    </p>
                </header>

                {/* le filtre lit l'URL côté client */}
                <Suspense>
                    <ProjectsBrowser />
                </Suspense>

                <Footer />
            </div>
        </BodyTemplate>
    );
}
