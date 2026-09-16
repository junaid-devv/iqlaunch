"use client";

import * as React from "react";
import { CheckCircle2, Send, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Contact16() {
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 400);
  }

  return (
    <section className="bg-[#030304] text-white py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-lg px-6 sm:px-10 relative z-10">
        {sent ? (
          <div className="flex flex-col items-center gap-4 text-center rounded-2xl border border-white/10 bg-zinc-950/60 p-8 sm:p-10 backdrop-blur-md">
            <span className="grid size-12 place-items-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 className="size-6 text-emerald-400" />
            </span>
            <h2 className="font-bold text-2xl tracking-tight text-white">
              Transmission Received
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Our systems architecture team has logged your inquiry. We will review your technical specifications and respond within 4 business hours.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSent(false)}
              className="mt-2 text-xs border-white/20 text-zinc-300 hover:text-white"
            >
              Send Another Inquiry
            </Button>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-8 sm:p-10 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col gap-2 text-center mb-8">
              <span className="inline-flex items-center justify-center gap-1.5 self-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-mono uppercase tracking-wider text-zinc-400">
                <Sparkles className="size-3 text-white" />
                Direct Channel
              </span>
              <h2 className="font-bold text-3xl tracking-tight text-white sm:text-4xl">
                Initiate Architecture Call
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Whether deploying autonomous AI agents, WhatsApp pipelines, or a custom platform, tell us about your infrastructure goals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="c16-name"
                  className="text-xs font-mono uppercase tracking-wider text-zinc-400"
                >
                  Name
                </label>
                <Input
                  id="c16-name"
                  placeholder="e.g. Alex Morgan"
                  required
                  className="h-11 bg-black/50 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/40"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="c16-email"
                  className="text-xs font-mono uppercase tracking-wider text-zinc-400"
                >
                  Work Email
                </label>
                <Input
                  id="c16-email"
                  type="email"
                  placeholder="alex@enterprise.com"
                  required
                  className="h-11 bg-black/50 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/40"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="c16-msg"
                  className="text-xs font-mono uppercase tracking-wider text-zinc-400"
                >
                  Project Scope &amp; Bottlenecks
                </label>
                <textarea
                  id="c16-msg"
                  rows={4}
                  required
                  placeholder="What operational workflows or platform are you looking to automate or engineer?"
                  className="flex w-full rounded-xl border border-white/10 bg-black/50 px-3.5 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-white/40 focus:outline-none transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="mt-2 w-full rounded-xl bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="size-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

export function Contact16Demo() {
  return <Contact16 />;
}
