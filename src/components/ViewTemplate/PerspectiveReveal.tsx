"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/////////////////////////////////////////////////////////////////
// fait basculer le contenu depuis un plan incliné à l'entrée dans l'écran
const PerspectiveReveal: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
    <div className={cn("w-full [perspective:1400px]", className)}>
        <motion.div
            className="origin-top"
            initial={{ opacity: 0, rotateX: 24, y: 80 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    </div>
);

export default PerspectiveReveal;
