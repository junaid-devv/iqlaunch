'use client';

import React from 'react';
import Link from 'next/link';
import styles from './PillarsSnapshot.module.css';

const pillars = [
  {
    index: '01',
    tag: 'INTELLIGENCE',
    title: 'Autonomous AI Agents',
    description:
      'Reasoning engines, WhatsApp automation, and custom tool-calling agents engineered to eliminate manual customer and operational bottlenecks.',
    href: '/solutions#ai-agents',
  },
  {
    index: '02',
    tag: 'WEB & PLATFORMS',
    title: 'High-Conversion Websites',
    description:
      'Modern web applications, enterprise portals, and platforms built on Next.js App Router with sub-second latency and high-performance design.',
    href: '/solutions#web-platforms',
  },
  {
    index: '03',
    tag: 'MOBILE ECOSYSTEM',
    title: 'Custom Mobile Apps',
    description:
      'Cross-platform and native iOS & Android applications engineered for daily operational workflows, offline-first reliability, and real enterprise scale.',
    href: '/solutions#mobile-apps',
  },
];

export default function PillarsSnapshot() {
  return (
    <section id="capabilities" className={styles.section} aria-labelledby="pillars-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.label}>02 // Core Capabilities</span>
            <h2 id="pillars-heading" className={styles.headline}>
              What We Build For Businesses
            </h2>
          </div>
          <Link href="/solutions" className={styles.allSolutionsLink}>
            <span>View All Specifications</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar) => (
            <Link key={pillar.index} href={pillar.href} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.index}>{pillar.index}</span>
                <span className={styles.tag}>{pillar.tag}</span>
              </div>
              <h3 className={styles.title}>{pillar.title}</h3>
              <p className={styles.desc}>{pillar.description}</p>
              <div className={styles.cardLink}>
                <span>Explore architecture</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
