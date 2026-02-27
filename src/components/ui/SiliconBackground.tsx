import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 600 }) {
  const points = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.x = time * 0.015;
    points.current.rotation.y = time * 0.02;
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00F0FF"
        size={0.008}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.3}
      />
    </Points>
  );
}

function FlowingLines() {
  const lines = useMemo(() => {
    return Array.from({ length: 8 }).map(() => {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const length = Math.random() * 4 + 2;
      return { x, y, length, speed: Math.random() * 0.02 + 0.01 };
    });
  }, []);

  return (
    <group>
      {lines.map((line, i) => (
        <FlowingLine key={i} {...line} />
      ))}
    </group>
  );
}

function FlowingLine({ x, y, length, speed }: { x: number, y: number, length: number, speed: number }) {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.position.z = ((time * speed * 50) % 20) - 10;
  });

  return (
    <group ref={ref} position={[x, y, 0]}>
      <Line
        points={[[0, 0, 0], [0, 0, length]]}
        color="#00F0FF"
        lineWidth={0.5}
        transparent
        opacity={0.15}
      />
    </group>
  );
}

function Grid() {
  const gridRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    gridRef.current.position.z = (time * 0.4) % 4;
  });

  return (
    <group ref={gridRef}>
      {Array.from({ length: 4 }).map((_, i) => (
        <gridHelper
          key={i}
          args={[40, 40, 0x002222, 0x001111]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0, -i * 4]}
        />
      ))}
    </group>
  );
}

export default function SiliconBackground() {
  return (
    <div className="absolute inset-0 -z-10" style={{ backgroundColor: 'var(--ne-bg-deep)' }}>
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.5} />
          <Particles />
          <FlowingLines />
          <Grid />
        </Canvas>
      </div>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, transparent, transparent 50%, var(--ne-bg-deep))` }}
      />
    </div>
  );
}
