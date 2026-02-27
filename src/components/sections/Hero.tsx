import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Badge } from '@/src/components/ui/Badge';
import { Container } from '@/src/components/layout/Container';
import { AnimatedCounter } from '@/src/components/ui/AnimatedCounter';
import { HERO_STATS } from '@/src/lib/constants';

const CrossbarScene = lazy(() => import('@/src/components/three/CrossbarScene'));

function HeroFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: 'var(--ne-bg-deep)' }}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-[var(--ne-accent)] border-t-transparent rounded-full animate-spin" />
        <span className="font-mono text-xs text-[var(--ne-text-dim)] uppercase tracking-widest">Loading Simulation</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [showScene, setShowScene] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowScene(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLowEnd = typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 4) <= 2;

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.06)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ backgroundColor: 'rgba(var(--ne-accent2-rgb), 0.04)' }} />

      <Container className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[var(--ne-accent)]" />
            <Badge>
              <ChevronRight className="w-3 h-3 mr-1.5" />
              In-Memory Compute Architecture
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            Compute <br />
            <span className="text-gradient">Where Data</span> <br />
            Lives.
          </h1>

          <p className="text-lg md:text-xl font-light max-w-xl leading-relaxed" style={{ color: 'var(--ne-text-muted)' }}>
            NeuraEdge is an in-memory compute architecture built on analog ReRAM crossbar arrays, designed to eliminate the von Neumann bottleneck in edge AI systems.
          </p>

          <p className="text-sm max-w-xl leading-relaxed" style={{ color: 'var(--ne-text-dim)' }}>
            Simulated results (20nm node, 128×128 array): {'<'}1µs inference latency · 900+ TOPS/W · Sub-picojoule energy per MAC
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#architecture"
            >
              <Button variant="primary" size="lg" className="gap-3 group">
                Explore Architecture <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#performance">
              <Button variant="outline" size="lg" className="gap-3">
                View Simulation Results
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-[var(--ne-border)]">
            {HERO_STATS.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix}
                  className="text-2xl md:text-3xl font-display font-bold text-[var(--ne-accent)]"
                />
                <span className="text-[10px] uppercase tracking-[0.2em] mt-1" style={{ color: 'var(--ne-text-dim)' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
          className="relative h-[400px] lg:h-[600px] lab-panel rounded-xl flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--ne-bg)]/40 pointer-events-none z-10" />

          {showScene && !isLowEnd ? (
            <Suspense fallback={<HeroFallback />}>
              <CrossbarScene />
            </Suspense>
          ) : (
            <HeroFallback />
          )}

          <div className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.3em] pointer-events-none z-20 flex items-center gap-3"
            style={{ color: 'var(--ne-text-dim)' }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--ne-accent)' }} />
            Live Silicon Simulation
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
