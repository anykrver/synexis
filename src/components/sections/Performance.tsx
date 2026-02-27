import { motion } from 'motion/react';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { PERFORMANCE_METRICS } from '@/src/lib/constants';
import { Container } from '@/src/components/layout/Container';
import { AnimatedCounter } from '@/src/components/ui/AnimatedCounter';

const KEY_METRICS = [
  { value: 900, suffix: '+', label: 'TOPS/W', desc: 'System-level efficiency' },
  { value: 0.1, suffix: ' pJ', prefix: '~', label: 'Per MAC', desc: 'Energy per operation', decimals: 1 },
  { value: 1, suffix: 'µs', prefix: '<', label: 'Latency', desc: 'End-to-end inference' },
  { value: 128, suffix: '×128', label: 'Array', desc: 'Crossbar dimensions' },
];

const SIM_CONFIG = [
  { label: 'Process Node', value: '20nm CMOS' },
  { label: 'Array Size', value: '128×128' },
  { label: 'Precision', value: '8-bit equivalent (quantized)' },
  { label: 'Workload', value: 'Edge inference' },
];

export default function Performance() {
  return (
    <section className="py-24 relative overflow-hidden" id="performance">
      <div className="section-divider mb-24" />

      <Container>
        <SectionTitle
          subtitle="System-Level Simulation Results"
          title="Benchmark Snapshot"
        />

        {/* Key metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {KEY_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl border border-[var(--ne-border)] text-center"
              style={{ backgroundColor: 'var(--ne-surface)' }}
            >
              <AnimatedCounter
                end={metric.value}
                suffix={metric.suffix}
                prefix={metric.prefix || ''}
                decimals={metric.decimals || 0}
                className="text-3xl md:text-4xl font-display font-bold"

              />
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--ne-text-dim)' }}>
                {metric.label}
              </div>
              <div className="mt-1 text-xs" style={{ color: 'var(--ne-text-muted)' }}>
                {metric.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simulation Configuration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl border border-[var(--ne-border)] mb-12"
          style={{ backgroundColor: 'var(--ne-surface)' }}
        >
          <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--ne-text-dim)' }}>Simulation Configuration</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SIM_CONFIG.map((item, idx) => (
              <div key={idx}>
                <span className="text-[10px] font-mono uppercase tracking-widest block mb-1" style={{ color: 'var(--ne-text-dim)' }}>{item.label}</span>
                <span className="text-sm font-semibold" style={{ color: 'var(--ne-text-headline)' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Comparison cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {PERFORMANCE_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-xl border border-[var(--ne-border)] relative group overflow-hidden"
              style={{ backgroundColor: 'var(--ne-surface)' }}
            >
              <div className="absolute top-0 left-0 w-1 h-full transition-colors duration-300"
                style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.2)' }}
              />
              <div className="absolute top-0 left-0 w-1 h-full scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"
                style={{ backgroundColor: 'var(--ne-accent)' }}
              />

              <h4 className="font-display text-sm font-semibold uppercase tracking-widest mb-8">{metric.label}</h4>

              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>NeuraEdge</span>
                  <div className="text-right">
                    <span className="text-2xl font-display font-bold" style={{ color: 'var(--ne-accent)' }}>{metric.neuroEdge}</span>
                    <span className="text-[10px] font-mono ml-2" style={{ color: 'var(--ne-text-dim)' }}>{metric.unit}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-[var(--ne-border)]">
                  <div className="flex justify-between items-center opacity-50">
                    <span className="text-[10px] font-mono uppercase tracking-widest">Modern GPU</span>
                    <span className="text-sm font-mono">{metric.gpu}</span>
                  </div>
                  <div className="flex justify-between items-center opacity-25">
                    <span className="text-[10px] font-mono uppercase tracking-widest">Server CPU</span>
                    <span className="text-sm font-mono">{metric.cpu}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--ne-border)]">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--ne-accent)' }} />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--ne-text-dim)' }}>Simulation-Derived</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SVG Charts */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 h-64 flex flex-col rounded-xl border border-[var(--ne-border)]"
            style={{ backgroundColor: 'var(--ne-surface)' }}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest mb-6" style={{ color: 'var(--ne-text-dim)' }}>Power vs Accuracy</span>
            <div className="flex-1 border-l border-b border-[var(--ne-border)] relative">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M0,90 Q40,80 60,40 T100,10"
                  fill="none"
                  stroke="var(--ne-accent)"
                  strokeWidth="2"
                />
                <path d="M0,95 Q50,90 80,70 T100,50" fill="none" stroke="var(--ne-text-dim)" strokeWidth="1" strokeDasharray="4" />
              </svg>
              <span className="absolute bottom-2 right-2 font-mono text-[10px]" style={{ color: 'var(--ne-accent)' }}>NeuraEdge</span>
              <span className="absolute top-1/2 right-2 font-mono text-[10px]" style={{ color: 'var(--ne-text-dim)' }}>Digital</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 h-64 flex flex-col rounded-xl border border-[var(--ne-border)]"
            style={{ backgroundColor: 'var(--ne-surface)' }}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest mb-6" style={{ color: 'var(--ne-text-dim)' }}>Latency vs Model Size</span>
            <div className="flex-1 border-l border-b border-[var(--ne-border)] relative">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M0,80 L100,80"
                  fill="none"
                  stroke="var(--ne-accent)"
                  strokeWidth="2"
                />
                <path d="M0,90 L100,10" fill="none" stroke="var(--ne-text-dim)" strokeWidth="1" strokeDasharray="4" />
              </svg>
              <span className="absolute bottom-6 right-2 font-mono text-[10px]" style={{ color: 'var(--ne-accent)' }}>O(1) Scaling</span>
              <span className="absolute top-4 right-2 font-mono text-[10px]" style={{ color: 'var(--ne-text-dim)' }}>O(N²) Scaling</span>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs font-light italic" style={{ color: 'var(--ne-text-dim)' }}>
          All metrics derived from SPICE-level and architectural simulation models.
        </p>
      </Container>
    </section>
  );
}
