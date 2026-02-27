import { motion } from 'motion/react';
import { Container } from '@/src/components/layout/Container';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { Car, Bot, Radio, Activity, ArrowUpRight } from 'lucide-react';

const TARGET_APPS = [
  {
    icon: Car,
    title: "Autonomous Systems",
    description: "Low-latency sensor fusion and path planning under strict energy budgets. Enabling real-time decision making in autonomous vehicles and UAVs.",
    specs: ['<1µs response', 'Sensor fusion', 'Path planning'],
    gradient: 'from-blue-500/10 to-cyan-500/5',
  },
  {
    icon: Bot,
    title: "Neuromorphic Robotics",
    description: "Motor control and spatial processing for battery-constrained platforms. In-memory compute enables always-on perception without draining power reserves.",
    specs: ['Motor control', 'Spatial mapping', 'Always-on'],
    gradient: 'from-violet-500/10 to-purple-500/5',
  },
  {
    icon: Radio,
    title: "Edge Signal Intelligence",
    description: "Real-time matrix transforms for RF and wideband signal processing. Analog VMM enables parallel FFT and spectral analysis at the sensor edge.",
    specs: ['RF processing', 'Spectral analysis', 'Parallel FFT'],
    gradient: 'from-emerald-500/10 to-teal-500/5',
  },
  {
    icon: Activity,
    title: "Biomedical Interfaces",
    description: "On-chip spike sorting and neural feature extraction with minimal thermal footprint. Enabling next-generation brain-computer interfaces and implantable diagnostics.",
    specs: ['Spike sorting', '<40 mW/cm²', 'On-chip BCI'],
    gradient: 'from-rose-500/10 to-pink-500/5',
  },
];

export default function Applications() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--ne-bg-deep)' }}>
      <div className="section-divider absolute top-0" />

      <Container>
        <SectionTitle
          subtitle="Target Applications"
          title="Designed for the Edge"
        />

        <p className="text-lg font-light leading-relaxed max-w-3xl mb-16" style={{ color: 'var(--ne-text-muted)' }}>
          NeuraEdge is purpose-built for deployment scenarios where latency, power, and size constraints make cloud-based inference impractical. These are the domains we target.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {TARGET_APPS.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative p-8 rounded-2xl border overflow-hidden transition-all duration-500 hover:border-[var(--ne-border-accent)] hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--ne-surface)',
                borderColor: 'var(--ne-border)',
              }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              {/* Top-right arrow indicator */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight className="w-5 h-5" style={{ color: 'var(--ne-accent)' }} />
              </div>

              {/* Icon with accent background */}
              <div className="relative z-10 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: 'rgba(var(--ne-accent-rgb), 0.08)',
                  }}
                >
                  <app.icon className="w-7 h-7 transition-colors duration-300" style={{ color: 'var(--ne-text-muted)' }} />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-[var(--ne-accent)] transition-colors duration-300">
                  {app.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--ne-text-muted)' }}>
                  {app.description}
                </p>

                {/* Spec tags */}
                <div className="flex flex-wrap gap-2 pt-5" style={{ borderTop: '1px solid var(--ne-border)' }}>
                  {app.specs.map((spec) => (
                    <span key={spec}
                      className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border transition-colors duration-300"
                      style={{
                        borderColor: 'var(--ne-border)',
                        color: 'var(--ne-text-dim)',
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: 'var(--ne-accent)' }}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
