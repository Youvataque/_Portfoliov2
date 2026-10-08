import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

/////////////////////////////////////////////////////////////////
// carte de redirection d'un projet arrêté vers celui qui lui succède,
// aux couleurs du projet de destination (sa classe de thème est appliquée à la carte)
const SuccessorCard: React.FC<{ successor: Project; title: string; text: string }> = ({ successor, title, text }) => {
    return (
        <section className="border-t border-project-line py-16 max-md:py-10">
            <Link
                href={`/projects/${successor.slug}`}
                className={`${successor.theme} group relative grid grid-cols-[1fr_1.15fr] max-lg:grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl bg-project-ink2 p-10 max-md:p-6 shadow-xl shadow-black/15 transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/25`}
            >
                <div className="relative z-10 flex flex-col items-start gap-5">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                        Projet arrêté
                    </span>
                    <h2 className="font-heading text-4xl max-md:text-3xl font-bold leading-tight text-white">{title}</h2>
                    <p className="max-w-md text-lg max-md:text-base leading-relaxed text-white/80">{text}</p>
                    <span className="mt-2 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-project-ink2 shadow-md shadow-black/20">
                        Découvrir {successor.name}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                </div>

                {/* aperçu de la destination, incliné, qui se redresse au survol */}
                <div className="relative aspect-video w-full rotate-[3deg] overflow-hidden rounded-2xl shadow-2xl shadow-black/30 transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-[1.02]">
                    <Image fill src={successor.cover} alt={successor.name} sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
                </div>
            </Link>
        </section>
    );
};

export default SuccessorCard;
