import { motion } from 'motion/react';
import { Container } from '@/src/components/layout/Container';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { Cpu, Users, Globe, Target, ShieldCheck, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            subtitle="Our Mission"
            title="Redefining the Future of Computation"
          />

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <p className="text-xl font-light leading-relaxed" style={{ color: 'var(--ne-text-muted)' }}>
                NeuraEdge was founded with a singular, ambitious goal: to break the von Neumann bottleneck that has constrained computing for over 70 years.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--ne-text-muted)' }}>
                By merging memory and computation into a single physical fabric using ReRAM technology, we are building hardware that thinks like a brain—efficient, parallel, and incredibly fast. Our architecture doesn't just simulate neural networks; it embodies them.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <h4 className="font-mono text-2xl font-bold" style={{ color: 'var(--ne-accent)' }}>100x</h4>
                  <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>Energy Efficiency</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-mono text-2xl font-bold" style={{ color: 'var(--ne-accent)' }}>10x</h4>
                  <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>Inference Speed</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl border border-[var(--ne-border)] relative overflow-hidden group"
              style={{ backgroundColor: 'var(--ne-surface)' }}
            >
              <div className="absolute inset-0 opacity-50 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(var(--ne-accent-rgb), 0.08), transparent)' }}
              />
              <Cpu className="w-64 h-64 absolute -right-16 -bottom-16 group-hover:rotate-12 transition-transform duration-1000"
                style={{ color: 'var(--ne-border)' }}
              />
              <div className="relative z-10 space-y-8">
                {[
                  { icon: Target, title: 'Physics-First', desc: 'We leverage the intrinsic physical properties of memristors for computation.' },
                  { icon: Zap, title: 'Edge-Native', desc: 'Designed for the most demanding real-time environments on the edge.' },
                  { icon: ShieldCheck, title: 'Reliable AI', desc: 'Hardware-level security and deterministic performance for critical apps.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="p-3 rounded-xl"
                      style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.08)', color: 'var(--ne-accent)' }}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-mono uppercase text-sm mb-1">{item.title}</h4>
                      <p className="text-sm" style={{ color: 'var(--ne-text-muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <SectionTitle
            subtitle="The Team"
            title="Pioneers in Neuromorphic Engineering"
          />

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { name: 'Dr. Elena Vance', role: 'Chief Scientist', bio: 'Former Lead Researcher at Stanford Nano-Lab. 15+ years in memristive device physics.' },
              { name: 'Marcus Chen', role: 'CEO & Founder', bio: 'Serial entrepreneur in the semiconductor space. Previously led architecture at ARM.' },
              { name: 'Sarah Jenkins', role: 'Head of AI Systems', bio: 'Expert in hardware-aware neural network optimization and spike-based learning.' }
            ].map((member, idx) => (
              <div key={idx} className="p-6 rounded-xl border group hover:border-[var(--ne-border-accent)] transition-all"
                style={{
                  backgroundColor: 'var(--ne-surface)',
                  borderColor: 'var(--ne-border)',
                  borderTopWidth: '2px',
                }}
              >
                <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center transition-colors"
                  style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.05)' }}
                >
                  <Users className="w-8 h-8 transition-colors" style={{ color: 'var(--ne-text-muted)' }} />
                </div>
                <h4 className="font-mono uppercase text-sm mb-1">{member.name}</h4>
                <p className="text-[10px] uppercase tracking-widest mb-4" style={{ color: 'var(--ne-accent)' }}>{member.role}</p>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--ne-text-muted)' }}>{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="p-12 rounded-xl border border-[var(--ne-border)] text-center relative overflow-hidden"
            style={{ backgroundColor: 'var(--ne-surface)' }}
          >
            <div className="absolute inset-0 blur-[100px] -z-10" style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.05)' }} />
            <Globe className="w-12 h-12 mx-auto mb-6 opacity-50" style={{ color: 'var(--ne-accent)' }} />
            <h3 className="text-2xl font-semibold mb-4">Global Innovation, Silicon Valley Roots</h3>
            <p className="max-w-2xl mx-auto font-light" style={{ color: 'var(--ne-text-muted)' }}>
              Headquartered in San Jose, CA, with research hubs in Zurich and Singapore. We are a global team of physicists, computer architects, and AI researchers united by a single vision.
            </p>
            <div className="mt-8 flex justify-center gap-8 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--ne-text-dim)' }}>
              <span>San Jose</span>
              <span>•</span>
              <span>Zurich</span>
              <span>•</span>
              <span>Singapore</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
