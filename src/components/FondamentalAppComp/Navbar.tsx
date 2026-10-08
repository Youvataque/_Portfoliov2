"use client"
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

/////////////////////////////////////////////////////////////////
// liens de navigation
const links = [
    { title: "Accueil", dest: "/" },
    { title: "Projets", dest: "/projects" },
    { title: "Infos", dest: "/about" },
];

/////////////////////////////////////////////////////////////////
// composant navBar de l'app (pilule de verre flottante)
const NavBar = () => {
    const pathname = usePathname();
    const [active, setActive] = useState(pathname);
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const firstRender = useRef(true);

    /////////////////////////////////////////////////////////////////
    // goutte : bords gauche/droit animés séparément pour l'étirer entre deux liens
    const left = useMotionValue(0);
    const right = useMotionValue(0);
    const restWidth = useMotionValue(1);
    const opacity = useMotionValue(0);
    const width = useTransform(() => right.get() - left.get());
    // s'écrase en hauteur quand elle s'étire (volume conservé)
    const scaleY = useTransform(() => {
        const w = right.get() - left.get();
        return w > 0 ? Math.max(0.55, Math.min(1, Math.sqrt(restWidth.get() / w))) : 1;
    });

    useEffect(() => setActive(pathname), [pathname]);

    /////////////////////////////////////////////////////////////////
    // déplacement de la goutte vers le lien actif : le bord avant part, le bord arrière suit
    useLayoutEffect(() => {
        const el = linkRefs.current[active];
        if (!el) {
            opacity.set(0);
            return;
        }
        const l = el.offsetLeft;
        const r = l + el.offsetWidth;
        restWidth.set(el.offsetWidth);
        opacity.set(1);
        if (firstRender.current) {
            firstRender.current = false;
            left.set(l);
            right.set(r);
            return;
        }
        const ease = [0.65, 0, 0.35, 1] as const;
        const lead = { duration: 0.35, ease };
        const trail = { duration: 0.5, delay: 0.08, ease };
        const goingRight = l > left.get();
        const a = animate(right, r, goingRight ? lead : trail);
        const b = animate(left, l, goingRight ? trail : lead);
        return () => {
            a.stop();
            b.stop();
        };
    }, [active, left, right, restWidth, opacity]);

    /////////////////////////////////////////////////////////////////
    // recalage sans animation au redimensionnement
    useEffect(() => {
        const snap = () => {
            const el = linkRefs.current[active];
            if (!el) return;
            left.set(el.offsetLeft);
            right.set(el.offsetLeft + el.offsetWidth);
            restWidth.set(el.offsetWidth);
        };
        window.addEventListener('resize', snap);
        return () => window.removeEventListener('resize', snap);
    }, [active, left, right, restWidth]);

    /////////////////////////////////////////////////////////////////
    // partie de gauche de la navBar (titre + logo)
    function title() {
        return (
            <Link className="flex items-center gap-2.5 rounded-full py-1 pl-1 pr-4 max-md:pr-3 transition-colors duration-200 hover:bg-foreground/10" href="/">
                <div className="relative w-9 h-9 overflow-hidden rounded-full">
                    <Image fill sizes="36px" src="/Img/avatar.webp" className="object-cover" alt="Logo" />
                </div>
                <span className="font-semibold text-lg max-md:text-base text-primary">Seguin-dev</span>
            </Link>
        );
    }

    /////////////////////////////////////////////////////////////////
    // partie droite de la navBar (links)
    function navLinks() {
        return (
            <div className='relative flex items-center gap-1'>
                <motion.span
                    aria-hidden
                    className="absolute inset-y-0 left-0 rounded-full bg-primary"
                    style={{ x: left, width, scaleY, opacity }}
                />
                {links.map(({ title, dest }) => (
                    <Link
                        key={dest}
                        href={dest}
                        ref={(el) => { linkRefs.current[dest] = el; }}
                        onClick={() => setActive(dest)}
                        className={cn(
                            "relative rounded-full px-4 py-1.5 max-md:px-3 text-sm font-medium transition-colors duration-200",
                            active === dest ? "text-background delay-200" : "text-primary hover:bg-foreground/10"
                        )}
                    >
                        {title}
                    </Link>
                ))}
            </div>
        );
    }

    /////////////////////////////////////////////////////////////////
    // code principale
    return (
        <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-6 max-md:px-3">
            <nav className="bg-elementColor/70 backdrop-blur-lg shadow-sm shadow-primary/10 flex w-full max-w-6xl items-center justify-between rounded-full p-2">
                {title()}
                {navLinks()}
            </nav>
        </header>
    );
};

export default NavBar;
