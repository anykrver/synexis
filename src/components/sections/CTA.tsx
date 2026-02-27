import { useState } from 'react';
import { motion } from 'motion/react';
import { Container } from '@/src/components/layout/Container';
import { ArrowRight, FileText, Users } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-12 md:p-16 rounded-2xl border border-[var(--ne-border)] text-center overflow-hidden"
          style={{ backgroundColor: 'var(--ne-surface)' }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, rgba(var(--ne-accent-rgb), 0.08), transparent 70%)`,
            }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Toward <span className="text-gradient">Post-Von-Neumann</span> Edge Intelligence
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-6" style={{ color: 'var(--ne-text-muted)' }}>
              As AI moves from cloud to edge, architecture must evolve. NeuraEdge explores a compute paradigm where memory and arithmetic are unified at the device level — enabling scalable, energy-efficient inference directly on silicon.
            </p>
            <p className="text-sm max-w-xl mx-auto mb-10" style={{ color: 'var(--ne-text-dim)' }}>
              We are building the foundation for next-generation in-memory intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button className="px-6 py-3.5 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 magnetic-hover focus-ring transition-all"
                style={{
                  backgroundColor: 'var(--ne-accent)',
                  color: 'var(--ne-bg)',
                }}
              >
                <FileText className="w-4 h-4" /> Request Technical Brief
              </button>
              <button className="px-6 py-3.5 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 magnetic-hover focus-ring transition-all border border-[var(--ne-border)] hover:border-[var(--ne-border-accent)]"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--ne-text)',
                }}
              >
                <Users className="w-4 h-4" /> Join Early Research Access
              </button>
            </div>

            <div className="pt-8" style={{ borderTop: '1px solid var(--ne-border)' }}>
              <p className="text-xs mb-4" style={{ color: 'var(--ne-text-dim)' }}>
                Get updates on our research progress
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3.5 text-sm rounded-xl border border-[var(--ne-border)] focus:outline-none focus:border-[var(--ne-accent)] transition-colors"
                  style={{
                    backgroundColor: 'var(--ne-bg)',
                    color: 'var(--ne-text)',
                  }}
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 magnetic-hover focus-ring transition-all"
                  style={{
                    backgroundColor: 'var(--ne-accent)',
                    color: 'var(--ne-bg)',
                  }}
                >
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-sm font-mono"
                  style={{ color: 'var(--ne-accent)' }}
                >
                  ✓ You're on the list. Research updates only.
                </motion.p>
              )}

              <p className="mt-4 text-xs" style={{ color: 'var(--ne-text-dim)' }}>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
