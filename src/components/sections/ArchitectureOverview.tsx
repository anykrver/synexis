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
    shortDesc: 'Converts digital activations into calibrated analog voltage pulses.',
    icon: <Radio className="w-5 h-5" />,
    simple: 'The Input Encoder converts digital activations into calibrated analog voltage pulses using DAC stages. This is the first step in the silicon-level pipeline.',
    technical: {
      equation: 'V_{out} = f(D_{in})',
      explanation: 'Implements high-precision DAC with calibrated voltage encoding for crossbar input.',
      details: ['8-bit DAC resolution', 'Calibrated voltage pulses', 'Low-latency signal conditioning']
    }
  },
  {
    step: '02',
    title: 'ReRAM Crossbar Tile',
    shortDesc: 'Stores weights as conductance states and performs in-situ VMM.',
    icon: <Cpu className="w-5 h-5" />,
    simple: 'The ReRAM Crossbar Tile stores weights as conductance states and performs in-situ vector-matrix multiplication. Each synaptic weight uses a 1T1R structure for precise programming and reduced sneak path currents.',
    technical: {
      equation: 'I_j = \\sum (V_i × G_{ij})',
      explanation: 'V_i is input voltage, G_{ij} is memristor conductance, I_j is output current. Weights retained non-volatilely.',
      details: ['1T1R cell structure', 'Non-volatile weight retention', 'Sneak path mitigation', 'CMOS back-end compatible']
    }
  },
  {
    step: '03',
    title: 'Current Sense + ADC',
    shortDesc: 'Digitizes accumulated current outputs from the crossbar bitlines.',
    icon: <Zap className="w-5 h-5" />,
    simple: 'This stage uses transimpedance amplifiers to sense accumulated currents along bitlines, then converts them back to digital outputs via ADCs.',
    technical: {
      equation: '\\sum I_{in} = I_{out} → D_{out}',
      explanation: 'Uses Transimpedance Amplifiers (TIA) and ADCs to convert analog results to digital.',
      details: ['KCL-based analog summation', 'High-bandwidth TIA stages', 'ADC digitization']
    }
  },
  {
    step: '04',
    title: 'Digital Post-Processing',
    shortDesc: 'Applies activation functions, normalization, and control logic.',
    icon: <Activity className="w-5 h-5" />,
    simple: 'The digital post-processing stage applies activation functions, batch normalization, and control logic. Tiles can be composed into larger arrays for scalable architectures.',
    technical: {
      equation: 'y = σ(BN(x))',
      explanation: 'Digital logic handles non-linear operations and inter-tile routing.',
      details: ['Activation function units', 'Batch normalization', 'Tile composition logic', 'Scalable array architecture']
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
          subtitle="System Integration"
          title="Silicon-Level Pipeline"
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

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 md:p-8 rounded-xl border border-[var(--ne-border)] overflow-x-auto"
          style={{ backgroundColor: 'var(--ne-surface)' }}
        >
          <svg width="100%" height="auto" viewBox="0 0 1400 360" xmlns="http://www.w3.org/2000/svg" className="min-w-[800px]">
            <defs>
              <style>{`
                .arch-block { fill: var(--ne-surface); stroke: var(--ne-border); stroke-width: 1.5; rx: 12; }
                .arch-highlight { fill: var(--ne-surface); stroke: var(--ne-accent); stroke-width: 2; rx: 12; }
                .arch-title { font-family: 'Space Grotesk', 'Inter', sans-serif; font-size: 14px; font-weight: 600; fill: var(--ne-text-headline); }
                .arch-subtitle { font-family: 'Inter', sans-serif; font-size: 11px; fill: var(--ne-text-muted); }
                .arch-domain { font-family: 'IBM Plex Mono', monospace; font-size: 10px; fill: var(--ne-text-dim); letter-spacing: 2px; text-transform: uppercase; }
                .arch-arrow { stroke: var(--ne-accent); stroke-width: 1.5; fill: none; stroke-dasharray: 6 6; animation: archFlow 3s linear infinite; }
                .arch-arrow-label { font-family: 'Inter', sans-serif; font-size: 10px; fill: var(--ne-text-dim); }
                .arch-pulse { animation: archPulseGlow 2.5s ease-in-out infinite; }
                @keyframes archFlow {
                  from { stroke-dashoffset: 0; }
                  to { stroke-dashoffset: -24; }
                }
                @keyframes archPulseGlow {
                  0% { stroke: var(--ne-accent); stroke-opacity: 1; }
                  50% { stroke: var(--ne-accent); stroke-opacity: 0.5; }
                  100% { stroke: var(--ne-accent); stroke-opacity: 1; }
                }
              `}</style>
            </defs>

            {/* Title */}
            <text x="700" y="30" textAnchor="middle" className="arch-title" fontSize="16">
              NeuraEdge Mixed-Signal In-Memory Compute Architecture
            </text>

            {/* Domain Labels */}
            <text x="250" y="70" className="arch-domain">DIGITAL</text>
            <text x="630" y="70" className="arch-domain">ANALOG COMPUTE</text>
            <text x="1030" y="70" className="arch-domain">DIGITAL</text>

            {/* Host Block */}
            <rect x="80" y="120" width="170" height="100" className="arch-block" />
            <text x="165" y="157" textAnchor="middle" className="arch-title">HOST</text>
            <text x="165" y="180" textAnchor="middle" className="arch-subtitle">ARM / RISC-V</text>

            {/* Digital Frontend */}
            <rect x="290" y="110" width="190" height="120" className="arch-block" />
            <text x="385" y="148" textAnchor="middle" className="arch-title">DIGITAL FRONTEND</text>
            <text x="385" y="172" textAnchor="middle" className="arch-subtitle">Scheduler</text>
            <text x="385" y="192" textAnchor="middle" className="arch-subtitle">SRAM Buffer</text>

            {/* Input Encoder */}
            <rect x="560" y="110" width="190" height="120" className="arch-block" />
            <text x="655" y="148" textAnchor="middle" className="arch-title">INPUT ENCODER</text>
            <text x="655" y="172" textAnchor="middle" className="arch-subtitle">DAC / Pulse Gen</text>

            {/* ReRAM Crossbar (Highlighted + Pulsing) */}
            <rect x="790" y="100" width="230" height="140" className="arch-highlight arch-pulse" />
            <text x="905" y="145" textAnchor="middle" className="arch-title">ReRAM CROSSBAR</text>
            <text x="905" y="170" textAnchor="middle" className="arch-subtitle">128×128 · 1T1R</text>
            <text x="905" y="190" textAnchor="middle" className="arch-subtitle">Analog VMM</text>

            {/* ADC + Sense */}
            <rect x="1110" y="110" width="190" height="120" className="arch-block" />
            <text x="1205" y="148" textAnchor="middle" className="arch-title">ADC + SENSE</text>
            <text x="1205" y="172" textAnchor="middle" className="arch-subtitle">Column Readout</text>

            {/* Arrows */}
            <line x1="250" y1="170" x2="290" y2="170" className="arch-arrow" />
            <line x1="480" y1="170" x2="560" y2="170" className="arch-arrow" />
            <line x1="750" y1="170" x2="790" y2="170" className="arch-arrow" />
            <line x1="1020" y1="170" x2="1110" y2="170" className="arch-arrow" />

            {/* Arrow Labels */}
            <text x="270" y="158" textAnchor="middle" className="arch-arrow-label">Model Data</text>
            <text x="520" y="158" textAnchor="middle" className="arch-arrow-label">Activations</text>
            <text x="770" y="158" textAnchor="middle" className="arch-arrow-label">Voltages</text>
            <text x="1065" y="158" textAnchor="middle" className="arch-arrow-label">Analog Currents</text>

            {/* Bottom note */}
            <text x="700" y="310" textAnchor="middle" className="arch-domain" fontSize="10">
              TILES CAN BE COMPOSED INTO LARGER ARRAYS FOR SCALABLE ARCHITECTURES
            </text>
          </svg>
        </motion.div>
      </Container>
    </section>
  );
}
