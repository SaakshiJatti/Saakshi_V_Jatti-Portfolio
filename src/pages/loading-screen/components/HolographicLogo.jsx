import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus } from '@react-three/drei';


const FloatingGeometry = ({ position, rotation, scale }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state?.clock?.getElapsedTime();
    if (meshRef?.current) {
      meshRef.current.rotation.x = rotation?.[0] + Math.sin(time * 0.5) * 0.2;
      meshRef.current.rotation.y = rotation?.[1] + Math.sin(time * 0.3) * 0.3;
      meshRef.current.rotation.z = rotation?.[2] + Math.sin(time * 0.4) * 0.1;
      meshRef.current.position.y = position?.[1] + Math.sin(time * 0.8 + position?.[0]) * 0.5;
    }
  });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      <Torus args={[1, 0.3, 8, 16]}>
        <meshBasicMaterial
          color="#00f5ff"
          transparent
          opacity={0.4}
          wireframe
        />
      </Torus>
    </group>
  );
};

const CentralLogo = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state?.clock?.getElapsedTime();
    if (groupRef?.current) {
      groupRef.current.rotation.y = time * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Core */}
      <Sphere args={[1, 32, 32]}>
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.3}
          wireframe
        />
      </Sphere>
      
      {/* Orbiting Elements */}
      <FloatingGeometry position={[3, 0, 0]} rotation={[0, 0, 0]} scale={0.6} />
      <FloatingGeometry position={[-3, 0, 0]} rotation={[0, Math.PI, 0]} scale={0.6} />
      <FloatingGeometry position={[0, 3, 0]} rotation={[Math.PI/2, 0, 0]} scale={0.4} />
      <FloatingGeometry position={[0, -3, 0]} rotation={[-Math.PI/2, 0, 0]} scale={0.4} />
      
      {/* Outer Ring */}
      <Torus args={[5, 0.1, 8, 32]}>
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.6} />
      </Torus>
    </group>
  );
};

const HolographicLogo = () => {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} color="#00f5ff" intensity={0.8} />
        <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.6} />
        <CentralLogo />
      </Canvas>
      
      {/* Glow Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-400/20 via-transparent to-transparent rounded-full animate-pulse-glow" />
    </div>
  );
};

export default HolographicLogo;