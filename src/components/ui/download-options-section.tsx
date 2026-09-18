/* eslint-disable @next/next/no-img-element */
'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Bot, Globe, Smartphone, ArrowUpRight, ArrowRight } from 'lucide-react';

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
  title: string;
  description: string;
  lightImage?: string;
  darkImage?: string;
  mockupImage?: string;
  mockupNode?: React.ReactNode;
  buttons: CardButton[];
  className?: string;
}

// The reusable DownloadCard component with floating animation
export const DownloadCard: React.FC<DownloadCardProps> = ({
  title,
  description,
  lightImage,
  darkImage,
  mockupImage,
  mockupNode,
  buttons,
  className,
}) => {
  return (
    <div
      className={cn(
        'group relative flex w-full flex-col justify-between gap-5 overflow-hidden rounded-2xl border border-white/10 bg-[#09090c]/85 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]',
        className
      )}
    >
      {/* Background Gradient Images / Subtle Backdrops */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {lightImage && (
          <img
            alt="background gradient light"
            className="h-full w-full object-cover opacity-20 transition-all duration-300 group-hover:scale-105 dark:hidden"
            src={lightImage}
          />
        )}
        {darkImage && (
          <img
            alt="background gradient dark"
            className="hidden h-full w-full object-cover opacity-20 transition-all duration-300 group-hover:scale-105 dark:block"
            src={darkImage}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
      </div>

      {/* Card Content Header */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-[260px]">{description}</p>
      </div>

      {/* Animated Floating Mockup Graphic */}
      <div className="relative z-10 mx-auto my-2 w-full max-w-[240px] flex items-center justify-center animate-float">
        {mockupNode ? (
          <div className="w-full transition-transform duration-300 group-hover:scale-105">
            {mockupNode}
          </div>
        ) : (
          <img
            alt={`${title} mockup`}
            className="aspect-square w-full max-w-[180px] rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
            src={mockupImage}
          />
        )}
      </div>

      {/* Action Buttons */}
      <div className="relative z-10 flex w-full flex-col gap-2">
        {buttons.map((button, index) => {
          if (button.href) {
            return (
              <Button
                key={index}
                asChild
                variant={button.variant || 'secondary'}
                className="w-full justify-center text-xs sm:text-sm tracking-wide border border-white/10 hover:border-white/25 hover:bg-white/10 transition-colors"
              >
                <Link href={button.href} className="inline-flex items-center justify-center">
                  {button.icon && <span className="mr-2 inline-flex items-center">{button.icon}</span>}
                  <span>{button.text}</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-60" />
                </Link>
              </Button>
            );
          }

          return (
            <Button
              key={index}
              variant={button.variant || 'secondary'}
              className="w-full justify-center text-xs sm:text-sm tracking-wide border border-white/10 hover:border-white/25 hover:bg-white/10 transition-colors"
              onClick={button.onClick}
            >
              {button.icon && <span className="mr-2 inline-flex items-center">{button.icon}</span>}
              <span>{button.text}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

// The main component that showcases all three pillars of what we build
export const DownloadShowcase: React.FC = () => {
  const capabilities: DownloadCardProps[] = [
    {
      title: 'AI Agents',
      description: 'Autonomous reasoning engines and WhatsApp operations that resolve workflows 24/7.',
      mockupNode: (
        <div className="w-full rounded-xl border border-white/10 bg-[#060608]/90 p-3.5 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[10px] text-zinc-300 tracking-wider">ORDERIQ // ENGINE</span>
            </div>
            <span className="font-mono text-[9px] text-zinc-500">120ms</span>
          </div>
          <div className="mt-2.5 space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between text-zinc-400">
              <span>● Inbound WhatsApp</span>
              <span className="text-emerald-400">Parsed</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>● Tool Calling</span>
              <span className="text-cyan-400">Executed</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>● POS Dispatch</span>
              <span className="text-emerald-400">Synced</span>
            </div>
          </div>
        </div>
      ),
      buttons: [
        {
          text: 'Explore AI Agents',
          icon: <Bot className="h-4 w-4" />,
          href: '/solutions#ai-agents',
        },
      ],
    },
    {
      title: 'Websites',
      description: 'Sub-second Next.js web applications engineered for speed, conversions, and scale.',
      mockupNode: (
        <div className="w-full rounded-xl border border-white/10 bg-[#060608]/90 p-3.5 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-1.5 pb-2 border-b border-white/5">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <div className="ml-2 flex-1 rounded bg-white/5 px-2 py-0.5 font-mono text-[9px] text-zinc-400 truncate">
              iqlaunch.com/portal
            </div>
          </div>
          <div className="mt-2.5 space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between text-zinc-400">
              <span>● Performance</span>
              <span className="text-emerald-400">100 / 100</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>● Architecture</span>
              <span className="text-zinc-200">App Router</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>● Edge Caching</span>
              <span className="text-cyan-400">Global CDN</span>
            </div>
          </div>
        </div>
      ),
      buttons: [
        {
          text: 'Explore Websites',
          icon: <Globe className="h-4 w-4" />,
          href: '/solutions#web-platforms',
        },
      ],
    },
    {
      title: 'Mobile Apps',
      description: 'Bespoke iOS and Android applications built for daily operations and high retention.',
      mockupNode: (
        <div className="w-full rounded-xl border border-white/10 bg-[#060608]/90 p-3.5 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <span className="font-mono text-[10px] text-zinc-400">09:41</span>
            <div className="h-1.5 w-8 rounded-full bg-white/20" />
            <span className="font-mono text-[9px] text-zinc-400">5G</span>
          </div>
          <div className="mt-2.5 space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between text-zinc-400">
              <span>● Native Runtime</span>
              <span className="text-zinc-200">iOS & Android</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>● Offline Sync</span>
              <span className="text-emerald-400">Active</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>● Security</span>
              <span className="text-cyan-400">Biometric</span>
            </div>
          </div>
        </div>
      ),
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
      {/* Keyframes for the floating animation */}
      <style jsx global>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: floatSlow 4s ease-in-out infinite;
        }
      `}</style>

      <section id="capabilities" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]" aria-labelledby="capabilities-heading">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
          {/* Header — Clean and minimal */}
          <div className="flex flex-col items-center text-center max-w-2xl">
            <span className="font-mono text-xs tracking-[0.2em] text-zinc-400 uppercase mb-3">
              02 // What We Build
            </span>
            <h2 id="capabilities-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Intelligent Systems Engineered for Scale
            </h2>
          </div>

          {/* 3-Card Grid */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {capabilities.map((card, index) => (
              <DownloadCard key={index} {...card} />
            ))}
          </div>

          {/* Bottom Primary Action Button */}
          <div className="flex justify-center w-full">
            <Button asChild size="lg" className="w-full max-w-xs rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors">
              <Link href="/solutions">
                <span>View All Specifications</span>
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