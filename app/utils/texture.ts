import { CanvasTexture } from 'three';

export function createGradientTexture(color1: string, color2: string): CanvasTexture | null {
  if (typeof window === 'undefined') return null;

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext('2d');

  if (context) {
    const gradient = context.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);

    context.fillStyle = gradient;
    context.fillRect(0, 0, 512, 512);
  }

  const texture = new CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}
