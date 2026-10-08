"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { ProjectCategory, projectCategories, projects } from "@/data/projects";
import ProjectTile from "./ProjectTile";
import SectionHeader from "./SectionHeader";
import PerspectiveReveal from "./PerspectiveReveal";

/////////////////////////////////////////////////////////////////
// liste des projets par catégorie, avec un filtre pour n'en afficher qu'une
// le filtre vit dans l'URL (?filter=mobile) pour que la navbar puisse ouvrir la page préfiltrée
const ProjectsBrowser: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const param = useSearchParams().get("filter");
    const filter: ProjectCategory | "all" = projectCategories.some(({ id }) => id === param) ? (param as ProjectCategory) : "all";
    const setFilter = (id: ProjectCategory | "all") =>
        router.replace(id === "all" ? pathname : `${pathname}?filter=${id}`, { scroll: false });

    // seules les catégories qui contiennent au moins un projet
    const categories = projectCategories.filter(({ id }) => projects.some((p) => p.category === id));
    const visible = categories.filter(({ id }) => filter === "all" || filter === id);
    const options = [{ id: "all" as const, title: "Tous" }, ...categories];

    return (
        <>
            {/* filtre */}
            <div className="mb-12 max-md:mb-8 flex flex-wrap gap-2">
                {options.map(({ id, title }) => (
                    <button
                        key={id}
                        type="button"
                        onClick={() => setFilter(id)}
                        aria-pressed={filter === id}
                        className={cn(
                            "rounded-full px-5 py-2 text-sm font-medium shadow-lg shadow-primary/15 backdrop-blur-lg transition-colors duration-200",
                            filter === id ? "bg-primary text-background" : "bg-elementColor/60 text-primary hover:bg-foreground/10"
                        )}
                    >
                        {title}
                        <span className={cn("ml-2 text-xs", filter === id ? "opacity-70" : "text-foreground")}>
                            {id === "all" ? projects.length : projects.filter((p) => p.category === id).length}
                        </span>
                    </button>
                ))}
            </div>

            {/* une section par catégorie affichée */}
            {visible.map(({ id, title }) => (
                <section key={id} id={id} className="scroll-mt-28 pb-16 max-md:pb-10">
                    <SectionHeader title={title} level="sub" />
                    <PerspectiveReveal>
                        <div className="flex flex-col gap-6">
                            {projects
                                .filter((p) => p.category === id)
                                .map((project) => (
                                    <ProjectTile key={project.slug} project={project} />
                                ))}
                        </div>
                    </PerspectiveReveal>
                </section>
            ))}
        </>
    );
};

export default ProjectsBrowser;
