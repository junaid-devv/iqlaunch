"use client";

import React from "react";
import { Integration, IntegrationCard } from "@/components/ui/integration-card";

export default function IntegrationsSection() {
  return (
    <section className="relative w-full py-24 sm:py-32 border-t border-white/[0.08] bg-[#030304] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-3xl" />

      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              04 // Ecosystem Connectivity
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Autonomous Integration Fabric
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Your systems don&apos;t exist in a silo. We bridge WhatsApp business messaging, LLM reasoning engines, real-time databases, and automated billing into one synchronized runtime.
          </p>
        </div>

        <div className="w-full flex items-center justify-center">
          <IntegrationCard
            visual={<Integration />}
            title="Unified Operational Pipeline"
            description="Direct connectors to Meta WhatsApp Cloud APIs, OpenAI/Anthropic models, PostgreSQL vector stores, and Stripe fulfillment. Built for zero data leakage and sub-second execution."
            url="/solutions"
          />
        </div>
      </div>
    </section>
  );
}
