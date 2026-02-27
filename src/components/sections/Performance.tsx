import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { PERFORMANCE_METRICS } from '@/src/lib/constants';
import { Container } from '@/src/components/layout/Container';
import { AnimatedCounter } from '@/src/components/ui/AnimatedCounter';
import { Zap, Timer, Grid3X3, Gauge } from 'lucide-react';

const KEY_METRICS = [
  { value: 900, suffix: '+', label: 'TOPS/W', desc: 'System-level efficiency', icon: Gauge },
  { value: 0.1, suffix: ' pJ', prefix: '~', label: 'Per MAC', desc: 'Energy per operation', decimals: 1, icon: Zap },
  { value: 1, suffix: 'µs', prefix: '<', label: 'Latency', desc: 'End-to-end inference', icon: Timer },
  { value: 128, suffix: '×128', label: 'Array', desc: 'Crossbar dimensions', icon: Grid3X3 },
];

const SIM_CONFIG = [
  { label: 'Process Node', value: '20nm CMOS' },
  { label: 'Array Size', value: '128×128' },
  { label: 'Precision', value: '8-bit equivalent' },
  { label: 'Workload', value: 'Edge inference' },
];

export default function Performance() {
  const [activeMetric, setActiveMetric] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden" id="performance">
      <div className="section-divider mb-24" />

      <Container>
        <SectionTitle
          subtitle="System-Level Simulation Results"
          title="Benchmark Snapshot"
        />

        {/* Key metrics - premium hero cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {KEY_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              onHoverStart={() => setActiveMetric(idx)}
              onHoverEnd={() => setActiveMetric(null)}
              className="relative p-6 md:p-8 rounded-2xl border overflow-hidden cursor-default group"
              style={{
                backgroundColor: 'var(--ne-surface)',
                borderColor: activeMetric === idx ? 'var(--ne-accent)' : 'var(--ne-border)',
                transition: 'border-color 0.4s ease',
              }}
            >
              {/* Background accent glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 120%, rgba(var(--ne-accent-rgb), 0.12), transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                style={{
                  backgroundColor: 'rgba(var(--ne-accent-rgb), 0.08)',
                  color: 'var(--ne-accent)',
                }}
              >
                <metric.icon className="w-5 h-5" />
              </div>

              {/* Value */}
              <AnimatedCounter
                end={metric.value}
                suffix={metric.suffix}
                prefix={metric.prefix || ''}
                decimals={metric.decimals || 0}
                className="text-3xl md:text-4xl font-display font-bold relative z-10"
              />

              {/* Label + Description */}
              <div className="mt-3 relative z-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--ne-text-dim)' }}>
                  {metric.label}
                </div>
                <div className="mt-1 text-xs" style={{ color: 'var(--ne-text-muted)' }}>
                  {metric.desc}
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: 'var(--ne-accent)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Simulation Configuration - chip-like design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border relative overflow-hidden mb-12"
          style={{ backgroundColor: 'var(--ne-surface)', borderColor: 'var(--ne-border)' }}
        >
          <div className="absolute top-0 left-0 w-full h-[2px]"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(var(--ne-accent-rgb), 0.3), transparent)' }}
          />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--ne-accent)' }} />
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--ne-text-dim)' }}>
              Simulation Configuration
            </h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SIM_CONFIG.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>{item.label}</span>
                <span className="text-sm font-semibold" style={{ color: 'var(--ne-text-headline)' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Comparison cards - with visual bar indicators */}
        <div className="grid lg:grid-cols-3 gap-6">
          {PERFORMANCE_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="p-8 rounded-2xl border relative group overflow-hidden"
              style={{ backgroundColor: 'var(--ne-surface)', borderColor: 'var(--ne-border)' }}
            >
              {/* Top accent gradient */}
              <div className="absolute top-0 left-0 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, var(--ne-accent), rgba(var(--ne-accent2-rgb), 0.5))` }}
              />

              <h4 className="font-display text-sm font-semibold uppercase tracking-widest mb-8">{metric.label}</h4>

              <div className="space-y-5">
                {/* NeuraEdge - highlighted */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest font-bold" style={{ color: 'var(--ne-accent)' }}>NeuraEdge</span>
                    <div className="text-right">
                      <span className="text-2xl font-display font-bold" style={{ color: 'var(--ne-accent)' }}>{metric.neuroEdge}</span>
                      <span className="text-[10px] font-mono ml-2" style={{ color: 'var(--ne-text-dim)' }}>{metric.unit}</span>
                    </div>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.1)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: idx * 0.15, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, var(--ne-accent), rgba(var(--ne-accent2-rgb), 0.7))` }}
                    />
                  </div>
                </div>

                <div className="pt-3 space-y-3" style={{ borderTop: '1px solid var(--ne-border)' }}>
                  {/* GPU */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>Modern GPU</span>
                      <span className="text-xs font-mono" style={{ color: 'var(--ne-text-muted)' }}>{metric.gpu}</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.05)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '35%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + idx * 0.15 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: 'var(--ne-text-dim)' }}
                      />
                    </div>
                  </div>

                  {/* CPU */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>Server CPU</span>
                      <span className="text-xs font-mono" style={{ color: 'var(--ne-text-muted)' }}>{metric.cpu}</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.05)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '10%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + idx * 0.15 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: 'var(--ne-text-dim)', opacity: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--ne-border)' }}>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--ne-accent)' }} />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--ne-text-dim)' }}>Simulation-Derived</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts - improved with axis labels and better styling */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 h-72 flex flex-col rounded-2xl border relative overflow-hidden group"
            style={{ backgroundColor: 'var(--ne-surface)', borderColor: 'var(--ne-border)' }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>Power vs Accuracy</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-[var(--ne-border)]" style={{ color: 'var(--ne-text-dim)' }}>Simulated</span>
            </div>
            <div className="flex-1 relative">
              {/* Y-axis label */}
              <span className="absolute -left-1 top-0 text-[8px] font-mono" style={{ color: 'var(--ne-text-dim)' }}>High</span>
              <span className="absolute -left-1 bottom-0 text-[8px] font-mono" style={{ color: 'var(--ne-text-dim)' }}>Low</span>
              {/* X-axis label */}
              <span className="absolute bottom-[-18px] right-0 text-[8px] font-mono" style={{ color: 'var(--ne-text-dim)' }}>Power →</span>

              <div className="ml-6 h-full border-l border-b border-[var(--ne-border)] relative">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[0, 1, 2, 3].map(i => (
                    <div key={i} className="w-full h-[1px]" style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.04)' }} />
                  ))}
                </div>

                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  {/* NeuraEdge curve */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    d="M5,85 Q25,75 45,35 T95,8"
                    fill="none"
                    stroke="var(--ne-accent)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Area fill */}
                  <motion.path
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    d="M5,85 Q25,75 45,35 T95,8 L95,100 L5,100 Z"
                    fill="url(#areaGradient1)"
                  />
                  {/* Digital baseline */}
                  <path d="M5,92 Q40,88 65,65 T95,45" fill="none" stroke="var(--ne-text-dim)" strokeWidth="1" strokeDasharray="4 3" />
                  <defs>
                    <linearGradient id="areaGradient1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--ne-accent)" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="var(--ne-accent)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* NeuraEdge dot */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className="absolute top-[8%] right-[5%] w-3 h-3 rounded-full border-2"
                  style={{ backgroundColor: 'var(--ne-accent)', borderColor: 'var(--ne-surface)' }}
                />

                <span className="absolute bottom-4 right-3 font-mono text-[10px] font-bold" style={{ color: 'var(--ne-accent)' }}>NeuraEdge</span>
                <span className="absolute top-[42%] right-3 font-mono text-[10px]" style={{ color: 'var(--ne-text-dim)' }}>Digital</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 h-72 flex flex-col rounded-2xl border relative overflow-hidden group"
            style={{ backgroundColor: 'var(--ne-surface)', borderColor: 'var(--ne-border)' }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>Latency vs Model Size</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-[var(--ne-border)]" style={{ color: 'var(--ne-text-dim)' }}>Projected</span>
            </div>
            <div className="flex-1 relative">
              <span className="absolute -left-1 top-0 text-[8px] font-mono" style={{ color: 'var(--ne-text-dim)' }}>High</span>
              <span className="absolute -left-1 bottom-0 text-[8px] font-mono" style={{ color: 'var(--ne-text-dim)' }}>Low</span>
              <span className="absolute bottom-[-18px] right-0 text-[8px] font-mono" style={{ color: 'var(--ne-text-dim)' }}>Params →</span>

              <div className="ml-6 h-full border-l border-b border-[var(--ne-border)] relative">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[0, 1, 2, 3].map(i => (
                    <div key={i} className="w-full h-[1px]" style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.04)' }} />
                  ))}
                </div>

                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    d="M5,75 L95,75"
                    fill="none"
                    stroke="var(--ne-accent)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <motion.path
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    d="M5,75 L95,75 L95,100 L5,100 Z"
                    fill="url(#areaGradient2)"
                  />
                  <path d="M5,88 L95,10" fill="none" stroke="var(--ne-text-dim)" strokeWidth="1" strokeDasharray="4 3" />
                  <defs>
                    <linearGradient id="areaGradient2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--ne-accent)" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="var(--ne-accent)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                <span className="absolute bottom-[28%] right-3 font-mono text-[10px] font-bold" style={{ color: 'var(--ne-accent)' }}>O(1)</span>
                <span className="absolute top-[10%] right-3 font-mono text-[10px]" style={{ color: 'var(--ne-text-dim)' }}>O(N²)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-center text-xs font-light italic" style={{ color: 'var(--ne-text-dim)' }}>
          All metrics derived from SPICE-level and architectural simulation models. Not yet validated on physical hardware.
        </p>
      </Container>
    </section>
  );
}
