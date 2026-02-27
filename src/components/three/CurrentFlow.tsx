import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CurrentFlowProps {
  position: [number, number, number];
  length: number;
  intensity: number; // Proportional to I = V * G
  color?: string;
}

export default function CurrentFlow({ 
  position, 
  length, 
  intensity, 
  color = '#00f0ff' 
}: CurrentFlowProps) {
  const count = 5;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      offset: (i / count) * length,
      speed: 1 + intensity * 2,
    }));
  }, [count, length, intensity]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const time = clock.getElapsedTime();
    
    particles.forEach((p, i) => {
      const progress = (time * p.speed + p.offset) % length;
      const yPos = length / 2 - progress;
      
      dummy.position.set(0, yPos, 0);
      dummy.scale.setScalar(0.02 + intensity * 0.03);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  if (intensity < 0.1) return null;

  return (
    <group position={position}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.6 * intensity} 
        />
      </instancedMesh>
    </group>
  );
}
