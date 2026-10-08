"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { IN_APP_NAV_KEY } from "@/components/FondamentalAppComp/RouteHistory";

/////////////////////////////////////////////////////////////////
// bouton retour aux couleurs du projet : revient à la page d'origine (accueil ou projets),
// ou à la page des projets si on est arrivé directement ici
const BackButton: React.FC<{ variant?: "pill" | "link" }> = ({ variant = "pill" }) => {
    const router = useRouter();

    function goBack() {
        let inApp = false;
        try {
            inApp = sessionStorage.getItem(IN_APP_NAV_KEY) === "1";
        } catch {
            inApp = false;
        }
        if (inApp) router.back();
        else router.push("/projects");
    }

    return (
        <button
            type="button"
            onClick={goBack}
            className={cn(
                "group inline-flex items-center gap-2",
                variant === "pill"
                    ? "rounded-full bg-project-ctaBg py-2.5 pl-3 pr-5 text-sm font-bold text-project-ctaText shadow-md shadow-black/15 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/25"
                    : "text-sm font-semibold text-project-ink transition-opacity duration-200 hover:opacity-70"
            )}
        >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            Retour
        </button>
    );
};

export default BackButton;
