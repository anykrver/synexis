import { motion } from 'motion/react';
import { Container } from '@/src/components/layout/Container';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { Cpu, Globe, Target, ShieldCheck, Zap, GraduationCap, BookOpen, Github, Linkedin, Mail } from 'lucide-react';

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
            subtitle="About the Project"
            title="Building the Future of Edge Compute"
          />

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <p className="text-xl font-light leading-relaxed" style={{ color: 'var(--ne-text-muted)' }}>
                NeuraEdge is an undergraduate research project exploring in-memory compute architectures based on analog ReRAM crossbar arrays. The goal is to eliminate the von Neumann bottleneck for edge AI inference.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--ne-text-muted)' }}>
                By encoding neural network weights as analog conductance values in non-volatile memory, we can perform matrix-vector multiplication directly within the storage fabric — achieving compute parallelism, ultra-low latency, and sub-picojoule energy per operation in simulation.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <h4 className="font-mono text-2xl font-bold" style={{ color: 'var(--ne-accent)' }}>TRL-2</h4>
                  <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>Readiness Level</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-mono text-2xl font-bold" style={{ color: 'var(--ne-accent)' }}>20nm</h4>
                  <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>Simulation Node</p>
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
                  { icon: Target, title: 'Physics-First', desc: 'Leveraging intrinsic physical properties of memristors for parallel computation.' },
                  { icon: Zap, title: 'Edge-Native', desc: 'Designed for energy-constrained real-time environments at the sensor edge.' },
                  { icon: ShieldCheck, title: 'Simulation-Validated', desc: 'All results backed by SPICE-level and architectural simulation models.' },
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
            subtitle="Researcher"
            title="About the Author"
          />

          <div className="grid lg:grid-cols-3 gap-12 mb-24">
            {/* Main Profile Card */}
            <div className="lg:col-span-2 p-8 rounded-xl border border-[var(--ne-border)]"
              style={{ backgroundColor: 'var(--ne-surface)' }}
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.1)' }}
                >
                  <GraduationCap className="w-10 h-10" style={{ color: 'var(--ne-accent)' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-1">Rahul Verma</h3>
                  <p className="font-mono text-sm mb-1" style={{ color: 'var(--ne-accent)' }}>Researcher & Developer</p>
                  <p className="text-sm" style={{ color: 'var(--ne-text-muted)' }}>4th Year, B.Tech Electronics & Communication Engineering</p>
                  <p className="text-sm" style={{ color: 'var(--ne-text-muted)' }}>LNCT, Bhopal</p>
                </div>
              </div>

              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--ne-text-muted)' }}>
                I'm a final-year electronics engineering student at Lakshmi Narain College of Technology (LNCT), Bhopal, with deep interest in analog circuit design, neuromorphic computing, and edge AI architectures. NeuraEdge is my undergraduate research project exploring how in-memory compute can eliminate the data movement bottleneck in edge AI systems.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--ne-text-muted)' }}>
                My work spans device-level SPICE simulation, crossbar array architecture design, hardware-aware neural network training, and full-stack development. This website itself is built to communicate the research in an accessible, visual format.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6" style={{ borderTop: '1px solid var(--ne-border)' }}>
                {[
                  { label: 'Focus', value: 'In-Memory Compute' },
                  { label: 'Specialization', value: 'Analog VLSI' },
                  { label: 'Tools', value: 'SPICE / PyTorch' },
                  { label: 'Platform', value: 'ReRAM Crossbar' },
                ].map((item, i) => (
                  <div key={i}>
                    <span className="block text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: 'var(--ne-text-dim)' }}>{item.label}</span>
                    <span className="text-sm font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Education */}
              <div className="p-6 rounded-xl border border-[var(--ne-border)]"
                style={{ backgroundColor: 'var(--ne-surface)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-5 h-5" style={{ color: 'var(--ne-accent)' }} />
                  <h4 className="font-mono text-sm uppercase tracking-widest">Education</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-sm">B.Tech, Electronics & Communication</p>
                    <p className="text-xs" style={{ color: 'var(--ne-text-muted)' }}>LNCT, Bhopal</p>
                    <p className="text-xs" style={{ color: 'var(--ne-text-dim)' }}>2022 – 2026</p>
                  </div>
                </div>
              </div>

              {/* Research Interests */}
              <div className="p-6 rounded-xl border border-[var(--ne-border)]"
                style={{ backgroundColor: 'var(--ne-surface)' }}
              >
                <h4 className="font-mono text-sm uppercase tracking-widest mb-4">Research Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {['ReRAM Devices', 'Analog VLSI', 'In-Memory Compute', 'Edge AI', 'Neuromorphic Circuits', 'Neural Networks', 'SNN'].map((tag) => (
                    <span key={tag} className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--ne-border)]"
                      style={{ color: 'var(--ne-text-muted)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connect */}
              <div className="p-6 rounded-xl border border-[var(--ne-border)]"
                style={{ backgroundColor: 'var(--ne-surface)' }}
              >
                <h4 className="font-mono text-sm uppercase tracking-widest mb-4">Connect</h4>
                <div className="space-y-3">
                  {[
                    { icon: Github, label: 'GitHub', href: '#' },
                    { icon: Linkedin, label: 'LinkedIn', href: '#' },
                    { icon: Mail, label: 'Email', href: 'mailto:rahul@neuraedge.dev' },
                  ].map((link) => (
                    <a key={link.label} href={link.href}
                      className="flex items-center gap-3 text-sm hover:text-[var(--ne-accent)] transition-colors"
                      style={{ color: 'var(--ne-text-muted)' }}
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 rounded-xl border border-[var(--ne-border)] text-center relative overflow-hidden"
            style={{ backgroundColor: 'var(--ne-surface)' }}
          >
            <div className="absolute inset-0 blur-[100px] -z-10" style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.05)' }} />
            <Globe className="w-12 h-12 mx-auto mb-6 opacity-50" style={{ color: 'var(--ne-accent)' }} />
            <h3 className="text-2xl font-semibold mb-4">Undergraduate Research, Real-World Impact</h3>
            <p className="max-w-2xl mx-auto font-light" style={{ color: 'var(--ne-text-muted)' }}>
              NeuraEdge demonstrates that meaningful deep-tech research can begin at the undergraduate level. From device physics simulation to full-stack engineering, this project bridges hardware and software to explore the future of edge AI.
            </p>
            <div className="mt-8 flex justify-center gap-8 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--ne-text-dim)' }}>
              <span>LNCT Bhopal</span>
              <span>•</span>
              <span>Electronics Engineering</span>
              <span>•</span>
              <span>Class of 2026</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
