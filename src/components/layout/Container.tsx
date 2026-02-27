import { cn } from "@/src/lib/utils";

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("max-w-7xl mx-auto w-full px-6", className)}>
      {children}
    </div>
  );
}
