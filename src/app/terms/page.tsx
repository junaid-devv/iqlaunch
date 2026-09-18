import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/app/privacy/PrivacyPolicy.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service — OrderIQ · iQLaunch',
  description:
    'Terms of Service for iQLaunch and its WhatsApp-based ordering and automation platform OrderIQ.',
};

export default function TermsPage() {
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
            <span className={styles.badgeText}>OrderIQ · Legal Agreements</span>
          </div>

          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last updated: September 18, 2026</p>

          <p className={styles.leadParagraph}>
            These Terms of Service (&quot;Terms&quot;) govern access to and use of the services,
            software, and websites provided by <strong>iQLaunch</strong> (&quot;we,&quot; &quot;us,&quot;
            &quot;our&quot;), including our WhatsApp-based AI ordering platform <strong>OrderIQ</strong>{' '}
            and associated client management consoles.
          </p>

          <p className={styles.leadSub}>
            By accessing our website or deploying OrderIQ for your business, you agree to be bound
            by these Terms. If you are contracting on behalf of a company or restaurant, you represent
            that you have the authority to bind that entity.
          </p>
        </header>

        {/* Content Sections */}
        <article>
          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>1.</span>
              <span>Services &amp; Platform Scope</span>
            </h2>
            <p className={styles.bodyText}>
              iQLaunch provides custom software engineering, AI agent implementations, and
              proprietary digital platforms including OrderIQ. OrderIQ operates as an automated
              inbound communication, ordering, and customer support tool running on the WhatsApp
              Business Platform for commercial clients (&quot;Clients&quot;).
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>2.</span>
              <span>WhatsApp Business Platform Compliance</span>
            </h2>
            <p className={styles.bodyText}>
              As a Tech Provider on the WhatsApp Business Platform, iQLaunch requires all Clients to
              strictly comply with Meta&apos;s WhatsApp Business Policy, WhatsApp Commerce Policy,
              and Meta Technical Terms.
            </p>
            <p className={styles.bodyText}>
              Clients may not utilize OrderIQ to send unsolicited messages (spam), engage in
              prohibited commercial categories, or violate consumer consent standards.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>3.</span>
              <span>Client Responsibilities &amp; Content</span>
            </h2>
            <p className={styles.bodyText}>
              Clients retain full ownership of their menus, pricing, customer interactions, and
              operational data. Clients are solely responsible for ensuring accurate menu pricing,
              fulfilling customer orders taken via the platform, and maintaining appropriate
              confidentiality of dashboard credentials.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>4.</span>
              <span>AI Processing &amp; Accuracy</span>
            </h2>
            <p className={styles.bodyText}>
              OrderIQ utilizes conversational intelligence to parse customer orders and answer
              operational queries. While engineered with deterministic schema constraints, Clients
              retain final responsibility for reviewing order queues in their management console.
              Client conversation data is never utilized to train third-party public foundation models.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>5.</span>
              <span>Intellectual Property &amp; Code Ownership</span>
            </h2>
            <p className={styles.bodyText}>
              OrderIQ and its underlying core architectures remain the intellectual property of
              iQLaunch. For custom bespoke software solutions engineered under separate master
              services agreements, source code ownership transfers 100% to the client upon final
              milestone acceptance.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>6.</span>
              <span>Service Availability &amp; Limitations</span>
            </h2>
            <p className={styles.bodyText}>
              We provide our services with commercially reasonable diligence and maintain target
              availabilities above 99.9%. However, services may be occasionally subject to downtime
              resulting from Meta Cloud API maintenance, internet transit interruptions, or upstream
              telecommunication carrier events.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>7.</span>
              <span>Contact &amp; Notices</span>
            </h2>
            <p className={styles.bodyText}>
              For any questions regarding these Terms or legal notices, please reach out to:
            </p>
            <div className={styles.contactCard}>
              <div className={styles.contactCompany}>iQLaunch Legal &amp; Engineering</div>
              <p className={styles.bodyText}>
                Email:{' '}
                <a href="mailto:junaiddevv@gmail.com" className={styles.contactEmail}>
                  junaiddevv@gmail.com
                </a>
              </p>
            </div>
          </section>
        </article>

        {/* Footer Notice */}
        <footer className={styles.footerNotice}>
          © 2026 iQLaunch. All rights reserved. OrderIQ is an operating product of iQLaunch.
        </footer>
      </div>
    </div>
  );
}
