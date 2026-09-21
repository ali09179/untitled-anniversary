import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  rotation: number;
  rotationSpeed: number;
  type: 'heart' | 'petal' | 'sparkle' | 'star';
  swayOffset: number;
  swaySpeed: number;
  color: string;
}

export const RomanticParticlesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const maxParticles = Math.min(48, Math.floor(width / 25));

    const colors = [
      'rgba(244, 63, 94, ',   // rose-500
      'rgba(251, 113, 133, ',  // rose-400
      'rgba(244, 114, 182, ',  // pink-400
      'rgba(216, 180, 254, ',  // purple-300
      'rgba(253, 164, 175, ',  // rose-300
      'rgba(254, 205, 211, ',  // rose-200
    ];

    const createParticle = (x?: number, y?: number, forceType?: Particle['type']): Particle => {
      const types: Particle['type'][] = ['heart', 'petal', 'sparkle', 'star'];
      const chosenType = forceType || types[Math.floor(Math.random() * types.length)];
      const baseColor = colors[Math.floor(Math.random() * colors.length)];
      const maxOp = 0.45 + Math.random() * 0.45;

      return {
        x: x !== undefined ? x : Math.random() * width,
        y: y !== undefined ? y : height + Math.random() * 40,
        size: chosenType === 'sparkle' ? 2 + Math.random() * 3 : 8 + Math.random() * 12,
        speedY: chosenType === 'petal' ? 0.6 + Math.random() * 0.9 : 0.4 + Math.random() * 1.0,
        speedX: (Math.random() - 0.5) * 0.6,
        opacity: 0,
        maxOpacity: maxOp,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        type: chosenType,
        swayOffset: Math.random() * Math.PI * 2,
        swaySpeed: 0.02 + Math.random() * 0.02,
        color: baseColor,
      };
    };

    for (let i = 0; i < maxParticles; i++) {
      const p = createParticle(Math.random() * width, Math.random() * height);
      p.opacity = Math.random() * p.maxOpacity;
      particles.push(p);
    }

    // Interactive heart burst on click/tap
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

      for (let i = 0; i < 8; i++) {
        const burstParticle = createParticle(
          clientX + (Math.random() - 0.5) * 20,
          clientY + (Math.random() - 0.5) * 20,
          Math.random() > 0.4 ? 'heart' : 'sparkle'
        );
        burstParticle.speedY = 1.2 + Math.random() * 1.6;
        burstParticle.speedX = (Math.random() - 0.5) * 2.2;
        burstParticle.opacity = 0.8;
        burstParticle.size = 10 + Math.random() * 10;
        particles.push(burstParticle);
      }
      if (particles.length > 90) {
        particles.splice(0, 8);
      }
    };

    window.addEventListener('click', handlePointerDown);

    const drawHeart = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      ctx.bezierCurveTo(-size / 2, -topCurveHeight, -size, topCurveHeight / 2, 0, size);
      ctx.bezierCurveTo(size, topCurveHeight / 2, size / 2, -topCurveHeight, 0, topCurveHeight);
      ctx.fill();
    };

    const drawPetal = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.55, size * 0.9, Math.PI / 4, 0, 2 * Math.PI);
      ctx.fill();
    };

    const drawSparkle = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawStar = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        ctx.lineTo(Math.cos((i * Math.PI) / 2) * size, Math.sin((i * Math.PI) / 2) * size);
        ctx.lineTo(
          Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.3),
          Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.3)
        );
      }
      ctx.closePath();
      ctx.fill();
    };

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Sway motion
        p.swayOffset += p.swaySpeed;
        const sway = Math.sin(p.swayOffset) * 0.8;

        p.y -= p.speedY;
        p.x += p.speedX + sway;
        p.rotation += p.rotationSpeed;

        // Fade in when entering from bottom, fade out when near top
        if (p.y > height - 60) {
          p.opacity = Math.min(p.maxOpacity, p.opacity + 0.02);
        } else if (p.y < 80) {
          p.opacity = Math.max(0, p.opacity - 0.02);
        } else {
          p.opacity = Math.min(p.maxOpacity, p.opacity + 0.01);
        }

        // Wrap around or recreate
        if (p.y < -30 || p.opacity <= 0) {
          if (particles.length > maxParticles) {
            particles.splice(i, 1);
            continue;
          }
          particles[i] = createParticle();
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = `${p.color}${p.opacity})`;

        switch (p.type) {
          case 'heart':
            drawHeart(ctx, p.size);
            break;
          case 'petal':
            drawPetal(ctx, p.size);
            break;
          case 'star':
            drawStar(ctx, p.size);
            break;
          case 'sparkle':
          default:
            drawSparkle(ctx, p.size);
            break;
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handlePointerDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="romantic-particles-canvas"
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
};
