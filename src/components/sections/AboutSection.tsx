'use client';

import React from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.container}>
        <div className={styles.label}>
          About iQLaunch
        </div>

        <h2 id="about-heading" className={styles.headline}>
          We engineer AI agents, modern websites, and custom mobile apps for businesses.
        </h2>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            Most businesses don&apos;t need speculative technology hype or fragmented agencies delivering disconnected tools. They need a single, reliable engineering partner to build and scale their digital systems.
          </p>

          <p className={styles.paragraph}>
            <span className={styles.paragraphStrong}>iQLaunch builds complete digital solutions.</span> We design and deploy autonomous AI agents that handle operational workflows, high-performance websites built for conversion and scale, and bespoke iOS and Android mobile applications engineered for daily business use.
          </p>

          <p className={styles.paragraph}>
            We write clean, deterministic code where reliability matters, apply intelligent models where reasoning is needed, and transfer 100% source code ownership from day one. No fragile demo wrappers, no vendor lock-in—just resilient systems built to run quietly 24/7.
          </p>
        </div>
      </div>
    </section>
  );
}
