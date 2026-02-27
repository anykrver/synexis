import { motion } from 'motion/react';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { Container } from '@/src/components/layout/Container';
import { ROADMAP_PHASES } from '@/src/lib/constants';
import { CheckCircle2 } from 'lucide-react';

export default function Roadmap() {
  return (
    <section className="py-24 relative overflow-hidden" id="roadmap">
      <Container>
        <SectionTitle
          subtitle="Roadmap"
          title="Path to Silicon"
        />

        {/* Desktop: Vertical alternating timeline */}
        <div className="hidden md:block relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full origin-top"
              style={{
                background: `linear-gradient(180deg, var(--ne-accent), rgba(var(--ne-accent2-rgb), 0.5), transparent)`,
              }}
            />
          </div>

          <div className="space-y-0">
            {ROADMAP_PHASES.map((phase, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className={`relative flex items-center ${isLeft ? 'justify-end' : 'justify-start'} py-8`}
                >
                  {/* Center node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-xs relative transition-all
                      ${phase.status === 'completed'
                        ? 'border border-[var(--ne-border)]'
                        : phase.status === 'current'
                          ? 'border-2 accent-glow-box'
                          : 'border border-[var(--ne-border)]'
                      }`}
                      style={{
                        backgroundColor: phase.status === 'current'
                          ? 'rgba(var(--ne-accent-rgb), 0.1)'
                          : 'var(--ne-surface)',
                        color: phase.status === 'current' ? 'var(--ne-accent)' : 'var(--ne-text-muted)',
                        borderColor: phase.status === 'current' ? 'var(--ne-accent)' : undefined,
                      }}
                    >
                      {phase.year}
                      {phase.status === 'completed' && (
                        <CheckCircle2 className="absolute -top-1.5 -right-1.5 w-4 h-4" style={{ color: 'var(--ne-accent)' }} />
                      )}
                      {phase.status === 'current' && (
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                          style={{ backgroundColor: 'var(--ne-accent)' }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`w-[calc(50%-3rem)] p-6 rounded-xl border border-[var(--ne-border)] group hover:border-[var(--ne-border-accent)] transition-all ${isLeft ? 'mr-auto text-right' : 'ml-auto text-left'}`}
                    style={{ backgroundColor: 'var(--ne-surface)' }}
                  >
                    <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                      <span className={`text-[10px] font-mono uppercase tracking-[0.2em] ${phase.status === 'completed' ? '' : phase.status === 'current' ? '' : ''
                        }`}
                        style={{
                          color: phase.status === 'current' ? 'var(--ne-accent)' : 'var(--ne-text-dim)',
                        }}
                      >
                        {phase.status}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-semibold mb-2">{phase.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ne-text-muted)' }}>{phase.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Horizontal-scrolling cards */}
        <div className="md:hidden relative">
          <div className="absolute top-8 left-0 w-full h-[2px]"
            style={{ background: `linear-gradient(90deg, var(--ne-accent), rgba(var(--ne-accent2-rgb), 0.3), transparent)` }}
          />

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none -mx-6 px-6">
            {ROADMAP_PHASES.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex-shrink-0 w-[280px] snap-center"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-xs mb-6 relative`}
                  style={{
                    backgroundColor: phase.status === 'current' ? 'rgba(var(--ne-accent-rgb), 0.1)' : 'var(--ne-surface)',
                    color: phase.status === 'current' ? 'var(--ne-accent)' : 'var(--ne-text-muted)',
                    border: `1px solid ${phase.status === 'current' ? 'var(--ne-accent)' : 'var(--ne-border)'}`,
                  }}
                >
                  {phase.year}
                  {phase.status === 'completed' && (
                    <CheckCircle2 className="absolute -top-1.5 -right-1.5 w-4 h-4" style={{ color: 'var(--ne-accent)' }} />
                  )}
                </div>

                <h4 className="font-display text-lg font-semibold mb-2">{phase.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ne-text-muted)' }}>{phase.desc}</p>

                <span className="inline-block mt-4 text-[10px] font-mono uppercase tracking-[0.2em]"
                  style={{ color: phase.status === 'current' ? 'var(--ne-accent)' : 'var(--ne-text-dim)' }}
                >
                  {phase.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
