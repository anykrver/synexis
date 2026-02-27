import { motion } from 'motion/react';
import { Container } from '@/src/components/layout/Container';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { Car, Drone, Bot, Smartphone, Factory } from 'lucide-react';

const USE_CASES = [
  {
    icon: <Car className="w-6 h-6" />,
    title: "Autonomous Systems",
    desc: "Real-time sensor fusion and path planning with sub-microsecond decision latency."
  },
  {
    icon: <Drone className="w-6 h-6" />,
    title: "Neuromorphic Robotics",
    desc: "Low-power motor control and spatial awareness for agile, battery-constrained robots."
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "IoT Intelligence",
    desc: "Always-on keyword spotting and anomaly detection at the extreme edge."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile AI",
    desc: "On-device LLM inference and image processing without draining battery life."
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: "Industrial 4.0",
    desc: "Predictive maintenance and high-speed visual inspection on factory floors."
  }
];

export default function EdgeAI() {
  return (
    <section className="py-24" style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.02)' }}>
      <Container>
        <SectionTitle
          subtitle="Deployment"
          title="Built For Edge AI"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-xl border border-[var(--ne-border)] group hover:border-[var(--ne-border-accent)] transition-all"
              style={{ backgroundColor: 'var(--ne-surface)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all"
                style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.05)', color: 'var(--ne-text-muted)' }}
              >
                <div className="group-hover:text-[var(--ne-accent)] transition-colors" style={{ color: 'inherit' }}>
                  {item.icon}
                </div>
              </div>
              <h4 className="text-lg font-display font-semibold mb-3">{item.title}</h4>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--ne-text-muted)' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-8 rounded-xl border border-dashed flex flex-col items-center justify-center text-center"
            style={{
              borderColor: 'var(--ne-border-accent)',
              backgroundColor: 'rgba(var(--ne-accent-rgb), 0.02)',
            }}
          >
            <h4 className="text-lg font-display font-semibold mb-2" style={{ color: 'var(--ne-accent)' }}>Your Use Case?</h4>
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: 'var(--ne-text-dim)' }}>Custom Silicon Integration</p>
            <button className="text-xs font-mono hover:opacity-80 transition-opacity underline underline-offset-4"
              style={{ color: 'var(--ne-accent)' }}
            >
              Partner With Us →
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
