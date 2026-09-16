/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Smartphone } from 'lucide-react';

export interface ServiceCardProps {
  title: string;
  description: string;
  visual: React.ReactNode;
  ctaText: string;
  ctaHref: string;
  specsHref: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  visual,
  ctaText,
  ctaHref,
  specsHref,
}) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-zinc-950/50 p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-zinc-950/80">
      <div>
        {/* Header */}
        <h3 className="text-xl font-semibold tracking-tight text-white mb-2">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed min-h-[40px]">{description}</p>

        {/* Minimal Graphic */}
        <div className="my-8 flex h-48 items-center justify-center">
          <div className="w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            {visual}
          </div>
        </div>
      </div>

      {/* Single Clean Guided CTA & Specs Link */}
      <div className="flex flex-col gap-3 pt-2">
        <Link
          href={ctaHref}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-medium text-zinc-950 transition-all duration-200 hover:bg-zinc-200"
        >
          <span>{ctaText}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href={specsHref}
          className="text-center text-xs text-zinc-500 hover:text-zinc-300 transition-colors py-1"
        >
          View Specifications →
        </Link>
      </div>
    </div>
  );
};

export const ServicesShowcase = () => {
  const services: ServiceCardProps[] = [
    {
      title: 'AI Agents',
      description: 'Autonomous systems that handle customer support, workflows, and business logic around the clock.',
      ctaText: 'Deploy AI Agents',
      ctaHref: '/contact?service=ai-agents',
      specsHref: '/solutions',
      visual: (
        <div className="relative flex h-36 w-36 items-center justify-center">
          {/* Ambient glow */}
          <div className="absolute inset-0 rounded-full bg-white/[0.04] blur-xl" />
          <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/60 shadow-xl backdrop-blur-md">
            {/* Minimal node diagram */}
            <div className="relative flex flex-col items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                <Bot className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] tracking-wider text-zinc-300">AUTONOMOUS</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Websites & Platforms',
      description: 'Modern, high-velocity web platforms engineered for sub-second speeds, SEO, and maximum conversion.',
      ctaText: 'Build Website',
      ctaHref: '/contact?service=website',
      specsHref: '/digital-products',
      visual: (
        <div className="relative flex h-36 w-48 items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-white/[0.03] blur-xl" />
          <div className="relative w-full rounded-xl border border-white/10 bg-zinc-900/60 p-3 shadow-xl backdrop-blur-md">
            {/* Window header */}
            <div className="flex items-center gap-1.5 pb-2.5 border-b border-white/[0.06] mb-2.5">
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <div className="h-1.5 w-20 rounded bg-white/10 ml-2" />
            </div>
            {/* Minimal wireframe preview */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="h-2 w-16 rounded bg-white/20" />
                <span className="font-mono text-[10px] text-emerald-400">0.8s load</span>
              </div>
              <div className="h-8 w-full rounded bg-white/[0.04] border border-white/[0.04] flex items-center px-2">
                <div className="h-1.5 w-full bg-gradient-to-r from-white/30 via-white/10 to-transparent rounded" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Mobile Applications',
      description: 'Native iOS and Android mobile experiences designed for fluid interaction and offline operations.',
      ctaText: 'Build Mobile App',
      ctaHref: '/contact?service=mobile-app',
      specsHref: '/digital-products#mobile',
      visual: (
        <div className="relative flex h-36 w-32 items-center justify-center">
          <div className="absolute inset-0 rounded-3xl bg-white/[0.03] blur-xl" />
          <div className="relative h-36 w-24 rounded-2xl border border-white/15 bg-zinc-900/80 p-2 shadow-xl backdrop-blur-md flex flex-col justify-between">
            {/* Dynamic Island */}
            <div className="mx-auto h-2 w-7 rounded-full bg-black border border-white/10" />
            {/* Minimal screen content */}
            <div className="space-y-1.5 my-auto">
              <div className="h-6 w-full rounded-lg bg-white/[0.06] border border-white/[0.06] flex items-center justify-center">
                <Smartphone className="h-3 w-3 text-zinc-300" />
              </div>
              <div className="h-1.5 w-12 mx-auto rounded bg-white/20" />
            </div>
            {/* Home bar */}
            <div className="mx-auto h-1 w-6 rounded-full bg-white/30" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="relative w-full bg-[#030304] py-24 px-6 sm:px-8 lg:px-12 border-b border-white/[0.08] scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Minimal Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Services
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-lg">
            Engineering intelligence and software built for scale.
          </p>
        </div>

        {/* 3 Minimal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const DownloadShowcase = ServicesShowcase;
export default ServicesShowcase;