import React from 'react';
import Link from 'next/link';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.container}>
        <div className={styles.ctaCard} data-animate>
          <div className={styles.header}>
            <span className={styles.sectionNumber}>03</span>
            <span className={styles.sectionTitle}>Get In Touch</span>
          </div>

          <div className={styles.content}>
            <h2 id="cta-heading" className={styles.headline}>
              Let&apos;s build the system your business is missing.
            </h2>

            <p className={styles.subtext}>
              Whether you need an autonomous AI agent, a high-converting web platform, or a custom
              mobile app for your operations—we start with a direct technical consultation.
            </p>

            <div className={styles.actionRow}>
              <Link href="/contact" className={styles.primaryLink}>
                <span>Initiate Architecture Call</span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
              <a href="mailto:junaiddevv@gmail.com" className={styles.emailDirect}>
                <span>junaiddevv@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
