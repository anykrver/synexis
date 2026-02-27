import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { Card } from '@/src/components/ui/Card';
import { Container } from '@/src/components/layout/Container';

export default function DevicePhysics() {
  return (
    <section className="py-24" id="physics" style={{ borderTop: '1px solid var(--ne-border)' }}>
      <Container>
        <SectionTitle
          subtitle="Device Physics"
          title="1T1R Memristor Structure"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="flex items-center justify-center min-h-[400px] relative">
            <div className="w-48 flex flex-col items-center">
              <div className="w-full h-4 mb-1 rounded-sm" style={{ backgroundColor: 'var(--ne-text-dim)' }} />
              <div className="w-2 h-16" style={{ backgroundColor: 'var(--ne-text-muted)' }} />

              {/* Memristor */}
              <div className="w-16 h-24 border-2 relative flex items-center justify-center my-1"
                style={{ borderColor: 'var(--ne-accent)', backgroundColor: 'rgba(var(--ne-accent-rgb), 0.1)' }}
              >
                <div className="w-2 h-full relative overflow-hidden" style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.2)' }}>
                  <div className="absolute bottom-0 w-full h-[60%]"
                    style={{ backgroundColor: 'var(--ne-accent)', boxShadow: '0 0 10px rgba(var(--ne-accent-rgb), 0.8)' }}
                  />
                </div>
                <span className="absolute -right-24 font-mono text-xs" style={{ color: 'var(--ne-text-muted)' }}>Conductive<br />Filament</span>
              </div>

              <div className="w-2 h-8" style={{ backgroundColor: 'var(--ne-text-muted)' }} />

              {/* Transistor */}
              <div className="w-24 h-12 border flex items-center justify-center my-1"
                style={{ borderColor: 'var(--ne-border)' }}
              >
                <span className="font-mono text-xs" style={{ color: 'var(--ne-text)' }}>Selector (1T)</span>
              </div>

              <div className="w-2 h-8" style={{ backgroundColor: 'var(--ne-text-muted)' }} />
              <div className="w-full h-4 mt-1 rounded-sm" style={{ backgroundColor: 'var(--ne-text-dim)' }} />
            </div>

            <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase" style={{ color: 'var(--ne-text-dim)' }}>
              Cross-section view (20nm node)
            </div>
          </Card>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h4 className="font-mono text-lg mb-2">Filament Formation</h4>
              <p className="text-sm leading-relaxed font-light" style={{ color: 'var(--ne-text-muted)' }}>
                By applying programming voltage pulses, oxygen vacancies migrate to form a conductive filament across the insulating oxide layer. The thickness of this filament dictates the analog conductance state (synaptic weight).
              </p>
            </div>

            <div>
              <h4 className="font-mono text-lg mb-2">Non-Volatile Retention</h4>
              <p className="text-sm leading-relaxed font-light" style={{ color: 'var(--ne-text-muted)' }}>
                Once programmed, the weights are retained without power for &gt;10 years at 85°C, eliminating the need to constantly fetch weights from external DRAM.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4" style={{ borderTop: '1px solid var(--ne-border)' }}>
              <div>
                <span className="block font-mono text-2xl" style={{ color: 'var(--ne-accent)' }}>20nm</span>
                <span className="font-mono text-xs uppercase" style={{ color: 'var(--ne-text-dim)' }}>Feature Size</span>
              </div>
              <div>
                <span className="block font-mono text-2xl" style={{ color: 'var(--ne-accent)' }}>8-bit</span>
                <span className="font-mono text-xs uppercase" style={{ color: 'var(--ne-text-dim)' }}>Analog Precision</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
