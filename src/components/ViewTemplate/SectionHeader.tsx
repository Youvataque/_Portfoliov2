import { cn } from "@/lib/utils";

/////////////////////////////////////////////////////////////////
// en-tête de section : titre seul ; "sub" pour une sous-section sous un grand titre de page
const SectionHeader: React.FC<{ title: string; level?: "section" | "sub" }> = ({ title, level = "section" }) => (
    <h2
        className={cn(
            "font-bold tracking-tight text-primary",
            level === "section"
                ? "mb-12 max-md:mb-8 text-5xl max-xl:text-4xl max-md:text-3xl"
                : "mb-6 max-md:mb-4 text-2xl max-md:text-xl"
        )}
    >
        {title}
    </h2>
);

export default SectionHeader;
