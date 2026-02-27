import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import './GlowMaterial';

interface MemristorCellProps {
  position: [number, number, number];
  conductance?: number;
  layer: number;
  row: number;
  col: number;
  onClick?: (axis: 'x' | 'y', index: number) => void;
  isActive?: boolean;
}

export default function MemristorCell({ 
  position, 
  conductance = 1.0, 
  layer, 
  row, 
  col,
  onClick,
  isActive = false
}: MemristorCellProps) {
  const materialRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const baseIntensity = isActive ? conductance * 2.0 : conductance * 0.5;

  useFrame(({ clock }) => {
    if (materialRef.current) {
      const time = clock.getElapsedTime();
      materialRef.current.uTime = time;
      
      // Traveling wave effect: cells light up as pulse passes
      // Pulse speed matches VoltagePulse speed (2.5)
      const pulseSpeed = 2.5;
      const wavePos = (time * pulseSpeed) % 12 - 6;
      const distToWave = Math.abs(position[0] - wavePos);
      const waveEffect = Math.max(0, 1.0 - distToWave / 1.5);
      
      // More pronounced pulse effect for active cells
      const cellPulseSpeed = isActive ? 3.0 : 1.0;
      const cellPulseAmount = isActive ? 0.4 : 0.1;
      const cellPulse = Math.sin(time * cellPulseSpeed + position[0] * 5 + position[1] * 5) * cellPulseAmount;
      
      const noise = Math.random() * 0.05;
      const hoverBoost = hovered ? 1.0 : 0;
      
      // Combine effects
      const finalIntensity = baseIntensity + (isActive ? waveEffect * 2.0 : 0) + cellPulse + noise + hoverBoost;
      materialRef.current.uGlowIntensity = finalIntensity;
    }
  });

  const handleClick = (e: any) => {
    e.stopPropagation();
    // Trigger pulses in both directions for visual feedback
    if (onClick) {
      onClick('x', row);
      onClick('y', col);
    }
  };

  return (
    <group 
      position={position}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      {/* The actual memristive material (The Glow) */}
      <mesh>
        <boxGeometry args={[isActive ? 0.15 : 0.1, isActive ? 0.15 : 0.1, isActive ? 0.15 : 0.1]} />
        {/* @ts-ignore */}
        <glowMaterialImpl 
          ref={materialRef} 
          uColor={new THREE.Color(hovered ? '#ffffff' : (isActive ? '#00f0ff' : '#006666'))} 
          transparent 
        />
      </mesh>
      
      {/* Physical housing/contacts (Subtle dark frame) */}
      <mesh>
        <boxGeometry args={[0.14, 0.14, 0.04]} />
        <meshStandardMaterial 
          color={isActive ? (hovered ? "#444" : "#222") : (hovered ? "#333" : "#151515")} 
          metalness={0.9} 
          roughness={0.1} 
          transparent={!isActive}
          opacity={isActive ? 1 : 0.6}
        />
      </mesh>

      {hovered && (
        <Html distanceFactor={10}>
          <div className="pointer-events-none select-none bg-black/80 backdrop-blur-md border border-[var(--color-cyan-glow)]/50 p-3 rounded-sm whitespace-nowrap z-50">
            <div className="text-[10px] font-mono text-[var(--color-cyan-glow)] uppercase tracking-widest mb-1">Memristor Cell</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px] font-mono">
              <span className="text-gray-500">LAYER:</span> <span className="text-white">{layer}</span>
              <span className="text-gray-500">ROW:</span> <span className="text-white">{row}</span>
              <span className="text-gray-500">COL:</span> <span className="text-white">{col}</span>
              <span className="text-gray-500">COND:</span> <span className="text-[var(--color-cyan-glow)]">{(conductance * 100).toFixed(1)} nS</span>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}
