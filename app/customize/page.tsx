import React from 'react';
import { CardProvider } from '../context/CardContext';
import { Scene } from '../components/Scene';
import { Sidebar } from '../components/Sidebar';
import Link from 'next/link';

export default function CustomizePage() {
  return (
    <main className="flex flex-col lg:flex-row h-screen w-full bg-[#F4F4F0] overflow-hidden text-[#111111] font-sans selection:bg-[#FF5722] selection:text-white">
      {/* Background Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
        <div className="w-full max-w-[1440px] h-full flex justify-between px-4 sm:px-8">
          <div className="w-[1px] h-full bg-black/5"></div>
          <div className="w-[1px] h-full bg-black/5 hidden md:block"></div>
          <div className="w-[1px] h-full bg-black/5 hidden lg:block"></div>
          <div className="w-[1px] h-full bg-black/5 hidden lg:block"></div>
          <div className="w-[1px] h-full bg-black/5"></div>
        </div>
      </div>

      <CardProvider>
        {/* 3D Canvas Area */}
        <div className="flex-1 relative h-[60vh] lg:h-full overflow-hidden z-10">
          <div className="absolute top-8 left-8 z-20">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <span className="font-bold tracking-tighter text-2xl text-[#111111]">
                <span className="font-mono">hallel</span>
                <span style={{ fontFamily: 'Orbitron, sans-serif' }}>x2</span>
                <span className="font-sans"> bank</span>
              </span>
            </Link>
          </div>
          <Scene />
        </div>
        
        {/* Customization Sidebar */}
        <div className="h-[40vh] lg:h-full w-full lg:w-[400px] shrink-0 z-20 border-l border-black/10 bg-[#F4F4F0]">
          <Sidebar />
        </div>
      </CardProvider>
    </main>
  );
}
