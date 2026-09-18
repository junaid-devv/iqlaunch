import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './SolutionsPage.module.css';

export const metadata: Metadata = {
  title: 'Solutions & Engineering Capabilities — iQLaunch',
  description:
    'Explore iQLaunch engineering capabilities across autonomous AI agents, high-conversion web platforms, and custom enterprise mobile applications.',
};

export default function SolutionsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <span aria-hidden="true">←</span>
          <span>Back to iQLaunch</span>
        </Link>

        {/* Page Header */}
        <header className={styles.header}>
          <div className={styles.badgeRow}>
            <span className={styles.badgePulse} />
            <span className={styles.badgeText}>01 // Engineering Specifications</span>
          </div>

          <h1 className={styles.title}>
            Intelligent systems engineered for operational certainty.
          </h1>

          <p className={styles.lead}>
            We engineer three distinct digital layers for modern enterprises: autonomous AI agents that
            eliminate operational friction, modern web platforms built for speed and conversion, and
            bespoke mobile applications built for real commercial scale.
          </p>
        </header>

        {/* 3 Detailed Pillars */}
        <div className={styles.pillarList}>
          {/* Pillar 01 */}
          <section id="ai-agents" className={styles.pillarCard}>
            <div className={styles.pillarInfo}>
              <div className={styles.pillarMeta}>
                <span className={styles.pillarIndex}>01</span>
                <span className={styles.pillarTag}>Autonomous Intelligence</span>
              </div>
              <h2 className={styles.pillarHeading}>AI Agents &amp; WhatsApp Automation</h2>
              <p className={styles.pillarDesc}>
                Autonomous reasoning engines deployed directly into your operational channels. From
                Meta Cloud API WhatsApp ordering engines to internal support bots, our agents
                execute tool calls against your databases, handle multi-turn conversational context,
                and escalate edge cases gracefully to human staff.
              </p>
              <div className={styles.featurePills}>
                <span className={styles.featurePill}>Meta Cloud API Verified</span>
                <span className={styles.featurePill}>Tool Calling &amp; SQL Sync</span>
                <span className={styles.featurePill}>Human Fallback Loops</span>
                <span className={styles.featurePill}>Zero Hallucination Anchors</span>
              </div>
            </div>

            <div className={styles.consoleBox}>
              <div className={styles.consoleHeader}>
                <div className={styles.dots}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
                <span className={styles.consoleLabel}>Agent Telemetry</span>
              </div>
              <div className={styles.statRow}>
                <div className={styles.statCell}>
                  <span className={styles.statNum}>&lt; 280ms</span>
                  <span className={styles.statTitle}>Tool Calling Latency</span>
                </div>
                <div className={styles.statCell}>
                  <span className={styles.statNum}>99.9%</span>
                  <span className={styles.statTitle}>Message Delivery Rate</span>
                </div>
                <div className={styles.statCell}>
                  <span className={styles.statNum}>100%</span>
                  <span className={styles.statTitle}>Schema Enforced</span>
                </div>
                <div className={styles.statCell}>
                  <span className={styles.statNum}>24/7</span>
                  <span className={styles.statTitle}>Continuous Uptime</span>
                </div>
              </div>
            </div>
          </section>

          {/* Pillar 02 */}
          <section id="web-platforms" className={styles.pillarCard}>
            <div className={styles.pillarInfo}>
              <div className={styles.pillarMeta}>
                <span className={styles.pillarIndex}>02</span>
                <span className={styles.pillarTag}>Web &amp; Distributed Edge</span>
              </div>
              <h2 className={styles.pillarHeading}>High-Conversion Web Platforms</h2>
              <p className={styles.pillarDesc}>
                We build digital platforms and customer portals that perform with deterministic
                reliability. Engineered on the Next.js App Router with global edge CDN caching,
                sub-second response times, and authenticated management consoles that your staff and
                clients actually enjoy using.
              </p>
              <div className={styles.featurePills}>
                <span className={styles.featurePill}>Next.js 14 App Router</span>
                <span className={styles.featurePill}>Sub-second Edge Latency</span>
                <span className={styles.featurePill}>Client &amp; Admin Portals</span>
                <span className={styles.featurePill}>Lighthouse 100/100 Core</span>
              </div>
            </div>

            <div className={styles.consoleBox}>
              <div className={styles.consoleHeader}>
                <div className={styles.dots}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
                <span className={styles.consoleLabel}>Platform Performance</span>
              </div>
              <div className={styles.statRow}>
                <div className={styles.statCell}>
                  <span className={styles.statNum}>100 / 100</span>
                  <span className={styles.statTitle}>Lighthouse Performance</span>
                </div>
                <div className={styles.statCell}>
                  <span className={styles.statNum}>&lt; 120ms</span>
                  <span className={styles.statTitle}>Edge TTFB</span>
                </div>
                <div className={styles.statCell}>
                  <span className={styles.statNum}>Zero</span>
                  <span className={styles.statTitle}>Proprietary Lock-in</span>
                </div>
                <div className={styles.statCell}>
                  <span className={styles.statNum}>100%</span>
                  <span className={styles.statTitle}>Code Handover</span>
                </div>
              </div>
            </div>
          </section>

          {/* Pillar 03 */}
          <section id="mobile-apps" className={styles.pillarCard}>
            <div className={styles.pillarInfo}>
              <div className={styles.pillarMeta}>
                <span className={styles.pillarIndex}>03</span>
                <span className={styles.pillarTag}>Mobile Ecosystem</span>
              </div>
              <h2 className={styles.pillarHeading}>Custom Mobile Applications</h2>
              <p className={styles.pillarDesc}>
                Native and cross-platform iOS &amp; Android applications built for daily commercial
                use. We architect resilient mobile software with offline-first local synchronization,
                instant push notification dispatch, biometric authentication, and deep hardware
                integrations tailored to your operational workflows.
              </p>
              <div className={styles.featurePills}>
                <span className={styles.featurePill}>iOS &amp; Android Cross-Platform</span>
                <span className={styles.featurePill}>Offline-First Local Sync</span>
                <span className={styles.featurePill}>Biometric Auth</span>
                <span className={styles.featurePill}>Field Operations Tools</span>
              </div>
            </div>

            <div className={styles.consoleBox}>
              <div className={styles.consoleHeader}>
                <div className={styles.dots}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
                <span className={styles.consoleLabel}>Mobile Engine</span>
              </div>
              <div className={styles.statRow}>
                <div className={styles.statCell}>
                  <span className={styles.statNum}>60 FPS</span>
                  <span className={styles.statTitle}>Native Frame Rate</span>
                </div>
                <div className={styles.statCell}>
                  <span className={styles.statNum}>Offline</span>
                  <span className={styles.statTitle}>Local Database Sync</span>
                </div>
                <div className={styles.statCell}>
                  <span className={styles.statNum}>Instant</span>
                  <span className={styles.statTitle}>Push Dispatch</span>
                </div>
                <div className={styles.statCell}>
                  <span className={styles.statNum}>App Store</span>
                  <span className={styles.statTitle}>Deployment Guarantee</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <h2 className={styles.ctaHeading}>Ready to review technical specifications?</h2>
          <p className={styles.ctaDesc}>
            Connect directly with our engineering team to discuss your architectural requirements and
            receive an initial delivery trajectory within 4 business hours.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            <span>Initiate Architecture Call</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
