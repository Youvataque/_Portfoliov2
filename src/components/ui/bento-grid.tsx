import { cn } from "@/lib/utils";

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
        "grid lg:auto-rows-[18rem] grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ",
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
    <a
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white justify-between flex flex-col space-y-4 border border-solid border-primary group hover:border-secondary",
        className
      )}
      href={link}
      target="_blank"
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <h2 className="font-sans font-bold text-primary group-hover:text-secondary mb-2 mt-2">
          {title}
        </h2>
        <p className="font-sans font-normal text-primary group-hover:text-secondary text-xs line-clamp-3">
          {description}
        </p>
      </div>
    </a>
  );
};

