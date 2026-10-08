import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MarkedTitle, Project, ProjectSection } from "@/data/projects";
import BackButton from "./BackButton";
import GalleryScroller from "./GalleryScroller";
import HomeflixStack from "./diagrams/HomeflixStack";

/////////////////////////////////////////////////////////////////
// schémas dessinés en code, utilisables à la place d'une image de section
const diagrams = {
    "homeflix-stack": HomeflixStack,
};

/////////////////////////////////////////////////////////////////
// texte avec les passages `entre backticks` rendus en code et les [liens](/chemin) discrets
function RichText({ text }: { text: string }) {
    return (
        <>
            {text.split(/(`[^`]+`|\[[^\]]+\]\([^)]+\))/).map((part, i) => {
                if (part.startsWith("`")) {
                    return (
                        <code key={i} className="rounded-md bg-project-surface px-1.5 py-0.5 font-mono text-[0.85em] font-bold text-project-ink">
                            {part.slice(1, -1)}
                        </code>
                    );
                }
                const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                if (link) {
                    return (
                        <Link key={i} href={link[2]} className="font-semibold text-project-ink underline decoration-project-line decoration-2 underline-offset-4 transition-colors duration-200 hover:decoration-project-accent">
                            {link[1]}
                        </Link>
                    );
                }
                return part;
            })}
        </>
    );
}

/////////////////////////////////////////////////////////////////
// titre avec surlignage couleur d'accent
function Title({ title, as: Tag = "h2", className }: { title: MarkedTitle; as?: "h1" | "h2"; className?: string }) {
    return (
        <Tag className={`font-heading font-extrabold [text-transform:var(--project-title-case,uppercase)] leading-[1.12] tracking-tight text-project-ink [text-wrap:balance] ${className ?? ""}`}>
            {title.before}
            <mark className="rounded-[0.12em] bg-project-markBg [background-image:var(--project-mark-image,none)] px-[var(--project-mark-px,0.14em)] text-project-markText [box-decoration-break:clone]">{title.mark}</mark>
            {title.after}
        </Tag>
    );
}

/////////////////////////////////////////////////////////////////
// en-tête : accroche + stack + écran de l'app sur halo d'accent
function Hero({ project }: { project: Project }) {
    return (
        <header className="grid grid-cols-[1.2fr_1fr] max-lg:grid-cols-1 items-center gap-12 pt-10 pb-24 max-md:pb-16">
            <div className="flex flex-col items-start gap-7">
                <div className="flex items-center gap-3">
                    <Image src={project.logo} alt="" width={36} height={38} />
                    <span className="font-heading text-2xl font-bold text-project-brand">{project.name}</span>
                    <span className="ml-2 rounded-full bg-project-surface px-3 py-1 text-xs font-semibold text-project-muted">
                        {project.role} · {project.period}
                    </span>
                </div>
                <Title title={project.hero.title} as="h1" className="text-6xl max-xl:text-5xl max-md:text-4xl" />
                <p className="max-w-xl text-xl max-md:text-base font-medium leading-relaxed text-project-muted">{project.hero.lead}</p>
                <div className="flex flex-wrap gap-2.5">
                    {project.stack.map((tech) => (
                        <span key={tech} className="flex items-center gap-2 rounded-full bg-project-chipBg px-4 py-2 text-sm font-semibold text-project-chipText">
                            <i className="h-2 w-2 rounded-full bg-project-chipDot [display:var(--project-chip-dot,block)]" />
                            {tech}
                        </span>
                    ))}
                </div>
                {project.url && (
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 rounded-2xl bg-project-ctaBg px-6 py-3 text-base font-bold text-project-ctaText shadow-sm shadow-black/10 transition-shadow duration-300 hover:shadow-lg hover:shadow-project-ink/20"
                    >
                        {project.urlLabel ?? `Découvrir ${new URL(project.url).hostname}`}
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                )}
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[460px] max-md:max-w-[320px]">
                <div className="absolute inset-[6%] rounded-full bg-project-heroDisc" />
                {project.hero.screenFramed ? (
                    // maquette déjà encadrée (bezel compris, fond transparent)
                    <Image src={project.hero.screen} alt={`Écran de l'app ${project.name}`} width={600} height={1236} className="absolute left-1/2 top-[2%] h-auto w-[50%] -translate-x-1/2 rotate-[5deg] drop-shadow-2xl" priority />
                ) : (
                    <div className="absolute left-1/2 top-[4%] w-[48%] -translate-x-1/2 rotate-[5deg] rounded-[2.4rem] max-md:rounded-[1.7rem] bg-project-bezel p-2 shadow-2xl shadow-black/40">
                        <Image src={project.hero.screen} alt={`Écran de l'app ${project.name}`} width={600} height={1298} className="w-full rounded-[2rem] max-md:rounded-[1.4rem]" priority />
                    </div>
                )}
                {project.hero.illustration && (
                    <Image src={project.hero.illustration} alt="" width={356} height={303} className={`absolute h-auto ${project.hero.screenFramed ? "-bottom-[2%] -left-[2%] w-[30%]" : "-bottom-[4%] -left-[6%] w-[48%]"}`} />
                )}
            </div>
        </header>
    );
}

/////////////////////////////////////////////////////////////////
// section : le visuel (qui porte numéro, titre et points clés) à côté du détail
// en desktop, le visuel alterne gauche / droite d'une section à l'autre
function Section({ section, index }: { section: ProjectSection; index: number }) {
    const imageFirst = index % 2 === 0;
    const Diagram = section.diagram ? diagrams[section.diagram] : undefined;

    // section sans visuel exporté : mise en page éditoriale (titre, schéma pleine largeur, texte en colonnes)
    if (!section.image) {
        return (
            <section className="flex flex-col items-center gap-12 max-md:gap-8 border-t border-project-line py-24 max-md:py-16">
                {section.title && (
                    <Title title={section.title} className="max-w-3xl text-center text-5xl max-xl:text-4xl max-md:text-3xl" />
                )}
                {Diagram && (
                    <div className="aspect-[600/340] w-full max-w-4xl">
                        <Diagram />
                    </div>
                )}
                <div className="grid w-full grid-cols-3 max-lg:grid-cols-1 gap-10 max-lg:gap-6">
                    {section.body.map((paragraph, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            <span className="h-1 w-10 rounded-full bg-project-accent" />
                            <p className="text-base leading-relaxed text-project-muted">
                                <RichText text={paragraph} />
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section className={`grid ${imageFirst ? "grid-cols-[1.6fr_1fr]" : "grid-cols-[1fr_1.6fr]"} max-lg:grid-cols-1 items-center gap-12 max-lg:gap-8 border-t border-project-line py-20 max-md:py-14`}>
            <div className={`relative aspect-video w-full overflow-hidden rounded-3xl border border-project-line shadow-xl shadow-black/10 ${imageFirst ? "" : "lg:order-2"}`}>
                <Image fill src={section.image.src} alt={section.image.alt} sizes="(max-width: 1024px) 100vw, 680px" className="object-cover" />
            </div>
            <div className="flex flex-col gap-5">
                {section.body.map((paragraph, i) => (
                    <p key={i} className="text-lg max-md:text-base leading-relaxed text-project-muted">
                        <RichText text={paragraph} />
                    </p>
                ))}
            </div>
        </section>
    );
}

/////////////////////////////////////////////////////////////////
// visuels côte à côte, comme sur les stores (défilement horizontal)
function Gallery({ project }: { project: Project }) {
    return (
        <section className="border-t border-project-line py-24 max-md:py-16">
            <h2 className="mb-10 text-center font-heading text-3xl max-md:text-2xl font-extrabold [text-transform:var(--project-title-case,uppercase)] tracking-tight text-project-ink">
                {(project.galleryTitle ?? { before: "L'app en ", mark: "images" }).before}
                <mark className="rounded-[0.12em] bg-project-markBg [background-image:var(--project-mark-image,none)] px-[var(--project-mark-px,0.14em)] text-project-markText">{(project.galleryTitle ?? { mark: "images" }).mark}</mark>
            </h2>
            <GalleryScroller items={project.gallery} device={project.galleryStyle === "device"} />
        </section>
    );
}

/////////////////////////////////////////////////////////////////
// page projet complète, aux couleurs du projet
const ProjectArticle: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <article className="mx-auto w-full max-w-6xl px-6 max-md:px-4">
            <div className="pt-28 max-md:pt-24">
                <BackButton />
            </div>
            <Hero project={project} />
            {project.sections.map((section, i) => (
                <Section key={section.kicker} section={section} index={i} />
            ))}
            <Gallery project={project} />
            <footer className="flex items-center justify-between border-t border-project-line py-10 text-sm font-semibold text-project-muted">
                <BackButton variant="link" />
                <span className="flex items-center gap-2">
                    <Image src={project.logo} alt="" width={20} height={21} />
                    {project.name} · étude de cas
                </span>
            </footer>
        </article>
    );
};

export default ProjectArticle;
