import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useEffect, useRef, useState } from 'react';
import CrossbarGrid from './CrossbarGrid';
import './GlowMaterial';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      glowMaterialImpl: any;
    }
  }
}

export default function CrossbarScene() {
  const [paused, setPaused] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Pause animation when tab is inactive
  useEffect(() => {
    const handleVisibility = () => {
      setPaused(document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return (
    <div ref={canvasRef} className="w-full h-full" style={{ backgroundColor: 'var(--ne-bg-deep)' }}>
      <Canvas
        dpr={[1, 1.5]}
        frameloop={paused ? 'demand' : 'always'}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <PerspectiveCamera makeDefault position={[8, 8, 12]} fov={35} />
        <color attach="background" args={['#060A14']} />
        <fog attach="fog" args={['#060A14', 10, 25]} />

        <ambientLight intensity={0.08} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.15} color="#8B5CF6" />

        <Float speed={1} rotationIntensity={0.08} floatIntensity={0.2}>
          <CrossbarGrid rows={6} cols={6} layers={2} />
        </Float>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.15}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          enablePan={false}
        />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.15}
            mipmapBlur
            intensity={0.8}
            radius={0.25}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
