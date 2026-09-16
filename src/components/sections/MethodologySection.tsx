"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { iqLaunchTimelineData } from "@/components/ui/demo";
import { Button } from "@/components/ui/button";

export default function MethodologySection() {
  return (
    <section className="relative w-full py-24 sm:py-32 border-t border-white/[0.08] bg-[#030304] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />

      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Methodology & Architecture Copy */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                03 // Engineering Trajectory
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              The Orbital Delivery Engine
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
              We eliminate technical debt before it starts. Every autonomous agent, platform, and automated pipeline evolves through a continuous 5-phase trajectory from raw blueprint to live production telemetry.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-white/10 bg-zinc-950/50 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1.5 text-white font-semibold text-sm">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>Zero Hallucinations</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Strict schema-enforced JSON validation &amp; vector document anchoring.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-zinc-950/50 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1.5 text-white font-semibold text-sm">
                  <Zap className="h-4 w-4 text-white" />
                  <span>Rapid Turnaround</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  First staging milestone delivered within 10–14 business days.
                </p>
              </div>
            </div>

            {/* Micro phase list */}
            <div className="pt-2 border-t border-white/[0.08] space-y-2">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
                <span>Phase 01–02: Architectural schema blueprint &amp; conversational UX design</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
                <span>Phase 03–04: Full-stack Next.js/mobile build with adversarial stress audits</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
                <span>Phase 05: Production deployment, repository handover &amp; 30-day warranty</span>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/contact">
                <Button className="rounded-xl px-6 py-2.5 bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-all flex items-center gap-2 text-sm">
                  <span>Schedule Trajectory Review</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Radial Orbital Graphic */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full relative rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950/80 to-black/95 p-2 sm:p-4 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Corner accent glow */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/[0.04] blur-2xl" />

              {/* Orbital Graphic Component */}
              <RadialOrbitalTimeline
                timelineData={iqLaunchTimelineData}
                compact={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
