import { motion } from 'motion/react';
import { Container } from '@/src/components/layout/Container';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { Badge } from '@/src/components/ui/Badge';
import { Card } from '@/src/components/ui/Card';
import { Cpu, Zap, Shield, Activity, Radio, Bot } from 'lucide-react';

const cases = [
  {
    title: "Real-time Signal Intelligence",
    industry: "Defense & Aerospace",
    icon: Radio,
    description: "Processing wide-band RF signals at the edge requires massive parallel FFTs. Our ReRAM arrays perform these transforms in the analog domain with zero memory-fetch overhead.",
    advantage: "Sub-microsecond latency for complex matrix-vector multiplications (VMM).",
    metrics: [
      { label: "Latency Redux", value: "98%" },
      { label: "Throughput", value: "2.4 TB/s" }
    ],
  },
  {
    title: "Implantable Neural Interfaces",
    industry: "Biomedical Engineering",
    icon: Activity,
    description: "Next-gen BCIs require on-chip spike sorting and feature extraction within strict thermal envelopes. NeuraEdge provides the necessary compute density at microwatt power levels.",
    advantage: "In-memory computing eliminates the energy cost of data movement.",
    metrics: [
      { label: "Power Draw", value: "450µW" },
      { label: "Battery Life", value: "12 Yrs" }
    ],
  },
  {
    title: "Autonomous Swarm Robotics",
    industry: "Industrial Automation",
    icon: Bot,
    description: "Coordinating hundreds of drones in dense environments requires local, high-speed path planning. Our hardware enables O(1) complexity for spatial mapping algorithms.",
    advantage: "Deterministic compute time regardless of matrix sparsity.",
    metrics: [
      { label: "Compute Speed", value: "500 TOPS" },
      { label: "Weight Redux", value: "60%" }
    ],
  }
];

export default function Applications() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--ne-bg-deep)' }}>
      <div className="section-divider absolute top-0" />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <Badge className="mb-4">Case Studies</Badge>
            <SectionTitle
              title="Silicon in Action"
              subtitle="From deep-sea exploration to orbital signal processing, NeuraEdge is redefining what's possible at the edge."
            />
          </div>
          <div className="hidden md:block">
            <div className="text-[10px] uppercase tracking-[0.3em] font-mono" style={{ color: 'var(--ne-text-dim)' }}>
              Deployment Phase: Beta 0.4
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group hover:border-[var(--ne-border-accent)] transition-colors duration-500 !p-0">
                <div className="p-8 flex-grow">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-xl transition-colors"
                      style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.05)' }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: 'var(--ne-text-muted)' }} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>
                      {item.industry}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-[var(--ne-accent)] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--ne-text-muted)' }}>
                    {item.description}
                  </p>

                  <div className="space-y-4 pt-6" style={{ borderTop: '1px solid var(--ne-border)' }}>
                    <div className="flex items-center gap-2">
                      <Zap className="w-3 h-3" style={{ color: 'var(--ne-accent)' }} />
                      <span className="text-xs font-medium">Edge Advantage</span>
                    </div>
                    <p className="text-xs italic leading-relaxed" style={{ color: 'var(--ne-text-muted)' }}>
                      "{item.advantage}"
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2" style={{ borderTop: '1px solid var(--ne-border)', backgroundColor: 'rgba(var(--ne-accent-rgb), 0.02)' }}>
                  {item.metrics.map((metric) => (
                    <div key={metric.label} className="p-4" style={{ borderRight: '1px solid var(--ne-border)' }}>
                      <div className="text-lg font-bold font-mono">{metric.value}</div>
                      <div className="text-[9px] uppercase tracking-tighter" style={{ color: 'var(--ne-text-dim)' }}>{metric.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 pt-8 flex flex-wrap gap-12 items-center justify-center opacity-50 hover:opacity-80 transition-all duration-700"
          style={{ borderTop: '1px solid var(--ne-border)' }}
        >
          <div className="flex items-center gap-2" style={{ color: 'var(--ne-text-muted)' }}>
            <Shield className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">MIL-STD-810H Compliant</span>
          </div>
          <div className="flex items-center gap-2" style={{ color: 'var(--ne-text-muted)' }}>
            <Cpu className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">22nm FD-SOI Integration</span>
          </div>
          <div className="flex items-center gap-2" style={{ color: 'var(--ne-text-muted)' }}>
            <Zap className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Radiation Hardened</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
