import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid lg:auto-rows-[22rem] grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 group/bento relative rounded-3xl justify-between flex flex-col space-y-0 h-full",
        "bg-white/5 dark:bg-black/20 backdrop-blur-md border border-white/10",
        "hover:bg-white/10 hover:border-white/20 transition-all duration-300 ease-out",
        "overflow-hidden shadow-2xl shadow-black/20",
        className
      )}
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header / Media - Goes Edge to Edge - Proportional Height on Desktop, Fixed on Mobile */}
      <div className="w-full h-32 lg:h-[60%] transition-transform duration-300 group-hover/bento:scale-[1.02]">
        {header}
      </div>

      {/* Content - Has Padding */}
      <div className="p-6 flex flex-col justify-between flex-grow z-10 group-hover/bento:translate-x-1 transition duration-200">
        <div>
          <div className="flex items-center justify-between mb-3">
            {icon}
            {link && (
              <Link
                href={link}
                target="_blank"
                className="opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>
            )}
          </div>

          <h2 className="font-sans font-bold text-xl text-white mb-2">
            {title}
          </h2>
          <p className="font-sans font-medium text-neutral-300 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      {/* Clickable Overlay */}
      {link && (
        <Link
          href={link}
          target="_blank"
          className="absolute inset-0 z-20"
          aria-label={`View project ${title}`}
        />
      )}
    </div>
  );
};
