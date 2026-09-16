import React from 'react';
import Link from 'next/link';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.container}>
        <div className={styles.ctaCard} data-animate>
          <div className={styles.header}>
            <span className={styles.sectionNumber}>08</span>
            <span className={styles.sectionTitle}>Get Started</span>
          </div>

          <div className={styles.content}>
            <h2 id="cta-heading" className={styles.headline}>
              Let&apos;s build the system your business is missing.
            </h2>

            <p className={styles.subtext}>
              Whether you need an autonomous WhatsApp operations engine, an AI agent system, 
              or bespoke digital products — we start by understanding how your business works.
            </p>

            <div className={styles.actionRow}>
              <Link href="/contact" className={styles.primaryLink}>
                <span>Start a conversation</span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
              <a href="mailto:hello@iqlaunch.com" className={styles.emailDirect}>
                <span>hello@iqlaunch.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
