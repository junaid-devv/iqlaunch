'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Check, Zap, Server } from 'lucide-react';

export default function OrderIQSpotlight() {
  return (
    <section className="relative w-full py-24 sm:py-32 border-t border-white/[0.08] bg-[#070709] overflow-hidden" aria-labelledby="orderiq-heading">
      <div className="container mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Thesis & Telemetry */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                03 // Flagship Digital Product
              </span>
            </div>

            <h2 id="orderiq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              OrderIQ — The WhatsApp AI Ordering Platform
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
              Engineered and operated by iQLaunch, OrderIQ eliminates customer friction for hospitality and multi-location businesses. Diners browse menus, make dietary requests, and confirm orders directly on WhatsApp—automatically dispatching to kitchen displays and POS terminals.
            </p>

            {/* 3-Metric Architectural Telemetry */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="rounded-xl border border-white/[0.08] bg-[#0e0e13] p-4 text-center">
                <span className="block font-mono text-2xl font-bold text-white tracking-tight">0</span>
                <span className="block mt-1 font-mono text-[11px] text-zinc-400 uppercase tracking-wide">
                  Apps to Download
                </span>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#0e0e13] p-4 text-center">
                <span className="block font-mono text-2xl font-bold text-white tracking-tight">&lt;10s</span>
                <span className="block mt-1 font-mono text-[11px] text-zinc-400 uppercase tracking-wide">
                  Order Execution
                </span>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#0e0e13] p-4 text-center">
                <span className="block font-mono text-2xl font-bold text-white tracking-tight">100%</span>
                <span className="block mt-1 font-mono text-[11px] text-zinc-400 uppercase tracking-wide">
                  POS Automated
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Button asChild size="lg" className="rounded-full px-8 py-3 bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors inline-flex items-center gap-2 text-sm shadow-md">
                <Link href="/digital-products">
                  <span>Explore OrderIQ Specifications</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Architectural Console Preview */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full relative rounded-2xl border border-white/[0.08] bg-[#0e0e13] p-6 shadow-2xl transition-all hover:border-white/20">
              {/* Top Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="ml-2 font-mono text-xs text-zinc-400">OrderIQ Terminal // Meta Cloud API</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE RUNTIME
                </span>
              </div>

              {/* Chat Simulation Content */}
              <div className="mt-5 space-y-3.5">
                {/* Customer Message */}
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="rounded-2xl rounded-tr-sm bg-zinc-800/80 px-4 py-2.5 text-xs text-zinc-200 max-w-[85%] border border-white/5">
                    Can I get 2 Wagyu Truffle Burgers with no onions and 1 garlic truffle fries?
                  </div>
                </div>

                {/* Agent Response */}
                <div className="flex items-start gap-2.5">
                  <div className="h-7 w-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <MessageSquare className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-[#15151c] px-4 py-3 text-xs text-zinc-300 max-w-[85%] border border-white/[0.08] space-y-2">
                    <p>Got it! 2x Wagyu Truffle Burgers (no onions) + 1x Garlic Truffle Fries added to table order.</p>
                    <div className="rounded-lg bg-black/40 p-2.5 font-mono text-[11px] text-zinc-400 space-y-1 border border-white/[0.04]">
                      <div className="flex justify-between text-zinc-200">
                        <span>Total (Incl. Tax)</span>
                        <span>$48.50</span>
                      </div>
                      <div className="text-[10px] text-emerald-400 flex items-center gap-1 pt-1">
                        <Check className="h-3 w-3" /> Dispatched to Kitchen Display System (Station 02)
                      </div>
                    </div>
                  </div>
                </div>

                {/* POS Telemetry Tag */}
                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Server className="h-3 w-3 text-zinc-400" /> POS Node Sync: 120ms
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-zinc-400" /> Zero Human Delay
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
