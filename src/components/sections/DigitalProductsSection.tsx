import React from 'react';
import Link from 'next/link';
import styles from './DigitalProductsSection.module.css';

export default function DigitalProductsSection() {
  return (
    <section className={styles.section} aria-labelledby="products-heading">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-animate>
          <span className={styles.sectionNumber}>05</span>
          <span className={styles.sectionTitle}>Digital Products</span>
        </div>

        <div className={styles.layout}>
          {/* Left Column: Thesis & Capabilities */}
          <div className={styles.left}>
            <h2 id="products-heading" className={styles.headline} data-animate data-delay="1">
              Digital infrastructure, not disposable websites.
            </h2>
            
            <p className={styles.body} data-animate data-delay="2">
              Every digital product we engineer functions as an active operating component 
              of your business. High-performance web applications, customer portals, and mobile 
              apps engineered for conversion, reliability, and long-term scale.
            </p>

            <div className={styles.categories} data-animate data-delay="3">
              <div className={styles.categoryItem}>
                <h3 className={styles.catTitle}>High-Conversion Web Platforms</h3>
                <p className={styles.catDesc}>Fast, modern web apps with sub-second page loads and integrated customer flows.</p>
              </div>
              <div className={styles.categoryItem}>
                <h3 className={styles.catTitle}>Mobile Applications</h3>
                <p className={styles.catDesc}>Native iOS and Android platforms built for fluid customer interactions and field operations.</p>
              </div>
              <div className={styles.categoryItem}>
                <h3 className={styles.catTitle}>Custom Internal Consoles</h3>
                <p className={styles.catDesc}>Bespoke dashboards and operating software tailored to your company&apos;s daily operations.</p>
              </div>
            </div>

            <div className={styles.actionRow} data-animate data-delay="4">
              <Link href="/digital-products" className={styles.exploreLink}>
                <span>Explore digital products</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Clean, Minimal Interface Card */}
          <div className={styles.right} data-animate data-delay="2">
            <div className={styles.previewCard}>
              <div className={styles.previewHeader}>
                <div className={styles.previewDots}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
                <span className={styles.previewTitle}>Operations Console</span>
              </div>

              <div className={styles.previewContent}>
                <div className={styles.statGrid}>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Automated Orders</span>
                    <span className={styles.statVal}>1,420</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Response Latency</span>
                    <span className={styles.statVal}>&lt; 200ms</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>System Uptime</span>
                    <span className={styles.statVal}>99.98%</span>
                  </div>
                </div>

                <div className={styles.listPreview}>
                  <div className={styles.previewRow}>
                    <span className={styles.prId}>#8492</span>
                    <span className={styles.prDesc}>WhatsApp Order Ingestion</span>
                    <span className={styles.prStatus}>Completed</span>
                  </div>
                  <div className={styles.previewRow}>
                    <span className={styles.prId}>#8491</span>
                    <span className={styles.prDesc}>Automated CRM Lead Sync</span>
                    <span className={styles.prStatus}>Completed</span>
                  </div>
                  <div className={styles.previewRow}>
                    <span className={styles.prId}>#8490</span>
                    <span className={styles.prDesc}>Inventory Dispatch Trigger</span>
                    <span className={styles.prStatus}>Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
