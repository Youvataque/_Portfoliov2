"use client";

import Image from "next/image";
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Layers } from "lucide-react";
import { SiFlutter, SiLaravel } from "react-icons/si";
import { cn } from "@/lib/utils";

/////////////////////////////////////////////////////////////////
// args d'un badge flottant
interface ChipProps {
    className?: string;
    depth: number;
    pointerX: MotionValue<number>;
    pointerY: MotionValue<number>;
    children: React.ReactNode;
}

/////////////////////////////////////////////////////////////////
// badge en verre décalé en parallaxe selon sa profondeur
// (pas de preserve-3d : Chrome n'y applique pas le backdrop-filter)
const Chip: React.FC<ChipProps> = ({ className, depth, pointerX, pointerY, children }) => {
    const x = useTransform(pointerX, [-0.5, 0.5], [-depth * 0.1, depth * 0.1]);
    const y = useTransform(pointerY, [-0.5, 0.5], [-depth * 0.08, depth * 0.08]);
    return (
        <motion.div
            className={cn("glass absolute z-10 flex items-center gap-2 rounded-2xl px-4 py-2.5 max-md:px-3 max-md:py-2 text-sm max-md:text-xs font-medium text-primary whitespace-nowrap", className)}
            style={{ x, y, boxShadow: "0 4px 14px -6px color-mix(in oklab, var(--color-primary) 18%, transparent)" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 + depth / 400, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};

/////////////////////////////////////////////////////////////////
// photo de profil mise en scène en 3D : plaques de verre + badges flottants, inclinaison au survol
const ProfileScene: React.FC<{ className?: string }> = ({ className }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const spring = { stiffness: 120, damping: 18 };
    const pointerX = useSpring(x, spring);
    const pointerY = useSpring(y, spring);
    const rotateX = useTransform(pointerY, [-0.5, 0.5], [12, -4]);
    const rotateY = useTransform(pointerX, [-0.5, 0.5], [-16, 4]);

    /////////////////////////////////////////////////////////////////
    // position de la souris relative à la scène (-0.5 → 0.5)
    function handleMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    }

    function handleLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <div className={cn("relative [perspective:1200px]", className)} onMouseMove={handleMove} onMouseLeave={handleLeave}>
            <motion.div
                className="relative aspect-square w-full"
                style={{ rotateX, rotateY }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* plaque de verre */}
                <div className="absolute inset-0 rounded-[3rem] bg-elementColor/50 backdrop-blur-lg shadow-xl shadow-primary/10" />
                {/* photo */}
                <div className="absolute inset-[6%] overflow-hidden rounded-[2.4rem] shadow-2xl shadow-secondary/20">
                    <Image fill priority sizes="(max-width: 768px) 240px, 340px" src="/Img/profilPic.webp" alt="Yannis Seguin" className="object-cover" />
                </div>
            </motion.div>

            <Chip depth={110} pointerX={pointerX} pointerY={pointerY} className="top-[58%] -right-[14%] max-md:-right-[8%]">
                <SiFlutter className="h-4 w-4 text-primary" />
                <SiLaravel className="h-4 w-4 text-primary" />
                Flutter & Laravel
            </Chip>
            <Chip depth={150} pointerX={pointerX} pointerY={pointerY} className="top-[8%] -left-[4%] max-md:-left-[3%] flex-col items-start gap-0">
                <span className="text-xs font-normal text-foreground">Aujourd&apos;hui</span>
                <span className="text-base max-md:text-sm font-bold">CTO</span>
            </Chip>
            <Chip depth={80} pointerX={pointerX} pointerY={pointerY} className="-bottom-[4%] -left-[4%] max-md:-left-[3%]">
                <Layers className="h-4 w-4 text-primary" />
                Product Engineer
            </Chip>
        </div>
    );
};

export default ProfileScene;
