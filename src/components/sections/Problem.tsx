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
              subtitle="The Bottleneck"
              title="The Von Neumann Wall"
            />
            <div className="space-y-8 text-[var(--color-text-body)] font-light">
              <p className="text-lg leading-relaxed">
                Modern AI models are growing exponentially, but traditional computing architectures physically separate processing and memory. This separation is the <span className="text-white font-medium">fundamental limit</span> of digital intelligence.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-6 group">
                  <div className="p-3 lab-panel rounded-sm h-fit group-hover:border-red-500/30 transition-colors">
                    <ZapOff className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-semibold mb-1">Energy Inefficiency</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Moving data between CPU/GPU and RAM consumes 100x more energy than the computation itself.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 group">
                  <div className="p-3 lab-panel rounded-sm h-fit group-hover:border-orange-500/30 transition-colors">
                    <MemoryStick className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-semibold mb-1">Bandwidth Limitations</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">The "Memory Wall" restricts the scaling of large language models on edge devices and autonomous systems.</p>
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
            className="lab-panel p-10 rounded-sm relative overflow-hidden border-white/10 shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
            
            <div className="flex items-center justify-between mb-12">
              <div className="text-center">
                <div className="w-20 h-20 border border-white/10 flex items-center justify-center mb-3 bg-white/5 rounded-sm">
                  <Cpu className="w-8 h-8 text-gray-400" />
                </div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Processor</span>
              </div>
              
              <div className="flex-1 flex flex-col items-center relative px-6">
                <div className="w-full h-[1px] bg-red-500/20 relative">
                  <motion.div 
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full blur-[4px]"
                    animate={{ left: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                    <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
                    <span className="font-mono text-[8px] text-red-500 uppercase tracking-widest">Data Bottleneck</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 border border-white/10 flex items-center justify-center mb-3 bg-white/5 rounded-sm">
                  <MemoryStick className="w-8 h-8 text-gray-400" />
                </div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Memory</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5">
              <div className="p-4 bg-white/5 rounded-sm">
                <div className="text-xs text-gray-500 font-mono mb-1 uppercase tracking-widest">Compute</div>
                <div className="text-xl font-display font-bold text-white">~1 pJ</div>
              </div>
              <div className="p-4 bg-red-500/5 rounded-sm border border-red-500/10">
                <div className="text-xs text-red-500/60 font-mono mb-1 uppercase tracking-widest">Transfer</div>
                <div className="text-xl font-display font-bold text-red-500">~100 pJ</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">
                99% of Energy is Wasted on Movement
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
