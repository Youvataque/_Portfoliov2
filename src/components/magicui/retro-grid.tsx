"use client";

import { cn } from "@/lib/utils";

function RetroGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute h-full w-full overflow-hidden opacity-100 [perspective:80px]",
        className
      )}
    >
      <div className="absolute inset-0 [transform:rotateX(35deg)]">
        <div
          className={cn(
            "animate-grid",
            "[background-repeat:repeat]",
            "[background-size:30px_30px]",
            "[height:300vh]",
            "[width:600vw]",
            "[margin-left:-135%]",
            "[background-color:var(--background)]",
            "[background-image:linear-gradient(to_right,var(--secondary)_1px,transparent_0),linear-gradient(to_bottom,var(--secondary)_0.5px,transparent_0)]"
          )}
        />
      </div>
    </div>
  );
}

interface RetroGridFadeProps {
  className?: string;
}

export default function RetroGridFade({ className }: RetroGridFadeProps) {
  return (
    <div className={cn("fixed inset-0 w-full h-full", className)}>
      <RetroGrid className="absolute inset-0" />
      <div className="absolute inset-0 w-screen h-1/5 bg-background"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-transparent pointer-events-none" />
    </div>
  );
}
