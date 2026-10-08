import { cn } from "@/lib/utils";

/////////////////////////////////////////////////////////////////
// couleurs de tag (classes complètes = compatibles Tailwind JIT)
export const tagColors = {
  secondary: "bg-accentColor/40 text-secondary",
  amber: "bg-amber-400/15 text-amber-700",
  blue: "bg-accentColor/40 text-secondary",
  emerald: "bg-emerald-400/15 text-emerald-700",
  purple: "bg-purple-400/15 text-purple-700",
  green: "bg-green-400/15 text-green-700",
  red: "bg-red-400/15 text-red-700",
  orange: "bg-orange-400/15 text-orange-700",
  yellow: "bg-yellow-400/15 text-yellow-700",
} as const;

export type TagColor = keyof typeof tagColors;

/////////////////////////////////////////////////////////////////
// tag moderne unifié (pilule teintée + point de statut)
const Tag: React.FC<{ color?: TagColor; className?: string; children: React.ReactNode }> = ({
  color = "secondary",
  className,
  children,
}) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium tracking-wide whitespace-nowrap backdrop-blur-md",
      tagColors[color],
      className
    )}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
    {children}
  </span>
);

export default Tag;
