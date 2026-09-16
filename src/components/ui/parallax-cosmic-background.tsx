'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ParallaxComponentProps {
  head?: string;
  text?: string;
  children?: React.ReactNode;
  className?: string;
  standalone?: boolean;
  loop?: boolean;
}

export const ParallaxComponent: React.FC<ParallaxComponentProps> = ({
  head = 'iQLaunch',
  text = 'BUILD LESS. AUTOMATE MORE.',
  children,
  className = '',
  loop = true,
}) => {
  const [smallStars, setSmallStars] = useState<string>('');
  const [mediumStars, setMediumStars] = useState<string>('');
  const [bigStars, setBigStars] = useState<string>('');

  const textParts = text
    ? text
        .replace(/[/|]/g, ' ')
        .split(/[.,]/)
        .map((p) => p.trim())
        .filter(Boolean)
    : [];

  const isIQLaunch = head.toLowerCase() === 'iqlaunch';

  // Generate randomized star coordinates for pure CSS animated starfield
  const generateStarBoxShadow = (count: number): string => {
    const shadows: string[] = [];
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 2400);
      const y = Math.floor(Math.random() * 2400);
      const opacity = (Math.random() * 0.55 + 0.25).toFixed(2);
      shadows.push(`${x}px ${y}px rgba(255, 255, 255, ${opacity})`);
    }
    return shadows.join(', ');
  };

  useEffect(() => {
    setSmallStars(generateStarBoxShadow(700));
    setMediumStars(generateStarBoxShadow(220));
    setBigStars(generateStarBoxShadow(90));

    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty(
        '--animation-iteration',
        loop ? 'infinite' : '1'
      );
    }
  }, [loop]);

  return (
    <div className={`relative w-full h-screen bg-[#030304] select-none text-white overflow-hidden ${className}`}>
      {/* Deep Space Radial Nebula Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.08),rgba(255,255,255,0))] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(18,18,22,0.35),rgba(3,3,4,0.98))] pointer-events-none z-0" />

      {/* Layer 1: Ambient Streaming Stars (Pure CSS, rock-solid stable) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <div
          id="stars"
          style={{ boxShadow: smallStars }}
          className="w-[1px] h-[1px] bg-transparent animate-[animStar_70s_linear_infinite]"
        />
        <div
          id="stars2"
          style={{ boxShadow: mediumStars }}
          className="w-[2px] h-[2px] bg-transparent animate-[animStar_110s_linear_infinite]"
        />
        <div
          id="stars3"
          style={{ boxShadow: bigStars }}
          className="w-[3px] h-[3px] bg-transparent animate-[animStar_160s_linear_infinite]"
        />
      </div>

      {/* Layer 2: Orbital Trajectory Concentric Rings (Lowered to match headline) */}
      <div className="absolute top-[54%] sm:top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center z-[2]">
        <div className="w-[360px] sm:w-[560px] md:w-[720px] h-[360px] sm:h-[560px] md:h-[720px] rounded-full border border-white/[0.04] pointer-events-none" />
        <div className="absolute w-[240px] sm:w-[390px] md:w-[500px] h-[240px] sm:h-[390px] md:h-[500px] rounded-full border border-dashed border-white/[0.03] pointer-events-none" />
      </div>

      {/* Layer 3: Lowered Horizon Arc & Earth Curvature (Positioned lower on screen) */}
      <div className="absolute inset-0 pointer-events-none z-[10] flex items-center justify-center overflow-hidden">
        {/* Atmospheric rim subtle radial glow */}
        <div className="absolute top-[58%] sm:top-[60%] md:top-[62%] left-1/2 -translate-x-1/2 w-full sm:w-4/5 h-28 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05)_0%,transparent_65%)] pointer-events-none" />
        
        {/* Earth curvature crest lowered comfortably */}
        <div
          id="earth"
          className="absolute top-[62%] sm:top-[64%] md:top-[66%] left-1/2 -translate-x-1/2 w-[220%] sm:w-[180%] md:w-[150%] h-[120%] rounded-[100%] bg-gradient-to-b from-[#0c0c10] via-[#060608] to-[#020203] border-t border-white/[0.08] shadow-[0_-15px_50px_rgba(255,255,255,0.02)]"
        />
      </div>

      {/* Layer 4: Central Unified Content — Completely Static (Zero parallax, lowered position) */}
      <div className="absolute top-[52%] sm:top-[54%] md:top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[30] flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl mx-auto">
        {/* Main Headline — Exactly like the logo */}
        {isIQLaunch ? (
          <h1 id="title" className="select-none flex items-center justify-center mx-auto">
            <Image
              src="/logo-white.png"
              alt="iQLaunch"
              width={714}
              height={153}
              priority
              className="w-[280px] sm:w-[420px] md:w-[540px] lg:w-[620px] h-auto max-w-[90vw] object-contain select-none filter-none drop-shadow-none mx-auto block"
            />
          </h1>
        ) : (
          <h1
            id="title"
            className="font-bold text-white tracking-tight text-5xl sm:text-7xl md:text-8xl select-none leading-none mx-auto"
          >
            {head}
          </h1>
        )}

        {/* Subtitle — Clean, font-mono, no slashes, strictly centered */}
        {textParts.length > 0 && (
          <div
            id="subtitle"
            className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm md:text-base font-mono font-medium tracking-[0.24em] text-zinc-300 select-none filter-none"
          >
            {textParts.map((part, index) => (
              <span key={index}>{part.toUpperCase()}</span>
            ))}
          </div>
        )}

        {/* Action Buttons — Matte, pure monochrome, completely in front */}
        <div className="mt-7 sm:mt-9 w-full flex justify-center">
          {children || (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-zinc-950 font-medium text-sm tracking-wide transition-colors duration-200 hover:bg-zinc-200"
              >
                <span>Start Building</span>
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="#capabilities"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent hover:bg-white/[0.06] border border-white/20 text-zinc-300 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200"
              >
                Explore Systems
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const CosmicParallaxBg = ParallaxComponent;
export default ParallaxComponent;
