import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './DigitalProductsPage.module.css';

export const metadata: Metadata = {
  title: 'Digital Products & OrderIQ — iQLaunch',
  description:
    'OrderIQ is an autonomous WhatsApp AI ordering and customer-support platform for restaurants, engineered and operated by iQLaunch.',
};

const features = [
  {
    icon: '💬',
    title: 'Natural Language WhatsApp Ordering',
    description:
      'Diners browse menus, customize dishes, specify dietary requests, and confirm orders directly through conversational WhatsApp—no apps to download.',
  },
  {
    icon: '⚡',
    title: 'Automated Kitchen & POS Dispatch',
    description:
      'Confirmed orders instantly sync into your restaurant management console, POS database, and kitchen display screen with zero manual re-entry.',
  },
  {
    icon: '📍',
    title: 'Live Transactional Updates',
    description:
      'Keep customers updated with automated preparation status, pickup alerts, and live delivery coordinates via Meta Cloud API verified notifications.',
  },
  {
    icon: '📊',
    title: 'Real-Time Management Dashboard',
    description:
      'A dedicated management console for restaurant staff and managers to track active order queues, monitor revenue telemetry, and adjust menus dynamically.',
  },
];

const workflow = [
  {
    step: '01',
    title: 'Customer Inbound',
    desc: 'Customer sends a WhatsApp message or scans a table QR code to start.',
  },
  {
    step: '02',
    title: 'Agent Reasoning',
    desc: 'OrderIQ parses items, answers menu questions, and tallies pricing in real time.',
  },
  {
    step: '03',
    title: 'Dispatch & Sync',
    desc: 'Order is injected into kitchen queue and calendar with deterministic precision.',
  },
  {
    step: '04',
    title: 'Automated Followup',
    desc: 'Status alerts and pickup notifications are sent with zero human babysitting.',
  },
];

export default function DigitalProductsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <span aria-hidden="true">←</span>
          <span>Back to iQLaunch</span>
        </Link>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.badgeRow}>
            <span className={styles.badgePulse} />
            <span className={styles.badgeText}>Proprietary Software // OrderIQ</span>
          </div>

          <h1 className={styles.title}>
            OrderIQ — Autonomous WhatsApp Ordering Platform
          </h1>

          <p className={styles.lead}>
            iQLaunch doesn&apos;t just build client systems—we engineer and operate production-grade
            software platforms. OrderIQ transforms WhatsApp into a complete conversational commerce
            engine and operational dashboard for restaurants.
          </p>
        </header>

        {/* Operational Metric Strip */}
        <div className={styles.metricStrip}>
          <div className={styles.metricItem}>
            <span className={styles.metricVal}>80%</span>
            <span className={styles.metricLabel}>Faster Order Ingestion</span>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricVal}>0</span>
            <span className={styles.metricLabel}>App Downloads Needed for Diners</span>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricVal}>24/7</span>
            <span className={styles.metricLabel}>Autonomous Customer Support</span>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricVal}>99.9%</span>
            <span className={styles.metricLabel}>Meta Cloud API Delivery</span>
          </div>
        </div>

        {/* Feature Grid */}
        <div className={styles.featureGrid}>
          {features.map((item, i) => (
            <div key={i} className={styles.featureCard}>
              <span className={styles.cardIcon}>{item.icon}</span>
              <h2 className={styles.cardHeading}>{item.title}</h2>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Workflow Diagram Box */}
        <div className={styles.workflowBox}>
          <div className={styles.workflowHeader}>
            <h2 className={styles.workflowTitle}>The OrderIQ Execution Trajectory</h2>
            <p className={styles.workflowSubtitle}>
              From raw customer message to live kitchen fulfillment in sub-second automated cycles.
            </p>
          </div>

          <div className={styles.workflowSteps}>
            {workflow.map((w) => (
              <div key={w.step} className={styles.stepCard}>
                <span className={styles.stepIndex}>Step {w.step}</span>
                <h3 className={styles.stepTitle}>{w.title}</h3>
                <p className={styles.stepDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <h2 className={styles.ctaHeading}>Deploy OrderIQ or Build Custom Software</h2>
          <p className={styles.ctaDesc}>
            Whether you are a restaurant looking to automate order flow via WhatsApp or an
            enterprise requiring bespoke operational software, let&apos;s build together.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            <span>Request Platform Demo</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
