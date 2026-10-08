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
        "glass glass-hover ease-out hover:-translate-y-1",
        "overflow-hidden",
        className
      )}
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accentColor/30 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none" />

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
                className="opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-accentColor/50 backdrop-blur-md hover:bg-accentColor"
              >
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </Link>
            )}
          </div>

          <h2 className="font-sans font-bold text-xl text-primary mb-2">
            {title}
          </h2>
          <p className="font-sans font-medium text-foreground text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      {/* Clickable Overlay */}
      {link && (
        <Link
          href={link}
          className="absolute inset-0 z-20"
          aria-label={`View project ${title}`}
        />
      )}
    </div>
  );
};
