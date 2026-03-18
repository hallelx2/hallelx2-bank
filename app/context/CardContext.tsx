'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type CardStyle = 'glass' | 'solid' | 'gradient';

export interface CardState {
  cardNumber: string;
  cardHolder: string;
  expiry: string;
  cvv: string;
  cardStyle: CardStyle;
  color1: string;
  color2: string;
  textColor: string;
  bankName: string;
  cardThickness: number;
}

interface CardContextType {
  state: CardState;
  updateState: (updates: Partial<CardState>) => void;
}

const defaultState: CardState = {
  cardNumber: '5256 6775 4456 2245',
  cardHolder: 'CHRIS FORGE',
  expiry: '12/28',
  cvv: '123',
  cardStyle: 'solid',
  color1: '#111111',
  color2: '#FF5722',
  textColor: '#ffffff',
  bankName: 'hallelx2 bank',
  cardThickness: 0.005,
};

const CardContext = createContext<CardContextType | undefined>(undefined);

export function CardProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CardState>(defaultState);

  const updateState = (updates: Partial<CardState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  return (
    <CardContext.Provider value={{ state, updateState }}>
      {children}
    </CardContext.Provider>
  );
}

export function useCard() {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCard must be used within a CardProvider');
  }
  return context;
}
