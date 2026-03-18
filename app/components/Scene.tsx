'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls, Html } from '@react-three/drei';
import { BankCard } from './BankCard';

function Loader() {
  return (
    <Html center>
      <div className="text-[#111111] text-xs font-mono tracking-widest uppercase animate-pulse">
        Loading 3D...
      </div>
    </Html>
  );
}

export function Scene() {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-screen relative bg-transparent">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={<Loader />}>
          <BankCard />
          <Environment preset="city" resolution={256} />
          <ContactShadows position={[0, -4.5, 0]} opacity={0.3} scale={15} blur={1.5} far={4.5} resolution={256} frames={1} />
        </Suspense>
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={true} 
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 1.5} 
        />
      </Canvas>
      
      {/* Decorative background elements for glassmorphism to show through */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF5722] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#FF5722] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 pointer-events-none"></div>
    </div>
  );
}
