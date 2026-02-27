import * as React from "react";
import { cn } from "@/src/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary:
        "bg-[var(--ne-accent)] text-[var(--ne-bg)] font-semibold hover:brightness-110 accent-glow-box magnetic-hover",
      secondary:
        "bg-[var(--ne-surface)] text-[var(--ne-text-headline)] border border-[var(--ne-border)] hover:bg-[var(--ne-surface-hover)] magnetic-hover",
      outline:
        "border border-[var(--ne-border-accent)] text-[var(--ne-text-headline)] hover:bg-[rgba(var(--ne-accent-rgb),0.08)] magnetic-hover",
      ghost:
        "text-[var(--ne-text-muted)] hover:text-[var(--ne-text-headline)] transition-colors",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs rounded-md",
      md: "px-6 py-3 text-sm rounded-lg",
      lg: "px-8 py-4 text-base rounded-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "font-sans inline-flex items-center justify-center transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus-ring",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
