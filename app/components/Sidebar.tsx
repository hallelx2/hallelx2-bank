'use client';

import React, { useState } from 'react';
import { useCard, CardStyle } from '../context/CardContext';
import { CreditCard, Palette, Type, Layers, CheckCircle2, Loader2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Sidebar() {
  const { state, updateState } = useCard();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateState({ [name]: value });
  };

  const handleStyleChange = (style: CardStyle) => {
    updateState({ cardStyle: style });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success state after a few seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    }, 2000);
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
            Material & Dimensions
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

          <div className="pt-2">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono text-black/60 uppercase flex items-center gap-2">
                <Maximize2 className="w-3 h-3" />
                Thickness
              </label>
              <span className="text-[10px] text-black/60 font-mono">{state.cardThickness?.toFixed(3) || '0.005'}</span>
            </div>
            <input
              type="range"
              name="cardThickness"
              min="0.001"
              max="0.02"
              step="0.001"
              value={state.cardThickness || 0.005}
              onChange={(e) => updateState({ cardThickness: parseFloat(e.target.value) })}
              className="w-full h-1 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#FF5722]"
            />
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

      <div className="p-6 border-t border-black/10 bg-white/50 backdrop-blur-sm relative overflow-hidden">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#4CAF50] text-white z-10"
            >
              <CheckCircle2 className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-center px-4">
                Submitted successfully!<br/>We will get back to you shortly.
              </span>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <button 
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-[#111111] text-white text-[10px] font-mono uppercase tracking-widest py-4 hover:bg-black/80 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <CheckCircle2 className="w-4 h-4" />
          )}
          {isSubmitting ? 'Processing...' : 'Submit for Production'}
        </button>
      </div>
    </div>
  );
}
