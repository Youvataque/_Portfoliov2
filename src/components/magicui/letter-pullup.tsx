"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
}

export default function LetterPullup({
  className,
  words,
  delay,
}: LetterPullupProps) {
  const letters = words.split("");
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [inView, controls]);

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * (delay ? delay : 0.05),
      },
    }),
  };

  return (
    <div ref={ref} className="flex justify-center">
      {letters.map((letter, i) => (
        <motion.h2
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate={controls}
          custom={i}
          className={cn(
            "font-display text-center text-3.5xl font-bold max-xl:text-xl max-md:text-lg tracking-[-0.02em]",
            className,
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h2>
      ))}
    </div>
  );
}
