import { useState } from 'react';
import { Cpu, Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="py-16 px-6 border-t border-[var(--ne-border)]" style={{ backgroundColor: 'var(--ne-bg-deep)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-[var(--ne-accent)] flex items-center justify-center">
                <Cpu className="w-4 h-4 text-[var(--ne-bg)]" />
              </div>
              <span className="font-display font-bold text-lg text-[var(--ne-text-headline)]">NeuraEdge</span>
            </Link>
            <p className="text-sm text-[var(--ne-text-muted)] leading-relaxed max-w-xs">
              In-memory compute architecture for edge AI systems. Compute where data lives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-[var(--ne-text-headline)] uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: 'Technology', href: '#technology' },
                { label: 'Performance', href: '#performance' },
                { label: 'Roadmap', href: '#roadmap' },
                { label: 'Research', href: '/research', isRoute: true },
                { label: 'About', href: '/about', isRoute: true },
              ].map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link to={link.href} className="text-sm text-[var(--ne-text-muted)] hover:text-[var(--ne-accent)] transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-sm text-[var(--ne-text-muted)] hover:text-[var(--ne-accent)] transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-sm text-[var(--ne-text-headline)] uppercase tracking-wider mb-6">Stay Updated</h4>
            <p className="text-sm text-[var(--ne-text-muted)] mb-4">Get the latest on our silicon progress.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 px-4 py-2.5 text-sm rounded-lg border border-[var(--ne-border)] bg-[var(--ne-surface)] text-[var(--ne-text)] placeholder:text-[var(--ne-text-dim)] focus:outline-none focus:border-[var(--ne-accent)] transition-colors"
                required
              />
              <button
                type="submit"
                className="p-2.5 rounded-lg bg-[var(--ne-accent)] text-[var(--ne-bg)] hover:brightness-110 transition-all magnetic-hover focus-ring"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-[var(--ne-accent)] mt-2 font-mono">✓ Subscribed successfully!</p>
            )}
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-display font-semibold text-sm text-[var(--ne-text-headline)] uppercase tracking-wider mb-6">Connect</h4>
            <div className="flex gap-3 mb-8">
              <a href="https://github.com/anykrver/reram-simulation" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-[var(--ne-border)] flex items-center justify-center text-[var(--ne-text-muted)] hover:text-[var(--ne-accent)] hover:border-[var(--ne-border-accent)] transition-all focus-ring"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-[var(--ne-border)] flex items-center justify-center text-[var(--ne-text-muted)] hover:text-[var(--ne-accent)] hover:border-[var(--ne-border-accent)] transition-all focus-ring" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-[var(--ne-border)] flex items-center justify-center text-[var(--ne-text-muted)] hover:text-[var(--ne-accent)] hover:border-[var(--ne-border-accent)] transition-all focus-ring" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-[var(--ne-text-dim)] hover:text-[var(--ne-text-muted)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-xs text-[var(--ne-text-dim)] hover:text-[var(--ne-text-muted)] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--ne-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[var(--ne-text-dim)]">
            © {new Date().getFullYear()} NeuraEdge. All rights reserved.
          </span>
          <span className="font-mono text-[10px] text-[var(--ne-text-dim)] uppercase tracking-[0.2em]">
            Research-Grade Silicon
          </span>
        </div>
      </div>
    </footer>
  );
}
