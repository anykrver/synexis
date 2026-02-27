import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

const GlowMaterialImpl = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color('#00f0ff'),
    uGlowIntensity: 1.0,
  },
  // Vertex Shader
  `
  varying vec2 vUv;
  varying vec3 vNormal;
  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  // Fragment Shader
  `
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uGlowIntensity;
  varying vec2 vUv;
  varying vec3 vNormal;
  
  void main() {
    float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
    
    // Base glow + pulsing
    float pulse = 0.8 + 0.2 * sin(uTime * 2.0);
    vec3 glow = uColor * intensity * uGlowIntensity * pulse;
    
    // Add a sharp center glow
    float center = 1.0 - length(vUv - 0.5);
    glow += uColor * pow(center, 4.0) * uGlowIntensity * 0.5;
    
    gl_FragColor = vec4(glow, 1.0);
  }
  `
);

extend({ GlowMaterialImpl });

export default GlowMaterialImpl;
