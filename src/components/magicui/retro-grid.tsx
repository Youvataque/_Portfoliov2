import { cn } from "@/lib/utils";

function RetroGridBase({ className }: { className?: string }) {
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
            "[background-color:#11131F]",
            "[background-image:linear-gradient(to_right,#9EB1FF_1px,transparent_0),linear-gradient(to_bottom,#9EB1FF_0.5px,transparent_0)]"
          )}
        />
      </div>
    </div>
  );
}

export default function RetroGrid({ className }: { className?: string }) {
  return (
    <div className={cn("fixed inset-0 w-full h-full", className)}>
      <RetroGridBase className="absolute inset-0" />
      <div className="absolute inset-0 w-screen h-1/5 bg-[#11131F]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#11131F] via-[#11131F]/90 to-transparent pointer-events-none" />
    </div>
  );
}
