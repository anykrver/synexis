import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Zap, Cpu, Activity, Radio } from 'lucide-react';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { Container } from '@/src/components/layout/Container';
import { cn } from '@/src/lib/utils';

interface BlockContent {
  step: string;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  simple: string;
  technical: {
    equation: string;
    explanation: string;
    details: string[];
  };
}

const ARCHITECTURE_BLOCKS: BlockContent[] = [
  {
    step: '01',
    title: 'Input Encoder',
    shortDesc: 'Converts digital activations to analog voltage pulses.',
    icon: <Radio className="w-5 h-5" />,
    simple: 'The Input Encoder takes digital data (like pixels or features) and converts them into analog voltage levels or timed spikes that the ReRAM array can understand.',
    technical: {
      equation: 'V_{out} = f(D_{in})',
      explanation: 'Implements high-precision DAC or temporal encoding schemes.',
      details: ['8-bit DAC resolution', 'Rate or Temporal encoding', 'Low-latency signal conditioning']
    }
  },
  {
    step: '02',
    title: 'ReRAM Crossbar',
    shortDesc: 'Dense array of memristors storing synaptic weights.',
    icon: <Cpu className="w-5 h-5" />,
    simple: 'The ReRAM Crossbar performs analog matrix multiplication directly in hardware. Each cell stores a conductance value (weight). Input voltages are applied across word lines, and output current equals the weighted sum.',
    technical: {
      equation: 'I_j = \\sum (V_i × G_{ij})',
      explanation: 'V_i is input voltage, G_{ij} is memristor conductance, I_j is output current.',
      details: ['Analog VMM (Vector-Matrix Mult)', 'Non-volatile weight storage', 'Zero-leakage compute-in-memory']
    }
  },
  {
    step: '03',
    title: 'Current Accumulator',
    shortDesc: 'Integrates analog currents along the bitlines.',
    icon: <Zap className="w-5 h-5" />,
    simple: 'This stage collects the tiny currents flowing from each memristor. It uses Kirchhoff\'s Current Law (KCL) to sum them up instantly without needing digital adders.',
    technical: {
      equation: '\\sum I_{in} = I_{out}',
      explanation: 'Uses Transimpedance Amplifiers (TIA) to convert current to voltage.',
      details: ['KCL-based analog summation', 'High-bandwidth TIA stages', 'Noise-filtering integration']
    }
  },
  {
    step: '04',
    title: 'Spike Generator',
    shortDesc: 'Fires digital spikes when threshold is reached.',
    icon: <Activity className="w-5 h-5" />,
    simple: 'Mimics biological neurons. It integrates the accumulated current over time and fires a digital spike once it hits a specific threshold, passing the signal to the next layer.',
    technical: {
      equation: 'τ_m dv/dt = -(v - v_rest) + R·I(t)',
      explanation: 'Leaky Integrate-and-Fire (LIF) neuron model implementation.',
      details: ['Programmable firing thresholds', 'Leaky integration dynamics', 'Asynchronous spike output']
    }
  }
];

export default function ArchitectureOverview() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [mode, setMode] = useState<'simple' | 'technical'>('simple');

  return (
    <section className="py-24 relative overflow-hidden" id="architecture" style={{ borderTop: '1px solid var(--ne-border)' }}>
      <Container>
        <SectionTitle
          subtitle="System Architecture"
          title="Silicon-Level Integration"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARCHITECTURE_BLOCKS.map((block, idx) => {
            const isExpanded = expandedIdx === idx;
            const isDimmed = expandedIdx !== null && expandedIdx !== idx;

            return (
              <motion.div
                key={idx}
                layout
                initial={false}
                animate={{
                  opacity: isDimmed ? 0.4 : 1,
                  scale: isExpanded ? 1.02 : 1,
                }}
                className={cn(
                  "p-8 rounded-xl cursor-pointer transition-all duration-500 relative overflow-hidden group border",
                  isExpanded
                    ? "lg:col-span-2 accent-glow-box"
                    : "hover:-translate-y-1",
                )}
                style={{
                  backgroundColor: isExpanded ? 'var(--ne-surface)' : 'var(--ne-glass)',
                  borderColor: isExpanded ? 'var(--ne-accent)' : 'var(--ne-border)',
                }}
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
              >
                {/* Shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(var(--ne-accent-rgb), 0.04), transparent)' }}
                />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <span className="font-mono text-5xl font-bold" style={{ color: 'var(--ne-border)' }}>{block.step}</span>
                  <div className={cn(
                    "p-3 rounded-xl transition-all duration-500",
                  )}
                    style={{
                      backgroundColor: isExpanded ? 'rgba(var(--ne-accent-rgb), 0.15)' : 'rgba(var(--ne-accent-rgb), 0.05)',
                      color: isExpanded ? 'var(--ne-accent)' : 'var(--ne-text-muted)',
                    }}
                  >
                    {block.icon}
                  </div>
                </div>

                <h4 className="font-display text-lg font-semibold mb-2 uppercase tracking-widest flex items-center gap-3 relative z-10">
                  {block.title}
                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-4 h-4 opacity-30" />
                  </motion.div>
                </h4>

                <p className="text-sm font-light mb-6 relative z-10 leading-relaxed" style={{ color: 'var(--ne-text-muted)' }}>
                  {block.shortDesc}
                </p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      className="relative z-10"
                    >
                      <div className="pt-6" style={{ borderTop: '1px solid var(--ne-border)' }}>
                        {/* Mode Toggle */}
                        <div className="flex gap-2 mb-8 p-1 rounded-full w-fit" style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.05)' }}>
                          {(['simple', 'technical'] as const).map((m) => (
                            <button
                              key={m}
                              onClick={(e) => { e.stopPropagation(); setMode(m); }}
                              className={cn(
                                "px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest rounded-full transition-all duration-300",
                                mode === m
                                  ? "font-bold"
                                  : "hover:opacity-80"
                              )}
                              style={{
                                backgroundColor: mode === m ? 'var(--ne-accent)' : 'transparent',
                                color: mode === m ? 'var(--ne-bg)' : 'var(--ne-text-muted)',
                              }}
                            >
                              {m}
                            </button>
                          ))}
                        </div>

                        {mode === 'simple' ? (
                          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                            <p className="text-base leading-relaxed italic pl-6 py-2" style={{ color: 'var(--ne-text)', borderLeft: '2px solid var(--ne-accent)' }}>
                              "{block.simple}"
                            </p>
                          </motion.div>
                        ) : (
                          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                            <div className="p-6 rounded-xl font-mono text-center border border-[var(--ne-border)]"
                              style={{ backgroundColor: 'var(--ne-bg)' }}
                            >
                              <span className="text-xl" style={{ color: 'var(--ne-accent)' }}>
                                {block.technical.equation}
                              </span>
                            </div>
                            <div className="space-y-4">
                              <p className="text-[10px] uppercase tracking-[0.3em] font-bold" style={{ color: 'var(--ne-text-muted)' }}>Specifications</p>
                              <ul className="grid grid-cols-1 gap-3">
                                {block.technical.details.map((detail, dIdx) => (
                                  <li key={dIdx} className="text-xs flex items-center gap-3" style={{ color: 'var(--ne-text-muted)' }}>
                                    <div className="w-1.5 h-[1px]" style={{ backgroundColor: 'var(--ne-accent)' }} />
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <p className="text-xs leading-relaxed font-light" style={{ color: 'var(--ne-text-muted)' }}>
                              {block.technical.explanation}
                            </p>
                          </motion.div>
                        )}

                        <div className="mt-10 p-6 rounded-xl border border-[var(--ne-border)] flex flex-col items-center justify-center min-h-[120px]"
                          style={{ backgroundColor: 'var(--ne-bg)' }}
                        >
                          <div className="text-[10px] font-mono uppercase tracking-[0.4em] animate-pulse" style={{ color: 'var(--ne-accent)', opacity: 0.6 }}>
                            Active Simulation Mode
                          </div>
                          <div className="mt-4 flex gap-1">
                            {Array.from({ length: 12 }).map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{
                                  height: [4, Math.random() * 20 + 10, 4],
                                  opacity: [0.2, 1, 0.2]
                                }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                                className="w-[2px] rounded-full"
                                style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.3)' }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isExpanded && (
                  <div className="mt-6 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] transition-colors"
                    style={{ color: 'var(--ne-text-dim)' }}
                  >
                    <div className="w-1 h-1 rounded-full bg-current" />
                    Deep Dive →
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Block Diagram */}
        <div className="mt-12 p-8 flex flex-col items-center justify-center min-h-[200px] rounded-xl border border-dashed border-[var(--ne-border)]"
          style={{ backgroundColor: 'var(--ne-surface)' }}
        >
          <div className="flex items-center gap-4 md:gap-8 text-xs font-mono flex-wrap justify-center" style={{ color: 'var(--ne-text-muted)' }}>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg border border-[var(--ne-border)] flex items-center justify-center">DAC</div>
              <span className="text-[10px]" style={{ color: 'var(--ne-text-dim)' }}>INPUT</span>
            </div>
            <div style={{ color: 'var(--ne-accent)' }} className="animate-pulse">→</div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-12 rounded-lg flex items-center justify-center"
                style={{ border: '1px solid var(--ne-accent)', backgroundColor: 'rgba(var(--ne-accent-rgb), 0.05)' }}
              >CROSSBAR</div>
              <span className="text-[10px]" style={{ color: 'var(--ne-text-dim)' }}>COMPUTE</span>
            </div>
            <div style={{ color: 'var(--ne-accent)' }} className="animate-pulse">→</div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg border border-[var(--ne-border)] flex items-center justify-center">TIA</div>
              <span className="text-[10px]" style={{ color: 'var(--ne-text-dim)' }}>SENSE</span>
            </div>
            <div style={{ color: 'var(--ne-accent)' }} className="animate-pulse">→</div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg border border-[var(--ne-border)] flex items-center justify-center">LIF</div>
              <span className="text-[10px]" style={{ color: 'var(--ne-text-dim)' }}>SPIKE</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
