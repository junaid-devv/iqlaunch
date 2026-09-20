'use client';

import React from 'react';
import { ShieldCheck, Cpu, Zap, Lock } from 'lucide-react';

const guarantees = [
  {
    icon: ShieldCheck,
    title: '100% Source Code Ownership',
    description:
      'We hand over the full GitHub repository, CI/CD pipelines, and IP from day one. You are never held hostage by proprietary agency systems.',
  },
  {
    icon: Cpu,
    title: 'Deterministic Logic First',
    description:
      'AI models handle natural language context; robust code handles business logic and financial transactions. Zero hallucinations in production.',
  },
  {
    icon: Zap,
    title: 'Sub-200ms Target Latency',
    description:
      'Every web platform is built on Next.js App Router with global edge caching and optimized payload delivery for high conversion and speed.',
  },
  {
    icon: Lock,
    title: 'Zero Vendor Lock-in',
    description:
      'We build strictly with open-standard TypeScript, React, Next.js, and native iOS/Android codebases that any engineering team can extend.',
  },
];

export default function GuaranteesSection() {
  return (
    <section className="relative w-full py-24 sm:py-32 border-t border-white/[0.08] bg-[#070709]" aria-labelledby="guarantees-heading">
      <div className="container mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.24em] text-zinc-400 uppercase mb-3">
            05 // Engineering Standards
          </span>
          <h2 id="guarantees-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Built for Enduring Reliability
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Non-negotiable principles engineered into every digital platform, agent, and application we deploy.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#121217]"
              >
                <div>
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
