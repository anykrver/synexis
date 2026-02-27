import { motion } from 'motion/react';
import { Cpu, MemoryStick, ZapOff, AlertTriangle } from 'lucide-react';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { Container } from '@/src/components/layout/Container';

export default function Problem() {
  return (
    <section className="py-24 relative overflow-hidden" id="problem">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle
              subtitle="The Problem"
              title="The Memory Wall Limits Edge Intelligence"
            />
            <div className="space-y-8 font-light">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--ne-text)' }}>
                Modern AI accelerators are fundamentally constrained by data movement. In conventional architectures, the separation between compute and memory creates an insurmountable bottleneck.
              </p>

              <div className="space-y-6">
                <div className="flex gap-6 group">
                  <div className="p-3 lab-panel rounded-sm h-fit transition-colors" style={{ borderColor: 'rgba(var(--ne-accent-rgb), 0.2)' }}>
                    <ZapOff className="w-5 h-5" style={{ color: 'var(--ne-accent)' }} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1" style={{ color: 'var(--ne-text-headline)' }}>Energy Dominated by Memory Access</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ne-text-muted)' }}>
                      Weights reside in memory. Compute occurs in separate logic units. Energy and latency are dominated by data movement — not arithmetic.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="p-3 lab-panel rounded-sm h-fit transition-colors" style={{ borderColor: 'rgba(var(--ne-accent-rgb), 0.2)' }}>
                    <MemoryStick className="w-5 h-5" style={{ color: 'var(--ne-accent)' }} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1" style={{ color: 'var(--ne-text-headline)' }}>Data Movement is the Bottleneck</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ne-text-muted)' }}>
                      As models scale, data movement — not arithmetic — becomes the bottleneck. Edge systems cannot afford this overhead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lab-panel p-10 rounded-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[2px]"
              style={{ background: 'linear-gradient(to right, transparent, rgba(var(--ne-accent-rgb), 0.3), transparent)' }}
            />

            <div className="flex items-center justify-between mb-12">
              <div className="text-center">
                <div className="w-20 h-20 border flex items-center justify-center mb-3 rounded-sm"
                  style={{ borderColor: 'var(--ne-border)', backgroundColor: 'rgba(var(--ne-accent-rgb), 0.03)' }}
                >
                  <Cpu className="w-8 h-8" style={{ color: 'var(--ne-text-muted)' }} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>Processor</span>
              </div>

              <div className="flex-1 flex flex-col items-center relative px-6">
                <div className="w-full h-[1px] relative" style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.2)' }}>
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full blur-[4px]"
                    style={{ backgroundColor: 'var(--ne-accent)' }}
                    animate={{ left: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                    <AlertTriangle className="w-4 h-4 animate-pulse" style={{ color: 'var(--ne-accent)' }} />
                    <span className="font-mono text-[8px] uppercase tracking-widest" style={{ color: 'var(--ne-accent)' }}>Data Bottleneck</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 border flex items-center justify-center mb-3 rounded-sm"
                  style={{ borderColor: 'var(--ne-border)', backgroundColor: 'rgba(var(--ne-accent-rgb), 0.03)' }}
                >
                  <MemoryStick className="w-8 h-8" style={{ color: 'var(--ne-text-muted)' }} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>Memory</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8" style={{ borderTop: '1px solid var(--ne-border)' }}>
              <div className="p-4 rounded-sm" style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.03)' }}>
                <div className="text-xs font-mono mb-1 uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>Compute</div>
                <div className="text-xl font-display font-bold" style={{ color: 'var(--ne-text-headline)' }}>~1 pJ</div>
              </div>
              <div className="p-4 rounded-sm border" style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.05)', borderColor: 'var(--ne-border-accent)' }}>
                <div className="text-xs font-mono mb-1 uppercase tracking-widest" style={{ color: 'var(--ne-accent)' }}>Transfer</div>
                <div className="text-xl font-display font-bold" style={{ color: 'var(--ne-accent)' }}>~100 pJ</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em]" style={{ color: 'var(--ne-text-dim)' }}>
                99% of Energy is Wasted on Data Movement
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
