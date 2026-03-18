'use client';

import React from 'react';
import { useCard, CardStyle } from '../context/CardContext';
import { CreditCard, Palette, Type, Layers, CheckCircle2 } from 'lucide-react';

export function Sidebar() {
  const { state, updateState } = useCard();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateState({ [name]: value });
  };

  const handleStyleChange = (style: CardStyle) => {
    updateState({ cardStyle: style });
  };

  return (
    <div 
      className="w-full lg:w-[400px] border-l border-black/10 h-full overflow-y-auto flex flex-col relative bg-[#F4F4F0]"
    >
      <div className="p-6 border-b border-black/10 bg-white/50 backdrop-blur-sm">
        <h2 className="text-xl font-medium text-[#111111] flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-[#FF5722]" />
          Card Studio
        </h2>
        <p className="text-xs font-mono text-black/60 mt-1 uppercase tracking-widest">Design your premium hallelx2 card</p>
      </div>

      <div className="p-6 space-y-8 flex-1">
        {/* Card Details */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-mono text-black/40 uppercase tracking-widest flex items-center gap-2">
            <Type className="w-3 h-3" />
            Card Details
          </h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-mono text-black/60 mb-1 uppercase">Card Holder Name</label>
              <input
                type="text"
                name="cardHolder"
                value={state.cardHolder}
                onChange={handleInputChange}
                className="w-full bg-white border border-black/10 rounded-none px-3 py-2 text-sm text-[#111111] focus:outline-none focus:border-[#FF5722] transition-colors"
                placeholder="CHRIS FORGE"
              />
            </div>
            
            <div>
              <label className="block text-xs font-mono text-black/60 mb-1 uppercase">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={state.cardNumber}
                onChange={handleInputChange}
                className="w-full bg-white border border-black/10 rounded-none px-3 py-2 text-sm text-[#111111] focus:outline-none focus:border-[#FF5722] transition-colors"
                placeholder="5256 6775 4456 2245"
                maxLength={19}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-black/60 mb-1 uppercase">Expiry Date</label>
                <input
                  type="text"
                  name="expiry"
                  value={state.expiry}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-black/10 rounded-none px-3 py-2 text-sm text-[#111111] focus:outline-none focus:border-[#FF5722] transition-colors"
                  placeholder="12/28"
                  maxLength={5}
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-black/60 mb-1 uppercase">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={state.cvv}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-black/10 rounded-none px-3 py-2 text-sm text-[#111111] focus:outline-none focus:border-[#FF5722] transition-colors"
                  placeholder="123"
                  maxLength={4}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Material Style */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-mono text-black/40 uppercase tracking-widest flex items-center gap-2">
            <Layers className="w-3 h-3" />
            Material
          </h3>
          
          <div className="grid grid-cols-3 gap-2">
            {(['glass', 'solid', 'gradient'] as CardStyle[]).map((style) => (
              <button
                key={style}
                onClick={() => handleStyleChange(style)}
                className={`py-2 px-3 text-[10px] font-mono uppercase tracking-widest transition-colors border ${
                  state.cardStyle === style
                    ? 'bg-[#111111] border-[#111111] text-white'
                    : 'bg-white border-black/10 text-black/60 hover:border-black/30 hover:text-black'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </section>

        {/* Colors */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-mono text-black/40 uppercase tracking-widest flex items-center gap-2">
            <Palette className="w-3 h-3" />
            Colors
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono text-black/60 uppercase">Primary Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  name="color1"
                  value={state.color1}
                  onChange={handleInputChange}
                  className="w-6 h-6 cursor-pointer border-0 bg-transparent p-0"
                />
                <span className="text-[10px] text-black/60 font-mono w-16 uppercase">{state.color1}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono text-black/60 uppercase">Secondary Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  name="color2"
                  value={state.color2}
                  onChange={handleInputChange}
                  className="w-6 h-6 cursor-pointer border-0 bg-transparent p-0"
                />
                <span className="text-[10px] text-black/60 font-mono w-16 uppercase">{state.color2}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-xs font-mono text-black/60 uppercase">Text Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  name="textColor"
                  value={state.textColor}
                  onChange={handleInputChange}
                  className="w-6 h-6 cursor-pointer border-0 bg-transparent p-0"
                />
                <span className="text-[10px] text-black/60 font-mono w-16 uppercase">{state.textColor}</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="p-6 border-t border-black/10 bg-white/50 backdrop-blur-sm">
        <button className="w-full bg-[#111111] text-white text-[10px] font-mono uppercase tracking-widest py-4 hover:bg-black/80 transition-colors flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          Submit for Production
        </button>
      </div>
    </div>
  );
}
