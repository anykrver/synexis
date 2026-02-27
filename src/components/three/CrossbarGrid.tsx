import React, { useRef, useMemo, useState, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import MemristorCell from './MemristorCell';
import VoltagePulse from './VoltagePulse';
import CurrentFlow from './CurrentFlow';

interface ManualPulse {
  id: string;
  axis: 'x' | 'y';
  index: number;
  startTime: number;
}

export default function CrossbarGrid({ rows = 8, cols = 8, layers = 3 }: { rows?: number, cols?: number, layers?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const [manualPulses, setManualPulses] = useState<ManualPulse[]>([]);
  const clockRef = useRef<number>(0);
  const spacing = 1;
  const layerSpacing = 1.5;
  const offset = (rows - 1) * spacing / 2;
  const layerOffset = (layers - 1) * layerSpacing / 2;

  // Define active lines (Word Lines and Bit Lines)
  const activeWL = useMemo(() => [0, 1, 2, 3, 4, 5, 6, 7], []); 
  const activeBL = useMemo(() => [0, 1, 2, 3, 4, 5, 6, 7], []); 

  const handleCellClick = useCallback((axis: 'x' | 'y', index: number) => {
    const id = Math.random().toString(36).substr(2, 9);
    setManualPulses(prev => [...prev, { id, axis, index, startTime: clockRef.current }]);
    
    setTimeout(() => {
      setManualPulses(prev => prev.filter(p => p.id !== id));
    }, 4000);
  }, []);

  // Generate cell data for all layers
  const cells = useMemo(() => {
    const arr = [];
    for (let l = 0; l < layers; l++) {
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const isWLActive = activeWL.includes(i);
          const isBLActive = activeBL.includes(j);
          arr.push({
            id: `${l}-${i}-${j}`,
            pos: [
              i * spacing - offset, 
              j * spacing - offset, 
              l * layerSpacing - layerOffset
            ] as [number, number, number],
            conductance: 0.2 + Math.random() * 0.8,
            layer: l,
            row: i,
            col: j,
            isActive: isWLActive && isBLActive
          });
        }
      }
    }
    return arr;
  }, [rows, cols, layers, offset, layerOffset, layerSpacing, activeWL, activeBL]);

  // Calculate total current per Bit Line (Column) for output nodes
  const blCurrents = useMemo(() => {
    const currents = new Array(cols).fill(0);
    cells.forEach(cell => {
      if (cell.isActive) {
        currents[cell.col] += cell.conductance;
      }
    });
    return currents;
  }, [cells, cols]);

  useFrame(({ clock }) => {
    clockRef.current = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.1 + 0.6;
      groupRef.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.1) * 0.05 + 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* PCB-style Base Plate with Grid */}
      <group position={[0, 0, -layerOffset - 1.2]}>
        <mesh>
          <boxGeometry args={[rows * spacing + 4, cols * spacing + 4, 0.1]} />
          <meshStandardMaterial color="#020505" metalness={0.9} roughness={0.3} />
        </mesh>
        {Array.from({ length: 21 }).map((_, i) => (
          <group key={`pcb-grid-${i}`}>
            <mesh position={[i * 0.5 - 5, 0, 0.06]}>
              <boxGeometry args={[0.01, 10, 0.01]} />
              <meshBasicMaterial color="#00f0ff" transparent opacity={0.05} />
            </mesh>
            <mesh position={[0, i * 0.5 - 5, 0.06]}>
              <boxGeometry args={[10, 0.01, 0.01]} />
              <meshBasicMaterial color="#00f0ff" transparent opacity={0.05} />
            </mesh>
          </group>
        ))}
      </group>

      {Array.from({ length: layers }).map((_, l) => {
        const zPos = l * layerSpacing - layerOffset;
        return (
          <group key={`layer-${l}`} position={[0, 0, zPos]}>
            {/* Word Lines (WL) - Horizontal rods (Bottom Layer of Crossbar) */}
            {Array.from({ length: rows }).map((_, i) => {
              const isActive = activeWL.includes(i);
              return (
                <group key={`wl-group-${l}-${i}`}>
                  <mesh position={[0, i * spacing - offset, -0.4]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[isActive ? 0.008 : 0.004, isActive ? 0.008 : 0.004, rows * spacing, 8]} />
                    <meshStandardMaterial 
                      color={isActive ? "#00f0ff" : "#333"} 
                      metalness={1} 
                      roughness={0.1}
                      emissive={isActive ? "#00f0ff" : "#000"}
                      emissiveIntensity={isActive ? 0.4 : 0}
                      transparent={!isActive}
                      opacity={isActive ? 1 : 0.2}
                    />
                  </mesh>
                  {isActive && (
                    <VoltagePulse 
                      axis="x" 
                      index={i * spacing - offset} 
                      speed={2.5} 
                      color="#00f0ff" 
                      zOffset={-0.4}
                    />
                  )}
                </group>
              );
            })}

            {/* Bit Lines (BL) - Vertical rods (Top Layer of Crossbar) */}
            {Array.from({ length: cols }).map((_, j) => {
              const isActive = activeBL.includes(j);
              const currentIntensity = blCurrents[j] / rows; // Normalized current
              return (
                <group key={`bl-group-${l}-${j}`}>
                  <mesh position={[j * spacing - offset, 0, 0.4]}>
                    <cylinderGeometry args={[isActive ? 0.008 : 0.004, isActive ? 0.008 : 0.004, cols * spacing, 8]} />
                    <meshStandardMaterial 
                      color={isActive ? "#00f0ff" : "#333"} 
                      metalness={1} 
                      roughness={0.1}
                      emissive={isActive ? "#00f0ff" : "#000"}
                      emissiveIntensity={isActive ? 0.3 : 0}
                      transparent={!isActive}
                      opacity={isActive ? 1 : 0.2}
                    />
                  </mesh>
                  {/* Current Flow Particles */}
                  {isActive && (
                    <CurrentFlow 
                      position={[j * spacing - offset, 0, 0.4]} 
                      length={cols * spacing} 
                      intensity={currentIntensity} 
                    />
                  )}
                  {/* Output Accumulation Node at the bottom of BL */}
                  <mesh position={[j * spacing - offset, -offset - 0.5, 0.4]}>
                    <sphereGeometry args={[0.05 + currentIntensity * 0.1, 16, 16]} />
                    <meshStandardMaterial 
                      color="#00f0ff" 
                      emissive="#00f0ff" 
                      emissiveIntensity={0.5 + currentIntensity * 2} 
                      transparent 
                      opacity={0.8}
                    />
                  </mesh>
                </group>
              );
            })}
          </group>
        );
      })}

      {/* Manual Pulses */}
      {manualPulses.map(pulse => (
        <VoltagePulse 
          key={pulse.id}
          axis={pulse.axis}
          index={pulse.index}
          speed={3}
          color="#ffffff"
          startTime={pulse.startTime}
          zOffset={pulse.axis === 'x' ? -0.4 : 0.4}
        />
      ))}

      {/* Vertical Interconnects (Vias) */}
      {Array.from({ length: rows }).map((_, i) => (
        Array.from({ length: cols }).map((_, j) => {
          const isActive = activeWL.includes(i) && activeBL.includes(j);
          return (
            <mesh 
              key={`via-full-${i}-${j}`} 
              position={[i * spacing - offset, j * spacing - offset, 0]} 
              rotation={[Math.PI / 2, 0, 0]}
            >
              <cylinderGeometry args={[0.003, 0.003, (layers - 1) * layerSpacing, 8]} />
              <meshStandardMaterial 
                color={isActive ? "#00f0ff" : "#111"} 
                transparent 
                opacity={isActive ? 0.3 : 0.03} 
                emissive={isActive ? "#00f0ff" : "#000"} 
                emissiveIntensity={isActive ? 0.4 : 0} 
              />
            </mesh>
          );
        })
      ))}

      {/* Memristor Cells */}
      {cells.map((cell) => (
        <MemristorCell 
          key={cell.id} 
          position={cell.pos} 
          conductance={cell.conductance} 
          layer={cell.layer}
          row={cell.row}
          col={cell.col}
          onClick={handleCellClick}
          isActive={cell.isActive}
        />
      ))}
    </group>
  );
}
