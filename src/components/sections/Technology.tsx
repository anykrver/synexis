import { motion } from 'motion/react';
import { Grid3X3, Zap, Brain, Leaf } from 'lucide-react';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { Container } from '@/src/components/layout/Container';
import { TECHNOLOGY_CARDS } from '@/src/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
    grid: <Grid3X3 className="w-6 h-6" />,
    zap: <Zap className="w-6 h-6" />,
    brain: <Brain className="w-6 h-6" />,
    leaf: <Leaf className="w-6 h-6" />,
};

export default function Technology() {
    return (
        <section className="py-24 relative overflow-hidden" id="technology">
            <Container>
                <SectionTitle
                    subtitle="Our Approach"
                    title="In-Memory Analog Compute"
                />

                <p className="text-lg font-light leading-relaxed max-w-3xl mb-12" style={{ color: 'var(--ne-text-muted)' }}>
                    NeuraEdge integrates compute directly within resistive memory arrays.
                    Weights are stored as analog conductance values inside 1T1R ReRAM cells.
                    Input activations are applied as voltage pulses. Ohm's and Kirchhoff's laws
                    perform parallel current summation — executing matrix-vector multiplication
                    in a single analog step.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {TECHNOLOGY_CARDS.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative p-8 rounded-xl border border-[var(--ne-border)] overflow-hidden transition-all duration-500 hover:border-[var(--ne-border-accent)]"
                            style={{ backgroundColor: 'var(--ne-surface)' }}
                        >
                            {/* Hover glow overlay */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(var(--ne-accent-rgb), 0.06), transparent 40%)`,
                                }}
                            />

                            {/* Tag */}
                            <span className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] mb-6 px-3 py-1 rounded-full border border-[var(--ne-border)]"
                                style={{ color: 'var(--ne-accent)' }}
                            >
                                {card.tag}
                            </span>

                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                                style={{
                                    backgroundColor: 'rgba(var(--ne-accent-rgb), 0.1)',
                                    color: 'var(--ne-accent)',
                                }}
                            >
                                {iconMap[card.icon]}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-display font-semibold mb-3">{card.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--ne-text-muted)' }}>
                                {card.description}
                            </p>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                style={{ backgroundColor: 'var(--ne-accent)' }}
                            />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
