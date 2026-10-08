import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/////////////////////////////////////////////////////////////////
// logos des autres projets (aperçu empilé) ; fill : le logo remplit toute la pastille
const logos = [
    { src: "/Img/homeflixLogo.webp", alt: "HomeFlix", fill: true },
    { src: "/Img/epona.png", alt: "Épona & Vous" },
    { src: "/Img/Logo_SEB.png", alt: "SolsEnergiesBains" },
];

/////////////////////////////////////////////////////////////////
// bandeau pleine largeur vers la page de tous les projets
const OtherProjectsBanner: React.FC = () => {
    return (
        <Link
            href="/projects"
            className="group mt-6 flex items-center justify-between gap-6 rounded-3xl bg-elementColor/50 px-8 py-7 max-md:px-5 max-md:py-5 shadow-sm shadow-primary/10 backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/15"
        >
            <div className="flex flex-col gap-1">
                <span className="text-2xl max-md:text-xl font-bold tracking-tight text-primary">Voir mes autres projets</span>
                <span className="text-sm max-md:text-xs text-foreground">
                    Sites vitrines, applications mobiles et projets open source, tout le reste est par ici.
                </span>
            </div>

            <div className="flex shrink-0 items-center gap-5">
                {/* logos empilés qui s'écartent au survol */}
                <div className="flex items-center max-sm:hidden">
                    {logos.map(({ src, alt, fill }, i) => (
                        <div
                            key={src}
                            className="relative -ml-3 first:ml-0 h-12 w-12 overflow-hidden rounded-full bg-elementColor shadow-md shadow-primary/15 transition-[margin] duration-300 group-hover:ml-1 group-hover:first:ml-0"
                            style={{ zIndex: logos.length - i }}
                        >
                            <Image fill src={src} alt={alt} sizes="48px" className={fill ? "object-cover scale-110" : "object-contain p-2"} />
                        </div>
                    ))}
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-background shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                </span>
            </div>
        </Link>
    );
};

export default OtherProjectsBanner;
