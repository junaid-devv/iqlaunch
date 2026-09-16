'use client';

import React from 'react';
import Link from 'next/link';
import styles from './WhatWeBuild.module.css';

export default function WhatWeBuild() {

  return (
    <section id="capabilities" className={styles.section} aria-labelledby="what-we-build-heading">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header} data-animate>
          <div className={styles.headerLeft}>
            <div className={styles.badgeRow}>
              <span className={styles.badgeDot} />
              <span className={styles.sectionNumber}>02 // CAPABILITIES</span>
            </div>
            <h2 id="what-we-build-heading" className={styles.sectionTitle}>
              Systems Engineered For Scale
            </h2>
          </div>
          <p className={styles.headerDesc}>
            We engineer autonomous digital infrastructure, replacing repetitive human friction with instant, deterministic software.
          </p>
        </div>

        {/* 4 Graphical Interactive Cards */}
        <div className={styles.grid}>
          {/* Card 1: AI Agent Systems */}
          <div className={styles.card} data-animate data-delay="1">
            <div className={styles.cardHeader}>
              <div className={styles.cardMeta}>
                <span className={styles.cardIndex}>01</span>
                <span className={styles.cardTag}>Autonomous AI</span>
              </div>
              <h3 className={styles.cardTitle}>AI Agent Systems</h3>
              <p className={styles.cardSummary}>
                Autonomous agents that handle multi-turn reasoning, qualify leads, and trigger internal business operations 24/7.
              </p>
            </div>

            {/* Graphical Widget: Node Workflow Pipeline */}
            <div className={styles.graphicBox}>
              <div className={styles.nodeFlow}>
                <div className={styles.node}>
                  <div className={styles.nodeIcon}>⚡</div>
                  <span className={styles.nodeText}>Inbound Event</span>
                </div>
                <div className={styles.nodeArrow}>
                  <div className={styles.arrowLine} />
                  <div className={styles.arrowPulse} />
                </div>
                <div className={`${styles.node} ${styles.nodeActive}`}>
                  <div className={styles.nodeIcon}>🧠</div>
                  <span className={styles.nodeText}>Agent Reasoning</span>
                </div>
                <div className={styles.nodeArrow}>
                  <div className={styles.arrowLine} />
                </div>
                <div className={styles.node}>
                  <div className={styles.nodeIcon}>✓</div>
                  <span className={styles.nodeText}>System Action</span>
                </div>
              </div>
              <div className={styles.telemetryRow}>
                <span className={styles.telemetryItem}>Model: Claude 3.5 / GPT-4o</span>
                <span className={styles.telemetryItem}>Latency: &lt; 280ms</span>
                <span className={styles.telemetryStatus}>Live</span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.featurePill}>Urdu &amp; English NLU</span>
              <span className={styles.featurePill}>Tool Calling</span>
              <span className={styles.featurePill}>Human Escalation</span>
            </div>
          </div>

          {/* Card 2: WhatsApp Automation */}
          <div className={styles.card} data-animate data-delay="2">
            <div className={styles.cardHeader}>
              <div className={styles.cardMeta}>
                <span className={styles.cardIndex}>02</span>
                <span className={styles.cardTag}>Omnichannel Engine</span>
              </div>
              <h3 className={styles.cardTitle}>WhatsApp Automation</h3>
              <p className={styles.cardSummary}>
                Transform WhatsApp into a complete operating interface: booking appointments, processing orders, and live dispatch.
              </p>
            </div>

            {/* Graphical Widget: Simulated WhatsApp Cloud Chat */}
            <div className={styles.graphicBox}>
              <div className={styles.chatWindow}>
                <div className={styles.chatHeader}>
                  <span className={styles.chatStatusDot} />
                  <span className={styles.chatTitle}>Meta Cloud API Verified</span>
                  <span className={styles.chatBadge}>99.9% Delivery</span>
                </div>
                <div className={styles.chatBody}>
                  <div className={styles.msgIn}>
                    &quot;Can I book an appointment for tomorrow at 3 PM?&quot;
                  </div>
                  <div className={styles.msgOut}>
                    &quot;Slot reserved for 3:00 PM tomorrow. Added to Google Calendar &amp; CRM #829.&quot;
                    <span className={styles.msgCheck}>✓✓</span>
                  </div>
                </div>
              </div>
              <div className={styles.telemetryRow}>
                <span className={styles.telemetryItem}>Meta Cloud API</span>
                <span className={styles.telemetryItem}>Instant CRM Sync</span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.featurePill}>Interactive Catalogs</span>
              <span className={styles.featurePill}>Payment Links</span>
              <span className={styles.featurePill}>Automated Dispatch</span>
            </div>
          </div>

          {/* Card 3: Digital Products & Platforms */}
          <div className={styles.card} data-animate data-delay="3">
            <div className={styles.cardHeader}>
              <div className={styles.cardMeta}>
                <span className={styles.cardIndex}>03</span>
                <span className={styles.cardTag}>Platforms &amp; Web</span>
              </div>
              <h3 className={styles.cardTitle}>Digital Products &amp; Web</h3>
              <p className={styles.cardSummary}>
                High-performance web applications and customer portals engineered for conversion, speed, and long-term scale.
              </p>
            </div>

            {/* Graphical Widget: Console Metrics */}
            <div className={styles.graphicBox}>
              <div className={styles.consoleWindow}>
                <div className={styles.consoleHeader}>
                  <div className={styles.consoleDots}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className={styles.consoleTitle}>Edge Architecture</span>
                </div>
                <div className={styles.metricsGrid}>
                  <div className={styles.metricCell}>
                    <span className={styles.metricNum}>99.98%</span>
                    <span className={styles.metricName}>Availability</span>
                  </div>
                  <div className={styles.metricCell}>
                    <span className={styles.metricNum}>&lt; 140ms</span>
                    <span className={styles.metricName}>Edge Latency</span>
                  </div>
                  <div className={styles.metricCell}>
                    <span className={styles.metricNum}>100 / 100</span>
                    <span className={styles.metricName}>Lighthouse Core</span>
                  </div>
                </div>
              </div>
              <div className={styles.telemetryRow}>
                <span className={styles.telemetryItem}>Next.js App Router</span>
                <span className={styles.telemetryItem}>Distributed Edge CDN</span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.featurePill}>Sub-second Speed</span>
              <span className={styles.featurePill}>Customer Portals</span>
              <span className={styles.featurePill}>Enterprise Security</span>
            </div>
          </div>

          {/* Card 4: Custom Business Software */}
          <div className={styles.card} data-animate data-delay="4">
            <div className={styles.cardHeader}>
              <div className={styles.cardMeta}>
                <span className={styles.cardIndex}>04</span>
                <span className={styles.cardTag}>Operations Software</span>
              </div>
              <h3 className={styles.cardTitle}>Custom Business Software</h3>
              <p className={styles.cardSummary}>
                Internal operating consoles, warehouse dispatch boards, and custom telemetry engineered for how your team operates.
              </p>
            </div>

            {/* Graphical Widget: Dispatch Pipeline Queue */}
            <div className={styles.graphicBox}>
              <div className={styles.queueWindow}>
                <div className={styles.queueItem}>
                  <span className={styles.queueId}>#TK-402</span>
                  <span className={styles.queueName}>Automated Invoice Sync</span>
                  <span className={styles.queueSuccess}>Executed</span>
                </div>
                <div className={styles.queueItem}>
                  <span className={styles.queueId}>#TK-403</span>
                  <span className={styles.queueName}>Warehouse Stock Allocation</span>
                  <span className={styles.queueSuccess}>Executed</span>
                </div>
                <div className={styles.queueItem}>
                  <span className={styles.queueId}>#TK-404</span>
                  <span className={styles.queueName}>Dispatch Telemetry Ping</span>
                  <span className={styles.queueProcessing}>Processing...</span>
                </div>
              </div>
              <div className={styles.telemetryRow}>
                <span className={styles.telemetryItem}>PostgreSQL &amp; Redis</span>
                <span className={styles.telemetryItem}>Realtime WebSockets</span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.featurePill}>Custom Telemetry</span>
              <span className={styles.featurePill}>Role Permissions</span>
              <span className={styles.featurePill}>Zero Bottlenecks</span>
            </div>
          </div>
        </div>

        {/* Bottom Link */}
        <div className={styles.bottomRow} data-animate>
          <Link href="/solutions" className={styles.bottomLink}>
            <span>Explore all technical architectures &amp; specifications</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
