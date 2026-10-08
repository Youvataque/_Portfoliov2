"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/////////////////////////////////////////////////////////////////
// bouton précédent / suivant, aux couleurs du projet
function NavButton({ side, visible, onClick }: { side: "left" | "right"; visible: boolean; onClick: () => void }) {
    const Icon = side === "left" ? ChevronLeft : ChevronRight;
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={side === "left" ? "Visuel précédent" : "Visuel suivant"}
            tabIndex={visible ? 0 : -1}
            className={cn(
                "absolute top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full",
                "border border-project-ink/10 bg-project-bg/90 text-project-ink shadow-lg shadow-black/20",
                // seules l'opacité et l'échelle s'animent, pour un survol fluide
                "transition-[opacity,scale] duration-200 ease-out will-change-[scale] hover:scale-108 active:scale-95",
                side === "left" ? "left-2 max-md:left-0" : "right-2 max-md:right-0",
                visible ? "opacity-100" : "pointer-events-none opacity-0"
            )}
        >
            <Icon className="h-6 w-6" strokeWidth={2.25} />
        </button>
    );
}

/////////////////////////////////////////////////////////////////
// visuels côte à côte, comme sur les stores, avec boutons de défilement
const GalleryScroller: React.FC<{ items: { src: string; alt: string }[]; device?: boolean }> = ({ items, device }) => {
    const scroller = useRef<HTMLDivElement>(null);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(false);

    // met à jour la visibilité des boutons selon la position du défilement
    const update = useCallback(() => {
        const el = scroller.current;
        if (!el) return;
        setCanPrev(el.scrollLeft > 4);
        setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    }, []);

    useEffect(() => {
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [update]);

    // défile d'un visuel (largeur d'une carte + écart)
    function scrollBy(direction: 1 | -1) {
        const el = scroller.current;
        const card = el?.firstElementChild as HTMLElement | null;
        if (!el || !card) return;
        el.scrollBy({ left: direction * (card.offsetWidth + 20), behavior: "smooth" });
    }

    return (
        <div className="relative">
            <NavButton side="left" visible={canPrev} onClick={() => scrollBy(-1)} />
            <NavButton side="right" visible={canNext} onClick={() => scrollBy(1)} />
            <div
                ref={scroller}
                onScroll={update}
                className="-mx-6 max-md:-mx-4 flex snap-x snap-mandatory scroll-px-6 max-md:scroll-px-4 gap-5 overflow-x-auto px-6 max-md:px-4 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {items.map(({ src, alt }) =>
                    device ? (
                        // maquette d'appareil détourée : pas de carte, juste une ombre portée
                        <div key={src} className="relative aspect-[600/1236] w-[220px] max-md:w-[180px] shrink-0 snap-start">
                            <Image fill src={src} alt={alt} sizes="220px" className="object-contain drop-shadow-xl" />
                        </div>
                    ) : (
                        <div key={src} className="relative aspect-[1284/2778] w-[240px] max-md:w-[200px] shrink-0 snap-start overflow-hidden rounded-3xl bg-project-surface shadow-lg shadow-black/10">
                            <Image fill src={src} alt={alt} sizes="240px" className="object-cover" />
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default GalleryScroller;
