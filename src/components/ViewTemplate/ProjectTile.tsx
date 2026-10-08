import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

/////////////////////////////////////////////////////////////////
// tuile projet aux couleurs du site : visuel 00 + premier coup d'œil, ouvre la page du projet
const ProjectTile: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group grid grid-cols-[1.25fr_1fr] max-lg:grid-cols-1 gap-8 max-md:gap-6 rounded-3xl bg-elementColor/50 p-4 max-md:p-3 shadow-sm shadow-primary/10 backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/15"
        >
            {/* visuel 00 */}
            <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                    fill
                    src={project.cover}
                    alt={project.name}
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
            </div>

            {/* premier coup d'œil */}
            <div className="flex flex-col justify-center gap-5 px-2 pb-2 max-lg:px-3">
                <div className="flex flex-col gap-1">
                    <h3 className="text-3xl max-md:text-2xl font-bold tracking-tight text-primary">{project.name}</h3>
                    <span className="text-sm text-foreground">{project.role} · {project.period}</span>
                </div>
                <p className="text-base max-md:text-sm leading-relaxed text-foreground">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                        <span key={tech} className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-background">
                            {tech}
                        </span>
                    ))}
                </div>
                <span className="flex items-center gap-2 text-sm font-semibold text-primary">
                    Lire l&apos;étude de cas
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
            </div>
        </Link>
    );
};

export default ProjectTile;
