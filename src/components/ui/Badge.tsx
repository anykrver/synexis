import { cn } from '@/src/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 text-xs font-mono tracking-wide rounded-full border transition-colors",
      "bg-[rgba(var(--ne-accent-rgb),0.1)] text-[var(--ne-accent)] border-[rgba(var(--ne-accent-rgb),0.2)]",
      className
    )}>
      {children}
    </span>
  );
}
