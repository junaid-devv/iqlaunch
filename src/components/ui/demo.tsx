'use client';

import React from 'react';
import { FileText, Sparkles, Code, ShieldCheck, Rocket } from 'lucide-react';
import RadialOrbitalTimeline, { TimelineItem } from '@/components/ui/radial-orbital-timeline';
import { DownloadShowcase } from '@/components/ui/download-options-section';

export const iqLaunchTimelineData: TimelineItem[] = [
  {
    id: 1,
    title: '01 // Blueprinting',
    date: 'Days 1–3',
    content: 'Auditing operational workflows, mapping data dependencies, and defining the deterministic architecture blueprint.',
    category: 'Architecture',
    icon: FileText,
    relatedIds: [2],
    status: 'completed',
    energy: 100,
  },
  {
    id: 2,
    title: '02 // Cognitive AI',
    date: 'Week 1–2',
    content: 'Designing high-conversion UI, state machines, and multi-turn AI agent conversational decision trees.',
    category: 'Design',
    icon: Sparkles,
    relatedIds: [1, 3],
    status: 'completed',
    energy: 90,
  },
  {
    id: 3,
    title: '03 // Engineering',
    date: 'Week 2–4',
    content: 'Developing high-velocity Next.js web platforms, training autonomous AI models, and building native mobile codebases.',
    category: 'Engineering',
    icon: Code,
    relatedIds: [2, 4],
    status: 'in-progress',
    energy: 75,
  },
  {
    id: 4,
    title: '04 // Autonomous QA',
    date: 'Week 4',
    content: 'Real-world load testing, adversarial prompt injections for AI agents, and cross-browser/device verification.',
    category: 'Verification',
    icon: ShieldCheck,
    relatedIds: [3, 5],
    status: 'pending',
    energy: 45,
  },
  {
    id: 5,
    title: '05 // Orbital Launch',
    date: 'Week 5+',
    content: 'Live production deployment, app store approval, and 24/7 automated telemetry monitoring.',
    category: 'Deployment',
    icon: Rocket,
    relatedIds: [4],
    status: 'pending',
    energy: 20,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <div className="w-full">
      <RadialOrbitalTimeline
        timelineData={iqLaunchTimelineData}
        title="Our Engineering Trajectory"
        subtitle="From architectural blueprint to autonomous live operation."
      />
    </div>
  );
}

export const DownloadShowcaseDemo = () => {
  return <DownloadShowcase />;
};

export const Demo = DownloadShowcaseDemo;

export default Demo;