import { motion } from 'motion/react';
import { Container } from '@/src/components/layout/Container';

export default function VMMFlow() {
  return (
    <section className="py-24 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Analog Math Engine</h3>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            O(1) Matrix-Vector Multiplication in the Analog Domain.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 -z-10" />

          {/* Input Voltage (V_in) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 w-full lg:w-1/4"
          >
            <div className="lab-panel p-8 rounded-sm w-full text-center group hover:border-[var(--color-cyan-glow)]/30 transition-colors">
              <div className="font-mono text-xs text-gray-500 mb-4 uppercase tracking-widest">Input Vector</div>
              <div className="text-4xl font-display font-bold text-white mb-2">V<sub>in</sub></div>
              <div className="flex justify-center gap-1">
                {[0.8, 0.2, 0.5, 0.9].map((v, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [10, v * 40, 10] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-2 bg-[var(--color-cyan-glow)]/40 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-600 text-center uppercase tracking-widest">Analog Voltages</p>
          </motion.div>

          <div className="text-[var(--color-cyan-glow)] animate-pulse hidden lg:block">→</div>

          {/* Crossbar Array (G_ij) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6 w-full lg:w-1/3"
          >
            <div className="lab-panel p-6 rounded-sm w-full relative group hover:border-[var(--color-cyan-glow)]/50 transition-all shadow-2xl">
              <div className="font-mono text-xs text-gray-500 mb-4 uppercase tracking-widest text-center">Synaptic Weights</div>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0.1 }}
                    whileInView={{ opacity: Math.random() * 0.8 + 0.2 }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                    className="aspect-square bg-[var(--color-cyan-glow)]/20 border border-white/5 rounded-sm"
                  />
                ))}
              </div>
              <div className="absolute -top-4 -right-4 bg-black border border-white/10 px-3 py-1 rounded font-mono text-[10px] text-[var(--color-cyan-glow)]">
                G<sub>ij</sub>
              </div>
            </div>
            <p className="text-xs text-gray-600 text-center uppercase tracking-widest">Memristor Conductance</p>
          </motion.div>

          <div className="text-[var(--color-cyan-glow)] animate-pulse hidden lg:block">→</div>

          {/* Output Current (I_out) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6 w-full lg:w-1/4"
          >
            <div className="lab-panel p-8 rounded-sm w-full text-center group hover:border-[var(--color-cyan-glow)]/30 transition-colors">
              <div className="font-mono text-xs text-gray-500 mb-4 uppercase tracking-widest">Output Vector</div>
              <div className="text-4xl font-display font-bold text-white mb-2">I<sub>out</sub></div>
              <div className="font-mono text-[var(--color-cyan-glow)] text-sm animate-pulse">
                Σ (V<sub>i</sub> × G<sub>ij</sub>)
              </div>
            </div>
            <p className="text-xs text-gray-600 text-center uppercase tracking-widest">Accumulated Current</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-8 lab-panel border-dashed border-white/10 rounded-sm text-center"
        >
          <div className="font-mono text-sm text-gray-400 mb-4">Kirchhoff's Current Law (KCL) Integration</div>
          <div className="text-gray-500 text-sm font-light max-w-3xl mx-auto leading-relaxed">
            Unlike digital processors that move data between memory and ALU, Neuro-Edge performs computation <span className="text-white">in-situ</span>. The physical laws of electricity perform the summation instantly, eliminating the energy cost of data movement.
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
