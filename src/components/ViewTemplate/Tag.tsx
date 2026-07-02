import { cn } from "@/lib/utils";

/////////////////////////////////////////////////////////////////
// couleurs de tag (classes complètes = compatibles Tailwind JIT)
export const tagColors = {
  secondary: "border-secondary/30 bg-secondary/10 text-secondary",
  amber: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  blue: "border-blue-400/30 bg-blue-400/10 text-blue-300",
  emerald: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  purple: "border-purple-400/30 bg-purple-400/10 text-purple-300",
  green: "border-green-400/30 bg-green-400/10 text-green-300",
  red: "border-red-400/30 bg-red-400/10 text-red-300",
  orange: "border-orange-400/30 bg-orange-400/10 text-orange-300",
  yellow: "border-yellow-400/30 bg-yellow-400/10 text-yellow-300",
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
      "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium tracking-wide whitespace-nowrap backdrop-blur-sm",
      tagColors[color],
      className
    )}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
    {children}
  </span>
);

export default Tag;
