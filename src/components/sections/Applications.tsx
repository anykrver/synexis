import { motion } from 'motion/react';
import { Container } from '@/src/components/layout/Container';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { Card } from '@/src/components/ui/Card';
import { Car, Bot, Radio, Activity } from 'lucide-react';

const TARGET_APPS = [
  {
    icon: Car,
    title: "Autonomous Systems",
    description: "Low-latency sensor fusion and path planning under strict energy budgets. Enabling real-time decision making in autonomous vehicles and UAVs.",
  },
  {
    icon: Bot,
    title: "Neuromorphic Robotics",
    description: "Motor control and spatial processing for battery-constrained platforms. In-memory compute enables always-on perception without draining power reserves.",
  },
  {
    icon: Radio,
    title: "Edge Signal Intelligence",
    description: "Real-time matrix transforms for RF and wideband signal processing. Analog VMM enables parallel FFT and spectral analysis at the sensor edge.",
  },
  {
    icon: Activity,
    title: "Biomedical Interfaces",
    description: "On-chip spike sorting and neural feature extraction with minimal thermal footprint. Enabling next-generation brain-computer interfaces and implantable diagnostics.",
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

        <div className="grid md:grid-cols-2 gap-8">
          {TARGET_APPS.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group hover:border-[var(--ne-border-accent)] transition-colors duration-500">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-xl flex-shrink-0 transition-colors"
                    style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.05)' }}
                  >
                    <app.icon className="w-6 h-6 group-hover:text-[var(--ne-accent)] transition-colors" style={{ color: 'var(--ne-text-muted)' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-[var(--ne-accent)] transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ne-text-muted)' }}>
                      {app.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
