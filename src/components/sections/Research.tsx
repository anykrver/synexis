import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { Card } from '@/src/components/ui/Card';
import { Container } from '@/src/components/layout/Container';
import { ExternalLink, Github, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/src/components/ui/Button';

export default function Research() {
  return (
    <section className="py-24" id="research" style={{ borderTop: '1px solid var(--ne-border)' }}>
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionTitle
            subtitle="Open Science"
            title="Research & Resources"
            className="mb-0"
          />
          <Link to="/research">
            <Button variant="outline" className="gap-2">
              View All Research <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/research/von-neumann-bottleneck" className="group block">
            <Card className="h-full group-hover:border-[var(--ne-border-accent)] transition-colors">
              <BookOpen className="w-6 h-6 mb-4 transition-colors" style={{ color: 'var(--ne-text-muted)' }} />
              <h4 className="font-mono text-sm mb-2">Whitepaper</h4>
              <p className="text-sm font-light mb-4" style={{ color: 'var(--ne-text-muted)' }}>
                Detailed architectural overview of the NeuraEdge crossbar array and routing fabric.
              </p>
              <span className="font-mono text-xs flex items-center gap-1" style={{ color: 'var(--ne-accent)' }}>
                Read Article <ExternalLink className="w-3 h-3" />
              </span>
            </Card>
          </Link>

          <a href="https://github.com/anykrver/reram-simulation" target="_blank" rel="noopener noreferrer" className="group block">
            <Card className="h-full group-hover:border-[var(--ne-border-accent)] transition-colors">
              <Github className="w-6 h-6 mb-4 transition-colors" style={{ color: 'var(--ne-text-muted)' }} />
              <h4 className="font-mono text-sm mb-2">Neuro-Sim SDK</h4>
              <p className="text-sm font-light mb-4" style={{ color: 'var(--ne-text-muted)' }}>
                PyTorch extension for simulating hardware non-idealities and noise during training.
              </p>
              <span className="font-mono text-xs flex items-center gap-1" style={{ color: 'var(--ne-accent)' }}>
                View Repository <ExternalLink className="w-3 h-3" />
              </span>
            </Card>
          </a>

          <Link to="/research" className="group block">
            <Card className="h-full group-hover:border-[var(--ne-border-accent)] transition-colors">
              <div className="w-6 h-6 border flex items-center justify-center font-mono text-[10px] mb-4 rounded transition-colors"
                style={{ borderColor: 'var(--ne-text-muted)', color: 'var(--ne-text-muted)' }}
              >
                Blog
              </div>
              <h4 className="font-mono text-sm mb-2">Technical Blog</h4>
              <p className="text-sm font-light mb-4" style={{ color: 'var(--ne-text-muted)' }}>
                Deep dives into device physics, mixed-signal design, and neuromorphic algorithms.
              </p>
              <span className="font-mono text-xs flex items-center gap-1" style={{ color: 'var(--ne-accent)' }}>
                Read Articles <ExternalLink className="w-3 h-3" />
              </span>
            </Card>
          </Link>
        </div>
      </Container>
    </section>
  );
}
