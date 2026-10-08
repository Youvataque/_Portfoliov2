import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Poppins, JetBrains_Mono, Mukta_Mahee, Manrope, Inter, Outfit, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import ProjectArticle from "@/components/ProjectPage/ProjectArticle";
import { getProject, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

/////////////////////////////////////////////////////////////////
// polices des pages projet (activées par la classe de thème du projet)
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-poppins" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-jetbrains" });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-outfit" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-montserrat" });
const inter = Inter({ subsets: ["latin"], weight: ["500", "600", "700", "800", "900"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-manrope" });
const mukta = Mukta_Mahee({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-mukta" });
const amiko = localFont({
    src: [
        { path: "../../fonts/Amiko-SemiBold.woff2", weight: "600" },
        { path: "../../fonts/Amiko-Bold.woff2", weight: "700" },
    ],
    variable: "--font-amiko",
});

type Params = { params: Promise<{ slug: string }> };

/////////////////////////////////////////////////////////////////
// une page statique par projet
export function generateStaticParams() {
    return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const project = getProject((await params).slug);
    if (!project) return {};
    return {
        title: `${project.name} · Étude de cas · Seguin-dev`,
        description: project.summary,
        openGraph: { images: [project.cover] },
    };
}

/////////////////////////////////////////////////////////////////
// page projet aux couleurs du projet
export default async function ProjectPage({ params }: Params) {
    const project = getProject((await params).slug);
    if (!project) notFound();

    return (
        <main className={cn(poppins.variable, jetbrains.variable, mukta.variable, amiko.variable, manrope.variable, inter.variable, outfit.variable, montserrat.variable, project.theme, "min-h-screen bg-project-bg")}>
            <ProjectArticle project={project} />
        </main>
    );
}
