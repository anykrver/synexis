import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './GlowMaterial';

export default function VoltagePulse({ 
  axis = 'x', 
  index = 0, 
  speed = 2, 
  color = '#ffffff',
  startTime = 0,
  zOffset = 0
}: { 
  axis?: 'x' | 'y', 
  index: number, 
  speed?: number, 
  color?: string,
  startTime?: number,
  zOffset?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime() - startTime;
    const t = elapsed * speed;
    const pos = (t % 12) - 6; // Range -6 to 6
    
    if (meshRef.current) {
      if (axis === 'x') {
        meshRef.current.position.set(pos, index, zOffset);
      } else {
        meshRef.current.position.set(index, pos, zOffset);
      }
    }
    
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime();
      // Pulse brightness based on position
      const distFromCenter = 1.0 - Math.abs(pos) / 6;
      materialRef.current.uGlowIntensity = 2.0 + distFromCenter * 3.0;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.06, 16, 16]} />
      {/* @ts-ignore */}
      <glowMaterialImpl 
        ref={materialRef} 
        uColor={new THREE.Color(color)} 
        transparent 
      />
    </mesh>
  );
}
