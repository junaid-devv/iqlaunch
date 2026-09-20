/* eslint-disable @next/next/no-img-element */
'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn, getAssetPath } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Bot, Globe, Smartphone, ArrowRight, ArrowUpRight } from 'lucide-react';

// Defines the props for a single button within a card
export interface CardButton {
  text: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'secondary' | 'ghost' | 'outline' | 'link';
  onClick?: () => void;
  href?: string;
}

// Defines the props for a single showcase card
export interface DownloadCardProps {
  indexNumber?: string;
  categoryTag?: string;
  title: string;
  description: string;
  lightImage?: string;
  darkImage?: string;
  mockupImage: string;
  mockupClassName?: string;
  capabilities?: string[];
  buttons: CardButton[];
  className?: string;
}

// The reusable DownloadCard component with architectural surface elevation and floating animation
export const DownloadCard: React.FC<DownloadCardProps> = ({
  indexNumber,
  categoryTag,
  title,
  description,
  lightImage,
  darkImage,
  mockupImage,
  mockupClassName,
  capabilities,
  buttons,
  className,
}) => {
  const resolvedDarkImage = darkImage ? getAssetPath(darkImage) : getAssetPath('/bg-cubes-dark.png');
  const resolvedLightImage = lightImage ? getAssetPath(lightImage) : resolvedDarkImage;
  const resolvedMockup = getAssetPath(mockupImage);

  return (
    <div
      className={cn(
        'group relative flex w-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121217]',
        'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
        className
      )}
    >
      {/* Background Subtle Geometric Texture & Soft Monochrome Ambient Illumination */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {lightImage && (
          <img
            alt="background light"
            className="h-full w-full object-cover opacity-20 transition-all duration-300 group-hover:scale-105 dark:hidden"
            src={resolvedLightImage}
          />
        )}
        <img
          alt="background geometry"
          className="h-full w-full object-cover opacity-30 transition-all duration-300 group-hover:scale-105"
          src={resolvedDarkImage}
        />
        {/* Soft focal backlight to illuminate the floating mockup with zero neon slop */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full bg-white/[0.03] blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d12]/60 via-transparent to-[#0d0d12]/95 pointer-events-none" />
      </div>

      {/* Card Header & Index */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {(indexNumber || categoryTag) && (
          <div className="mb-2 flex items-center gap-2 font-mono text-[11px] tracking-wider text-zinc-400">
            {indexNumber && <span>{indexNumber}</span>}
            {indexNumber && categoryTag && <span className="text-zinc-600">{'//'}</span>}
            {categoryTag && <span className="text-zinc-300 uppercase">{categoryTag}</span>}
          </div>
        )}
        <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
        <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-[280px]">{description}</p>
      </div>

      {/* Animated Floating 3D Mockup */}
      <div className="relative z-10 mx-auto my-1 flex h-[190px] sm:h-[205px] w-full max-w-[215px] items-center justify-center">
        <img
          alt={`${title} mockup`}
          className={cn(
            'animate-float h-full w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] transition-transform duration-300 group-hover:scale-105',
            mockupClassName
          )}
          src={resolvedMockup}
        />
      </div>

      {/* Architectural Capability Pills */}
      {capabilities && capabilities.length > 0 && (
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-1.5 pt-1">
          {capabilities.map((cap, i) => (
            <span
              key={i}
              className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] text-zinc-400 tracking-wide transition-colors group-hover:border-white/[0.14] group-hover:text-zinc-300"
            >
              {cap}
            </span>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="relative z-10 flex w-full flex-col gap-2 pt-1">
        {buttons.map((button, index) => {
          if (button.href) {
            return (
              <Button
                key={index}
                asChild
                variant={button.variant || 'secondary'}
                className="w-full justify-center rounded-xl border border-white/10 bg-zinc-900/90 text-xs sm:text-sm font-medium text-zinc-200 hover:bg-zinc-800 hover:text-white hover:border-white/25 transition-all py-3 h-auto shadow-sm"
              >
                <Link href={button.href} className="inline-flex items-center justify-center">
                  {button.icon && <span className="mr-2 inline-flex items-center text-zinc-400 group-hover:text-white">{button.icon}</span>}
                  <span>{button.text}</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            );
          }

          return (
            <Button
              key={index}
              variant={button.variant || 'secondary'}
              className="w-full justify-center rounded-xl border border-white/10 bg-zinc-900/90 text-xs sm:text-sm font-medium text-zinc-200 hover:bg-zinc-800 hover:text-white hover:border-white/25 transition-all py-3 h-auto shadow-sm"
              onClick={button.onClick}
            >
              {button.icon && <span className="mr-2 inline-flex items-center text-zinc-400 group-hover:text-white">{button.icon}</span>}
              <span>{button.text}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

// The main showcase component configured for What We Build: AI Agents, Websites, Mobile Apps
export const DownloadShowcase: React.FC = () => {
  const downloadOptions: DownloadCardProps[] = [
    {
      indexNumber: '01',
      categoryTag: 'INTELLIGENCE',
      title: 'Autonomous AI Agents',
      description: 'Multi-turn reasoning engines and WhatsApp automation that resolve workflows with zero human intervention.',
      darkImage: '/bg-cubes-dark.png',
      mockupImage: '/agent.png',
      mockupClassName: 'mix-blend-screen',
      capabilities: ['WhatsApp Cloud API', 'Tool Calling & Schema', 'POS Dispatch', '24/7 Autonomy'],
      buttons: [
        {
          text: 'Explore AI Agents',
          icon: <Bot className="h-4 w-4" />,
          href: '/solutions#ai-agents',
        },
      ],
    },
    {
      indexNumber: '02',
      categoryTag: 'PLATFORMS',
      title: 'Modern Web Platforms',
      description: 'Sub-second Next.js web applications engineered for high conversion, edge delivery, and enterprise scale.',
      darkImage: '/bg-cubes-dark.png',
      mockupImage: '/website.png',
      mockupClassName: 'mix-blend-screen',
      capabilities: ['Next.js App Router', 'Sub-200ms TTFB', 'Global Edge CDN', 'Zero Tech Debt'],
      buttons: [
        {
          text: 'Explore Web Platforms',
          icon: <Globe className="h-4 w-4" />,
          href: '/solutions#web-platforms',
        },
      ],
    },
    {
      indexNumber: '03',
      categoryTag: 'MOBILE ECOSYSTEM',
      title: 'Custom Mobile Apps',
      description: 'Bespoke iOS and Android applications built for daily business operations, offline sync, and high retention.',
      darkImage: '/bg-cubes-dark.png',
      mockupImage: '/mobile-mockup.webp',
      capabilities: ['iOS & Android Native', 'Offline-First Sync', 'Biometric Auth', 'Continuous Telemetry'],
      buttons: [
        {
          text: 'Explore Mobile Apps',
          icon: <Smartphone className="h-4 w-4" />,
          href: '/solutions#mobile-apps',
        },
      ],
    },
  ];

  return (
    <>
      {/* Keyframes for the subtle floating animation */}
      <style jsx global>{`
        @keyframes floatSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }
        .animate-float {
          animation: floatSubtle 4.5s ease-in-out infinite;
        }
      `}</style>

      <section
        id="capabilities"
        className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] bg-[#070709]"
        aria-labelledby="capabilities-heading"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
          {/* Header — Minimalist, professional typography with monochrome clarity */}
          <div className="flex flex-col items-center text-center max-w-xl">
            <span className="font-mono text-xs tracking-[0.24em] text-zinc-400 uppercase mb-3">
              02 // Core Capabilities
            </span>
            <h2 id="capabilities-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              What We Build
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
              Autonomous AI agents, high-conversion websites, and custom mobile apps engineered for operational certainty.
            </p>
          </div>

          {/* 3-Card Grid with elevated graphite contrast */}
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
            {downloadOptions.map((card, index) => (
              <DownloadCard key={index} {...card} />
            ))}
          </div>

          {/* Bottom Action Button — Minimalist white pill */}
          <div className="flex justify-center w-full pt-2">
            <Button
              asChild
              size="lg"
              className="w-full max-w-xs rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors shadow-md"
            >
              <Link href="/solutions">
                <span>View Full Specifications</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export const WhatWeBuildShowcase = DownloadShowcase;
export default DownloadShowcase;