'use client';

import React from 'react';
import { FileText, Cpu, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    phase: 'Audit & Blueprint',
    timeline: 'Days 1–3',
    icon: FileText,
    description:
      'We audit your actual business workflows, identify high-friction bottlenecks, and architect strict deterministic data schemas.',
  },
  {
    number: '02',
    phase: 'Cognitive Architecture',
    timeline: 'Week 1–2',
    icon: Cpu,
    description:
      'Designing conversational state machines, tool-calling function signatures, and high-conversion UX wireframes.',
  },
  {
    number: '03',
    phase: 'Full-Stack Engineering',
    timeline: 'Weeks 2–4',
    icon: Code2,
    description:
      'Developing sub-second Next.js web applications, integrating Meta Cloud APIs, and compiling native iOS & Android binaries.',
  },
  {
    number: '04',
    phase: 'Production & Handover',
    timeline: 'Week 5+',
    icon: Rocket,
    description:
      'Live deployment, 100% source repository handover with zero vendor lock-in, and automated 24/7 telemetry monitoring.',
  },
];

export default function ProcessSection() {
  return (
    <section className="relative w-full py-24 sm:py-32 border-t border-white/[0.08] bg-[#070709]" aria-labelledby="process-heading">
      <div className="container mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.24em] text-zinc-400 uppercase mb-3">
            04 // Delivery Trajectory
          </span>
          <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            How We Engineer Your Systems
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            A structured, 4-phase trajectory from initial operational audit to autonomous production scale.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#121217]"
              >
                {/* Top Number & Timeline */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-xs text-zinc-400 font-semibold">{step.number}</span>
                    <span className="font-mono text-[10px] text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                      {step.timeline}
                    </span>
                  </div>

                  <div className="my-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-white mb-2">{step.phase}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
