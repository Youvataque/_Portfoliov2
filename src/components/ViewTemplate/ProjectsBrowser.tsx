"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProjectCategory, projectCategories, projects } from "@/data/projects";
import ProjectTile from "./ProjectTile";
import SectionHeader from "./SectionHeader";
import PerspectiveReveal from "./PerspectiveReveal";

/////////////////////////////////////////////////////////////////
// liste des projets par catégorie, avec un filtre pour n'en afficher qu'une
const ProjectsBrowser: React.FC = () => {
    const [filter, setFilter] = useState<ProjectCategory | "all">("all");

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
                            "rounded-full px-5 py-2 text-sm font-medium shadow-sm shadow-primary/10 backdrop-blur-lg transition-colors duration-200",
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
