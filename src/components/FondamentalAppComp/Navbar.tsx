"use client"
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, AnimationPlaybackControls, animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

/////////////////////////////////////////////////////////////////
// liens de navigation
const links = [
    { title: "Accueil", dest: "/" },
    { title: "Projets", dest: "/projects" },
    { title: "Infos", dest: "/about" },
];

// sous-menu de Projets : ouvre /projects préfiltré
const projectsDest = "/projects";
const projectFilters = [
    { title: "Favoris", filter: "principal" },
    { title: "Mobile", filter: "mobile" },
    { title: "Web", filter: "web" },
];

// lien actif d'une page : /projects/x garde la bulle sur Projets
const activeLink = (pathname: string) =>
    links.find(({ dest }) => dest !== "/" && pathname.startsWith(`${dest}/`))?.dest ?? pathname;

/////////////////////////////////////////////////////////////////
// composant navBar de l'app (pilule de verre flottante)
const NavBar = () => {
    const pathname = usePathname();
    const [active, setActive] = useState(activeLink(pathname));
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const firstRender = useRef(true);
    const [menuOpen, setMenuOpen] = useState(false);
    // survol de Projets : la goutte s'étire jusqu'à Projets puis coule vers le bas
    const [projectsOpen, setProjectsOpen] = useState(false);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const panelRef = useRef<HTMLDivElement | null>(null);

    /////////////////////////////////////////////////////////////////
    // goutte : bords gauche/droit animés séparément pour l'étirer entre deux liens
    const left = useMotionValue(0);
    const right = useMotionValue(0);
    const restWidth = useMotionValue(1);
    const opacity = useMotionValue(0);
    // hauteur ajoutée sous la barre quand le sous-menu est ouvert
    const extra = useMotionValue(0);
    const width = useTransform(() => right.get() - left.get());
    const height = useTransform(() => `calc(100% + ${extra.get()}px)`);
    // s'écrase en hauteur quand elle s'étire (volume conservé)
    const scaleY = useTransform(() => {
        const w = right.get() - left.get();
        return w > 0 ? Math.max(0.55, Math.min(1, Math.sqrt(restWidth.get() / w))) : 1;
    });

    useEffect(() => setActive(activeLink(pathname)), [pathname]);

    /////////////////////////////////////////////////////////////////
    // menu mobile : se ferme au changement de page et avec Échap
    useEffect(() => setMenuOpen(false), [pathname]);
    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [menuOpen]);

    /////////////////////////////////////////////////////////////////
    // ouverture / fermeture du sous-menu Projets (petit délai pour passer du lien au panneau)
    const openProjects = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setProjectsOpen(true);
    };
    const closeProjects = (delay = 120) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setProjectsOpen(false), delay);
    };
    // le focus clavier quitte le lien Projets et son panneau
    const leavesProjects = (next: EventTarget | null) =>
        !(next instanceof Node && (panelRef.current?.contains(next) || linkRefs.current[projectsDest]?.contains(next)));
    useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);
    useEffect(() => setProjectsOpen(false), [pathname]);
    useEffect(() => {
        if (!projectsOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setProjectsOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [projectsOpen]);

    /////////////////////////////////////////////////////////////////
    // déplacement de la goutte vers le lien actif : le bord avant part, le bord arrière suit
    // au survol de Projets, elle quitte le lien actif pour Projets, puis coule vers le bas
    useLayoutEffect(() => {
        const el = linkRefs.current[active];
        const proj = linkRefs.current[projectsDest];
        const ease = [0.65, 0, 0.35, 1] as const;
        const controls: AnimationPlaybackControls[] = [];
        const stop = () => controls.forEach((c) => c.stop());

        if (projectsOpen && proj) {
            const l = proj.offsetLeft;
            const r = l + proj.offsetWidth;
            // pas d'aura active (page hors menu) : la goutte naît directement sur Projets
            if (opacity.get() === 0) {
                left.set(l);
                right.set(r);
                controls.push(animate(opacity, 1, { duration: 0.15 }));
            }
            restWidth.set(r - l);
            const moved = Math.abs(l - left.get()) > 1;
            const lead = { duration: 0.35, ease };
            const trail = { duration: 0.5, delay: 0.08, ease };
            const goingRight = l > left.get();
            controls.push(animate(right, r, goingRight ? lead : trail), animate(left, l, goingRight ? trail : lead));
            // une fois posée sur Projets, elle coule vers le bas
            controls.push(animate(extra, panelRef.current?.offsetHeight ?? 0, {
                type: 'spring', stiffness: 380, damping: 30, delay: moved ? 0.5 : 0.05,
            }));
            return stop;
        }

        // la goutte remonte avant de revenir sur le lien actif
        const d = extra.get() > 0.5 ? 0.15 : 0;
        controls.push(animate(extra, 0, { duration: 0.22, ease }));
        if (!el) {
            controls.push(animate(opacity, 0, { duration: 0.2, delay: d }));
            return stop;
        }
        const l = el.offsetLeft;
        const r = l + el.offsetWidth;
        opacity.set(1);
        if (firstRender.current) {
            firstRender.current = false;
            left.set(l);
            right.set(r);
            restWidth.set(r - l);
            return stop;
        }
        restWidth.set(r - l);
        const lead = { duration: 0.35, delay: d, ease };
        const trail = { duration: 0.5, delay: d + 0.08, ease };
        const goingRight = l > left.get();
        controls.push(animate(right, r, goingRight ? lead : trail), animate(left, l, goingRight ? trail : lead));
        return stop;
    }, [active, projectsOpen, left, right, restWidth, opacity, extra]);

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
    // sous-menu de Projets : panneau calé sous la goutte
    function projectsPanel() {
        // les options attendent que la goutte ait quitté le lien actif
        const delay = active !== projectsDest && links.some(({ dest }) => dest === active) ? 0.6 : 0.15;
        return (
            <motion.div
                ref={panelRef}
                id="projects-menu"
                aria-hidden={!projectsOpen}
                onPointerEnter={openProjects}
                onPointerLeave={() => closeProjects()}
                onFocus={openProjects}
                onBlur={(e) => leavesProjects(e.relatedTarget) && closeProjects(0)}
                className={cn("absolute left-0 top-full flex flex-col pb-1.5 pt-1", !projectsOpen && "pointer-events-none")}
                style={{ x: left, width }}
            >
                {projectFilters.map(({ title, filter }, i) => (
                    <motion.div
                        key={filter}
                        initial={false}
                        animate={projectsOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
                        transition={projectsOpen ? { duration: 0.2, delay: delay + i * 0.05 } : { duration: 0.1 }}
                    >
                        <Link
                            href={`${projectsDest}?filter=${filter}`}
                            tabIndex={projectsOpen ? 0 : -1}
                            onClick={() => { setActive(projectsDest); closeProjects(0); }}
                            className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-background transition-colors duration-200 hover:bg-background/15"
                        >
                            {title}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        );
    }

    /////////////////////////////////////////////////////////////////
    // partie droite de la navBar (links), desktop uniquement
    function navLinks() {
        return (
            <div className='relative flex items-center gap-1 max-md:hidden'>
                <motion.span
                    aria-hidden
                    className="absolute left-0 top-0 rounded-[18px] bg-primary"
                    style={{ x: left, width, height, scaleY, opacity }}
                />
                {links.map(({ title, dest }) => {
                    const isProjects = dest === projectsDest;
                    const covered = projectsOpen ? isProjects : active === dest;
                    return (
                        <Fragment key={dest}>
                            <Link
                                href={dest}
                                ref={(el) => { linkRefs.current[dest] = el; }}
                                onClick={() => { setActive(dest); if (isProjects) closeProjects(0); }}
                                {...(isProjects && {
                                    onPointerEnter: openProjects,
                                    onPointerLeave: () => closeProjects(),
                                    onFocus: openProjects,
                                    onBlur: (e: React.FocusEvent) => leavesProjects(e.relatedTarget) && closeProjects(0),
                                    "aria-haspopup": true,
                                    "aria-expanded": projectsOpen,
                                    "aria-controls": "projects-menu",
                                })}
                                className={cn(
                                    "relative rounded-full px-4 py-1.5 max-md:px-3 text-sm font-medium transition-colors duration-200",
                                    covered ? "text-background delay-200" : "text-primary hover:bg-foreground/10"
                                )}
                            >
                                {title}
                            </Link>
                            {isProjects && projectsPanel()}
                        </Fragment>
                    );
                })}
            </div>
        );
    }

    /////////////////////////////////////////////////////////////////
    // bouton hamburger, mobile uniquement
    function menuButton() {
        return (
            <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="md:hidden grid h-10 w-10 place-items-center rounded-full text-primary transition-colors duration-200 hover:bg-foreground/10"
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={menuOpen ? "close" : "open"}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                    >
                        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </motion.span>
                </AnimatePresence>
            </button>
        );
    }

    /////////////////////////////////////////////////////////////////
    // panneau du menu mobile (verre flouté sous la navbar)
    function mobileMenu() {
        return (
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="md:hidden mt-2 flex w-full flex-col gap-1 rounded-3xl bg-elementColor/80 p-2 shadow-lg shadow-primary/15 backdrop-blur-lg origin-top"
                    >
                        {links.map(({ title, dest }) => (
                            <Link
                                key={dest}
                                href={dest}
                                onClick={() => { setActive(dest); setMenuOpen(false); }}
                                className={cn(
                                    "rounded-2xl px-4 py-3 text-base font-medium transition-colors duration-200",
                                    active === dest ? "bg-primary text-background" : "text-primary hover:bg-foreground/10"
                                )}
                            >
                                {title}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }

    /////////////////////////////////////////////////////////////////
    // code principale
    return (
        <header className="fixed inset-x-0 top-4 z-50 flex flex-col items-center px-6 max-md:px-3">
            <nav className="bg-elementColor/70 backdrop-blur-lg shadow-lg shadow-primary/15 flex w-full max-w-6xl items-center justify-between rounded-full p-2">
                {title()}
                {navLinks()}
                {menuButton()}
            </nav>
            {mobileMenu()}
        </header>
    );
};

export default NavBar;
