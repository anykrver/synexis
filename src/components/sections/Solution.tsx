import { motion } from 'motion/react';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { Container } from '@/src/components/layout/Container';

export default function Solution() {
  return (
    <section className="py-24 relative overflow-hidden" id="solution">
      <div className="absolute top-0 left-0 w-full h-full silicon-grid opacity-10 pointer-events-none" />
      
      <Container>
        <SectionTitle 
          centered
          subtitle="The Solution"
          title="In-Memory Computing"
          description="Performing computation directly within the memory array using analog physical laws. Ohm's law for multiplication, Kirchhoff's current law for accumulation."
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lab-panel p-12 md:p-20 relative overflow-hidden rounded-sm border-white/10 shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-cyan-glow)]/40 to-transparent" />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h4 className="text-2xl font-display font-bold text-white">Analog Math Engine</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    By leveraging the intrinsic physical properties of memristors, we eliminate the need to move data between memory and processor.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-1 h-auto bg-[var(--color-cyan-glow)]/40 rounded-full" />
                    <div>
                      <h5 className="text-sm font-mono uppercase tracking-widest text-white mb-1">Ohm's Law</h5>
                      <p className="text-xs text-gray-500">I = V × G. Multiplication happens as current flows through the device.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 h-auto bg-[var(--color-cyan-glow)]/40 rounded-full" />
                    <div>
                      <h5 className="text-sm font-mono uppercase tracking-widest text-white mb-1">Kirchhoff's Law</h5>
                      <p className="text-xs text-gray-500">Σ I = 0. Summation happens instantly on the bitlines.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-black/60 p-10 rounded-sm border border-white/10 text-center relative z-10 group hover:border-[var(--color-cyan-glow)]/40 transition-all duration-500">
                  <div className="absolute inset-0 bg-[var(--color-cyan-glow)]/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                  <div className="font-mono text-4xl text-white tracking-widest relative z-10">
                    I<sub className="text-xl">out</sub> = Σ (V<sub className="text-xl">in</sub> × G<sub className="text-xl">ij</sub>)
                  </div>
                  <div className="mt-6 font-mono text-[10px] text-[var(--color-cyan-glow)] uppercase tracking-[0.4em] relative z-10">
                    O(1) Time Complexity
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-[var(--color-cyan-glow)]/20" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-[var(--color-cyan-glow)]/20" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
