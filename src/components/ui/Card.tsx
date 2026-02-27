import { cn } from '@/src/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      "rounded-xl border border-[var(--ne-border)] p-6 transition-all duration-300",
      className
    )}
      style={{ backgroundColor: 'var(--ne-surface)' }}
    >
      {children}
    </div>
  );
}
