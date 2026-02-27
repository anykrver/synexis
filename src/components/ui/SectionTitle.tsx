import { motion } from 'motion/react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({ subtitle, title, className = '', align = 'left' }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="w-8 h-[2px] bg-[var(--ne-accent)]" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ne-accent)]">
          {subtitle}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>
    </motion.div>
  );
}
