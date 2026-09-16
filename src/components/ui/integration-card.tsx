"use client";

import React, { useId } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VisualContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface TeamCardProps {
  visual: React.ReactNode;
  title: string;
  description: string;
  url: string;
  className?: string;
}

interface IntegrationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
  path: string;
  delay: number;
}

// Custom SVGs for enterprise integrations
const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const OpenAILogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const NextjsLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 8l8 8" />
    <path d="M16 8v8" />
  </svg>
);

const SupabaseLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const StripeLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const integrations: IntegrationItem[] = [
  {
    id: "whatsapp",
    label: "WhatsApp Cloud API",
    icon: WhatsAppLogo,
    x: 110,
    y: 85,
    path: "M 270 205 V 100 Q 270 85 255 85 H 110",
    delay: 0.1,
  },
  {
    id: "openai",
    label: "OpenAI & Anthropic LLMs",
    icon: OpenAILogo,
    x: 370,
    y: 70,
    path: "M 294 205 V 85 Q 294 70 309 70 H 370",
    delay: 0.2,
  },
  {
    id: "nextjs",
    label: "Next.js Edge Platforms",
    icon: NextjsLogo,
    x: 150,
    y: 205,
    path: "M 250 205 H 150",
    delay: 0.3,
  },
  {
    id: "supabase",
    label: "Postgres & Vector DB",
    icon: SupabaseLogo,
    x: 480,
    y: 205,
    path: "M 314 205 H 480",
    delay: 0.4,
  },
  {
    id: "stripe",
    label: "Stripe Automated Billing",
    icon: StripeLogo,
    x: 282,
    y: 345,
    path: "M 282 205 V 345",
    delay: 0.5,
  },
  {
    id: "telemetry",
    label: "24/7 Ops Telemetry",
    icon: Zap,
    x: 450,
    y: 330,
    path: "M 314 215 V 315 Q 314 330 329 330 H 450",
    delay: 0.6,
  },
];

const AnimatedPath = ({ d, id }: { d: string; id: string }) => {
  return (
    <>
      <path
        d={d}
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
        fill="none"
      />
      <motion.path
        d={d}
        stroke={`url(#${id})`}
        strokeWidth="2"
        fill="none"
        strokeDasharray="40 160"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: -200 }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 2,
        }}
      />
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="transparent" />
          <stop
            offset="50%"
            stopColor="#FFFFFF"
            stopOpacity="0.8"
          />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </>
  );
};

export function Integration() {
  const containerId = useId();

  return (
    <div className="relative h-full w-full select-none">
      {/* SVG Animated Connector Lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 564 410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {integrations.map((integration) => (
          <AnimatedPath
            key={integration.id}
            d={integration.path}
            id={`${containerId}-${integration.id}`}
          />
        ))}
      </svg>

      {/* Central Core Logo */}
      <div className="absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/20 bg-zinc-950 p-2 shadow-2xl">
        <div className="border border-white/20 p-2 sm:p-3 rounded-xl bg-black/80 flex flex-col items-center justify-center min-w-[58px] sm:min-w-[72px]">
          <span className="font-bold text-sm sm:text-base tracking-tighter text-white">iQL</span>
          <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400 uppercase tracking-widest">CORE</span>
        </div>
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-white/20"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Peripheral Connected Ecosystem Nodes */}
      {integrations.map((integration) => {
        const Icon = integration.icon;
        return (
          <motion.div
            key={integration.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: integration.delay, duration: 0.4 }}
            style={{
              left: `${(integration.x / 564) * 100}%`,
              top: `${(integration.y / 410) * 100}%`,
            }}
            className="group absolute z-10 flex h-9 w-9 sm:h-12 sm:w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/15 bg-zinc-950/90 shadow-lg text-white hover:border-white hover:scale-110 transition-all cursor-pointer"
            title={integration.label}
          >
            <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-300 group-hover:text-white transition-colors" />
          </motion.div>
        );
      })}
    </div>
  );
}

export function VisualContainer({ children, className }: VisualContainerProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-[564/420] w-full items-center justify-center overflow-hidden rounded-t-2xl bg-zinc-950/70 p-6 sm:p-8 border-b border-white/10",
        className
      )}
    >
      {/* Ambient Grid Background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export const IntegrationCard = ({
  visual,
  title,
  description,
  url,
  className,
}: TeamCardProps) => {
  return (
    <Card className={cn("mx-auto flex w-full flex-col max-w-xl rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/60 shadow-2xl backdrop-blur-md", className)}>
      <VisualContainer>{visual}</VisualContainer>

      <CardContent className="p-6 sm:p-8 flex flex-col gap-5 sm:gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
              Verified Ecosystem
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {title}
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-zinc-500">
            Sub-20ms Edge Execution SLA
          </span>
          <Link href={url}>
            <Button
              size="sm"
              className="rounded-full px-5 bg-white text-zinc-950 hover:bg-zinc-200 font-medium text-xs flex items-center gap-1.5"
            >
              <span>Explore Connectors</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export function IntegrationCardDemo() {
  return (
    <div className="flex items-center justify-center w-full py-8 px-4 sm:px-6">
      <IntegrationCard
        visual={<Integration />}
        title="Autonomous Integration Fabric"
        description="We link your conversational AI agents, WhatsApp workflows, and internal databases into a single deterministic software pipeline without fragile glue code."
        url="/solutions"
      />
    </div>
  );
}

export default IntegrationCardDemo;
