import { useState } from 'react';
import { motion } from 'motion/react';
import { Container } from '@/src/components/layout/Container';
import { Sparkles, ArrowRight } from 'lucide-react';

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
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.1)' }}
              >
                <Sparkles className="w-6 h-6" style={{ color: 'var(--ne-accent)' }} />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Join the <span className="text-gradient">Early Access</span>
            </h2>
            <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: 'var(--ne-text-muted)' }}>
              Be among the first to experience the next generation of AI hardware. Get updates on our silicon progress and early access to dev tools.
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
                Get Access <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm font-mono"
                style={{ color: 'var(--ne-accent)' }}
              >
                ✓ You're on the list! We'll be in touch.
              </motion.p>
            )}

            <p className="mt-6 text-xs" style={{ color: 'var(--ne-text-dim)' }}>
              No spam. Unsubscribe anytime. Research updates only.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
