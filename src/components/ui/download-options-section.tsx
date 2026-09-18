/* eslint-disable @next/next/no-img-element */
'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn, getAssetPath } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Bot, Globe, Smartphone, ArrowRight } from 'lucide-react';

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
  mockupImage: string;
  mockupClassName?: string;
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
  mockupClassName,
  buttons,
  className,
}) => {
  const resolvedDarkImage = darkImage ? getAssetPath(darkImage) : getAssetPath('/bg-cubes-dark.png');
  const resolvedLightImage = lightImage ? getAssetPath(lightImage) : resolvedDarkImage;
  const resolvedMockup = getAssetPath(mockupImage);

  return (
    <div
      className={cn(
        'group relative flex w-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050507] p-7 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_35px_rgba(255,255,255,0.04)]',
        className
      )}
    >
      {/* Background Gradient & Geometric Wireframe Texture */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {lightImage && (
          <img
            alt="background gradient light"
            className="h-full w-full object-cover opacity-25 transition-all duration-300 group-hover:scale-105 dark:hidden"
            src={resolvedLightImage}
          />
        )}
        <img
          alt="background geometry dark"
          className="h-full w-full object-cover opacity-35 transition-all duration-300 group-hover:scale-105"
          src={resolvedDarkImage}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/40 via-transparent to-[#050507]/90 pointer-events-none" />
      </div>

      {/* Card Header Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
        <p className="mt-1.5 text-sm text-zinc-400 leading-snug">{description}</p>
      </div>

      {/* Animated Floating 3D Mockup */}
      <div className="relative z-10 mx-auto my-2 flex h-[190px] sm:h-[200px] w-full max-w-[210px] items-center justify-center">
        <img
          alt={`${title} mockup`}
          className={cn(
            'animate-float h-full w-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)] transition-transform duration-300 group-hover:scale-105',
            mockupClassName
          )}
          src={resolvedMockup}
        />
      </div>

      {/* Action Buttons */}
      <div className="relative z-10 flex w-full flex-col gap-2.5">
        {buttons.map((button, index) => {
          if (button.href) {
            return (
              <Button
                key={index}
                asChild
                variant={button.variant || 'secondary'}
                className="w-full justify-center rounded-xl border border-white/10 bg-[#18181b]/90 text-sm font-medium text-zinc-200 hover:bg-zinc-800 hover:text-white transition-all py-3 h-auto"
              >
                <Link href={button.href} className="inline-flex items-center justify-center">
                  {button.icon && <span className="mr-2 inline-flex items-center">{button.icon}</span>}
                  <span>{button.text}</span>
                </Link>
              </Button>
            );
          }

          return (
            <Button
              key={index}
              variant={button.variant || 'secondary'}
              className="w-full justify-center rounded-xl border border-white/10 bg-[#18181b]/90 text-sm font-medium text-zinc-200 hover:bg-zinc-800 hover:text-white transition-all py-3 h-auto"
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

// The main showcase component configured for What We Build: AI Agents, Websites, Mobile Apps
export const DownloadShowcase: React.FC = () => {
  const downloadOptions: DownloadCardProps[] = [
    {
      title: 'AI Agents',
      description: 'Autonomous reasoning & WhatsApp workflows',
      darkImage: '/bg-cubes-dark.png',
      mockupImage: '/agent.png',
      mockupClassName: 'mix-blend-screen',
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
      description: 'Modern platforms engineered to convert',
      darkImage: '/bg-cubes-dark.png',
      mockupImage: '/website.png',
      mockupClassName: 'mix-blend-screen',
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
      description: 'iOS & Android applications for operations',
      darkImage: '/bg-cubes-dark.png',
      mockupImage: '/mobile-mockup.webp',
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
        @keyframes floatEffect {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: floatEffect 4s ease-in-out infinite;
        }
      `}</style>

      <section
        id="capabilities"
        className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] bg-[#030304]"
        aria-labelledby="capabilities-heading"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
          {/* Header — Clean and minimal, exactly like the reference */}
          <div className="flex flex-col items-center text-center max-w-xl">
            <h2 id="capabilities-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              What We Build
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400">
              Autonomous AI agents, high-conversion websites, and custom mobile apps.
            </p>
          </div>

          {/* 3-Card Grid matching the exact reference UI */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {downloadOptions.map((card, index) => (
              <DownloadCard key={index} {...card} />
            ))}
          </div>

          {/* Bottom Action Button matching reference 'Continue' button */}
          <div className="flex justify-center w-full pt-2">
            <Button
              asChild
              size="lg"
              className="w-full max-w-xs rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors shadow-lg"
            >
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