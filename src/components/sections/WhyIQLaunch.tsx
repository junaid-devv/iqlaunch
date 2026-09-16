import React from 'react';
import styles from './WhyIQLaunch.module.css';

const pillars = [
  {
    id: '01',
    statement: 'Built around the business.',
    description: 'Every system begins with how your company actually functions. We map your daily operations, isolate friction points, and engineer the exact digital layer that removes them.',
  },
  {
    id: '02',
    statement: 'Designed to operate.',
    description: "We don't ship fragile prototypes. We engineer production-grade software designed for continuous daily use, automatic error recovery, and zero downtime.",
  },
  {
    id: '03',
    statement: 'Engineered for scale.',
    description: 'What works for 100 customer interactions must work identically for 50,000. We design architectures that grow with your volume without breaking or adding headcount.',
  },
  {
    id: '04',
    statement: 'Made to evolve.',
    description: 'Business requirements shift. We construct software with clean modular architecture so your systems can easily expand as new opportunities emerge.',
  },
];

export default function WhyIQLaunch() {
  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-animate>
          <span className={styles.sectionNumber}>02</span>
          <h2 id="why-heading" className={styles.sectionTitle}>
            Why iQLaunch
          </h2>
        </div>

        {/* Big headline */}
        <div className={styles.leadArea} data-animate data-delay="1">
          <p className={styles.leadText}>
            We build digital systems that endure, operate autonomously, and scale with your enterprise.
          </p>
        </div>

        {/* Pillars 2x2 Grid */}
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, i) => (
            <div key={pillar.id} className={styles.pillarCard} data-animate data-delay={String(i + 1)}>
              <span className={styles.pillarIndex}>{pillar.id}</span>
              <h3 className={styles.pillarStatement}>{pillar.statement}</h3>
              <p className={styles.pillarDescription}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
