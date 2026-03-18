'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { useCard } from '../context/CardContext';
import { createGradientTexture } from '../utils/texture';

export function BankCard() {
  const { state } = useCard();
  const groupRef = useRef<THREE.Group>(null);

  // Rotate card slowly
  useFrame((threeState, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = Math.sin(threeState.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const gradientTexture = useMemo(() => {
    return createGradientTexture(state.color1, state.color2);
  }, [state.color1, state.color2]);

  const materialProps = useMemo(() => {
    switch (state.cardStyle) {
      case 'glass':
        return {
          transmission: 1,
          opacity: 1,
          metalness: 0.1,
          roughness: 0.1,
          ior: 1.5,
          thickness: 0.5,
          color: '#ffffff',
          transparent: true,
          side: THREE.DoubleSide,
        };
      case 'solid':
        return {
          color: state.color1,
          metalness: 0.3,
          roughness: 0.4,
          side: THREE.DoubleSide,
        };
      case 'gradient':
        return {
          map: gradientTexture,
          metalness: 0.2,
          roughness: 0.3,
          side: THREE.DoubleSide,
        };
      default:
        return { side: THREE.DoubleSide };
    }
  }, [state.cardStyle, state.color1, gradientTexture]);

  const cardWidth = 8.56;
  const cardHeight = 5.398;
  const cardThickness = state.cardThickness || 0.005;

  const cardShape = useMemo(() => {
    const shape = new THREE.Shape();
    const w = cardWidth;
    const h = cardHeight;
    const r = 0.318; // 3.18mm corner radius
    
    shape.moveTo(-w/2 + r, -h/2);
    shape.lineTo(w/2 - r, -h/2);
    shape.quadraticCurveTo(w/2, -h/2, w/2, -h/2 + r);
    shape.lineTo(w/2, h/2 - r);
    shape.quadraticCurveTo(w/2, h/2, w/2 - r, h/2);
    shape.lineTo(-w/2 + r, h/2);
    shape.quadraticCurveTo(-w/2, h/2, -w/2, h/2 - r);
    shape.lineTo(-w/2, -h/2 + r);
    shape.quadraticCurveTo(-w/2, -h/2, -w/2 + r, -h/2);
    
    return shape;
  }, [cardWidth, cardHeight]);

  const extrudeSettings = useMemo(() => ({
    depth: cardThickness,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.002,
    bevelThickness: 0.001
  }), [cardThickness]);

  return (
    <group ref={groupRef}>
      {/* Card Body */}
      <mesh position={[0, 0, -cardThickness / 2]}>
        <extrudeGeometry args={[cardShape, extrudeSettings]} />
        <meshPhysicalMaterial {...materialProps} />
      </mesh>

      {/* FRONT OF CARD */}
      <group position={[0, 0, cardThickness / 2 + 0.002]}>
        {/* Hallelx Bank Branding */}
        <group position={[-cardWidth / 2 + 0.6, cardHeight / 2 - 0.6, 0]}>
          <Text
            position={[0, 0, 0]}
            fontSize={0.35}
            color={state.textColor}
            anchorX="left"
            anchorY="top"
            letterSpacing={0.01}
          >
            hallel
          </Text>
          <Text
            position={[0.88, 0, 0]}
            fontSize={0.35}
            color="#FF5722"
            anchorX="left"
            anchorY="top"
            fontWeight="bold"
            letterSpacing={0.01}
          >
            x2
          </Text>
        </group>

        {/* EMV Chip */}
        <group position={[-cardWidth / 2 + 1.4, cardHeight / 2 - 2.2, 0]}>
          <RoundedBox args={[0.9, 0.7, 0.01]} radius={0.1} smoothness={2}>
            <meshStandardMaterial color="#e5c158" metalness={0.9} roughness={0.2} />
          </RoundedBox>
          {/* Chip Lines */}
          <mesh position={[0, 0, 0.01]}>
            <planeGeometry args={[0.8, 0.6]} />
            <meshBasicMaterial color="#d4af37" wireframe />
          </mesh>
        </group>

        {/* Contactless Indicator */}
        <group position={[-cardWidth / 2 + 2.5, cardHeight / 2 - 2.2, 0]}>
          {[0, 1, 2, 3].map((i) => (
            <mesh key={i} position={[i * 0.15, 0, 0]}>
              <ringGeometry args={[0.1 + i * 0.05, 0.12 + i * 0.05, 32, 1, -Math.PI / 4, Math.PI / 2]} />
              <meshBasicMaterial color={state.textColor} side={THREE.DoubleSide} />
            </mesh>
          ))}
        </group>

        {/* Card Number */}
        <Text
          position={[-cardWidth / 2 + 0.6, -0.2, 0]}
          fontSize={0.45}
          color={state.textColor}
          anchorX="left"
          anchorY="middle"
          letterSpacing={0.15}
        >
          {state.cardNumber || '#### #### #### ####'}
        </Text>

        {/* Card Holder */}
        <Text
          position={[-cardWidth / 2 + 0.6, -cardHeight / 2 + 0.6, 0]}
          fontSize={0.28}
          color={state.textColor}
          anchorX="left"
          anchorY="bottom"
          letterSpacing={0.1}
        >
          {state.cardHolder || 'CARD HOLDER'}
        </Text>

        {/* Expiry */}
        <group position={[cardWidth / 2 - 2.5, -cardHeight / 2 + 0.6, 0]}>
          <Text
            position={[-0.7, 0.2, 0]}
            fontSize={0.1}
            color={state.textColor}
            anchorX="right"
            anchorY="bottom"
          >
            VALID{'\n'}THRU
          </Text>
          <Text
            position={[-0.5, 0, 0]}
            fontSize={0.28}
            color={state.textColor}
            anchorX="left"
            anchorY="bottom"
          >
            {state.expiry || 'MM/YY'}
          </Text>
        </group>

        {/* Mastercard Logo */}
        <group position={[cardWidth / 2 - 1.2, -cardHeight / 2 + 0.8, 0]}>
          <mesh position={[-0.35, 0, 0]}>
            <circleGeometry args={[0.45, 32]} />
            <meshBasicMaterial color="#eb001b" transparent opacity={0.9} />
          </mesh>
          <mesh position={[0.25, 0, 0]}>
            <circleGeometry args={[0.45, 32]} />
            <meshBasicMaterial color="#f79e1b" transparent opacity={0.9} />
          </mesh>
          <Text
            position={[-0.05, -0.65, 0]}
            fontSize={0.15}
            color={state.textColor}
            anchorX="center"
            anchorY="middle"
            fontWeight="bold"
          >
            mastercard
          </Text>
        </group>
      </group>

      {/* BACK OF CARD */}
      <group position={[0, 0, -cardThickness / 2 - 0.002]} rotation={[0, Math.PI, 0]}>
        {/* Magnetic Stripe */}
        <mesh position={[0, cardHeight / 2 - 1.0, 0]}>
          <planeGeometry args={[cardWidth, 0.8]} />
          <meshBasicMaterial color="#1a1a1a" />
        </mesh>

        {/* Signature Panel */}
        <mesh position={[-0.5, 0, 0]}>
          <planeGeometry args={[cardWidth - 2.5, 0.6]} />
          <meshBasicMaterial color="#e0e0e0" />
        </mesh>

        {/* CVV */}
        <group position={[cardWidth / 2 - 2.0, 0, 0]}>
          <mesh position={[0, 0, 0]}>
            <planeGeometry args={[1.0, 0.6]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.25}
            color="#000000"
            anchorX="center"
            anchorY="middle"
          >
            {state.cvv || '123'}
          </Text>
        </group>

        {/* Hologram Placeholder (Security Feature) */}
        <mesh position={[cardWidth / 2 - 1.2, -cardHeight / 2 + 1.0, 0]}>
          <planeGeometry args={[1.2, 0.8]} />
          <meshPhysicalMaterial 
            color="#dddddd" 
            metalness={0.9} 
            roughness={0.1} 
            iridescence={1} 
            iridescenceIOR={1.5} 
            iridescenceThicknessRange={[100, 400]} 
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        
        {/* Support Text */}
        <Text
          position={[0, -cardHeight / 2 + 0.4, 0]}
          fontSize={0.12}
          color={state.textColor}
          anchorX="center"
          anchorY="middle"
        >
          This card is issued by hallelx2 bank pursuant to a license by Mastercard International Incorporated.
        </Text>
      </group>
    </group>
  );
}
