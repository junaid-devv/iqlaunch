"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "Who owns the code, models, and intellectual property?",
    a: "You own 100% of all code, custom model prompts, architectures, and intellectual property upon delivery. All repositories are handed over to your GitHub organization with zero vendor lock-in and no recurring proprietary licensing fees.",
  },
  {
    q: "How do your autonomous AI agents prevent hallucinations?",
    a: "We engineer deterministic guardrails: semantic caching, retrieval-augmented generation (RAG) restricted to vetted vector knowledge bases, strict JSON schema output validation, and automated fallback protocols that escalate low-confidence queries to human teams.",
  },
  {
    q: "How fast can an automated system or platform be launched?",
    a: "Most targeted automations (such as WhatsApp ordering or conversational AI agents) reach staging within 10 to 14 business days. Comprehensive web platforms and cross-platform mobile apps typically go live in 4 to 6 weeks under our orbital trajectory.",
  },
  {
    q: "Can you connect with our existing ERP, CRM, or custom database?",
    a: "Yes. We build custom API connectors, webhooks, and secure middleware pipelines that interface seamlessly with PostgreSQL, MySQL, Supabase, Salesforce, HubSpot, Shopify, or proprietary on-premise infrastructure.",
  },
  {
    q: "What warranty and support do you provide after launch?",
    a: "Every deployment includes 30 days of active post-launch support and bug fixes at zero additional cost, backed by 24/7 automated uptime telemetry. We also offer dedicated monthly SLA maintenance retainers for evolving enterprise operations.",
  },
];

export default function Faqs01({ defaultValue }: { defaultValue?: string }) {
  return (
    <section className="bg-[#030304] text-white py-20 sm:py-28 relative border-t border-white/[0.08]">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900/80 px-3 py-1 text-xs font-mono uppercase tracking-wider text-zinc-400 shadow-sm">
            <Sparkles className="size-3 text-white" />
            Engineering Clarity
          </span>
          <h2
            className="text-balance font-bold tracking-tight text-white"
            style={{
              fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl text-balance text-zinc-400 text-sm sm:text-base leading-relaxed">
            Straightforward answers about our autonomous AI architecture, delivery timelines, code ownership, and enterprise SLAs.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-12 space-y-3"
          defaultValue={defaultValue}
        >
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border border-white/[0.08] bg-zinc-950/40 rounded-xl px-5 backdrop-blur-sm transition-colors hover:border-white/20"
            >
              <AccordionTrigger className="text-sm sm:text-base font-semibold text-white hover:no-underline py-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-zinc-400 leading-relaxed pb-4 pt-1">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-white/15 bg-zinc-950/60 p-6 sm:flex-row backdrop-blur-sm">
          <div className="flex items-center gap-3.5">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-zinc-950">
              <MessageCircle className="size-5" />
            </span>
            <div className="flex flex-col leading-tight">
              <p className="text-sm font-semibold text-white">
                Have a specific infrastructure question?
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">
                Our lead engineers reply within four business hours.
              </p>
            </div>
          </div>
          <Link href="/contact">
            <Button size="sm" className="rounded-xl px-5 bg-white text-zinc-950 hover:bg-zinc-200 font-medium text-xs sm:text-sm flex items-center gap-1.5">
              <span>Ask an Architect</span>
              <ArrowRight className="size-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Faqs01Demo() {
  return <Faqs01 />;
}
