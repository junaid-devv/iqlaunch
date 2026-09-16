import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './PrivacyPolicy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — OrderIQ · iQLaunch',
  description:
    'Privacy Policy explaining how iQLaunch collects, uses, stores, and shares information through OrderIQ, our WhatsApp-based AI ordering and customer-support platform.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.container}>
        {/* Back Link */}
        <Link href="/" className={styles.backLink}>
          <span aria-hidden="true">←</span>
          <span>Back to iQLaunch</span>
        </Link>

        {/* Page Header */}
        <header className={styles.header}>
          <div className={styles.badgeRow}>
            <span className={styles.badgePulse} />
            <span className={styles.badgeText}>OrderIQ · WhatsApp AI Agent Platform</span>
          </div>

          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: September 16, 2026</p>

          <p className={styles.leadParagraph}>
            This Privacy Policy explains how iQLaunch (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;)
            collects, uses, stores, and shares information through our website and our product{' '}
            <strong>OrderIQ</strong>, a WhatsApp-based AI ordering and customer-support agent, along
            with its management dashboard used by our restaurant clients.
          </p>

          <p className={styles.leadSub}>
            We operate as a Tech Provider on the WhatsApp Business Platform. This means OrderIQ
            sends and receives WhatsApp messages, manages message templates, and provides
            order-management tools on behalf of restaurant businesses (&quot;Clients&quot;) that use
            our service.
          </p>
        </header>

        {/* Table of Contents / Quick Navigation */}
        <nav className={styles.tocBox} aria-label="Table of contents">
          <div className={styles.tocTitle}>On this page</div>
          <div className={styles.tocGrid}>
            <a href="#collect" className={styles.tocLink}>
              <span className={styles.tocArrow}>→</span>
              <span>Information we collect</span>
            </a>
            <a href="#use" className={styles.tocLink}>
              <span className={styles.tocArrow}>→</span>
              <span>How we use information</span>
            </a>
            <a href="#share" className={styles.tocLink}>
              <span className={styles.tocArrow}>→</span>
              <span>Who we share information with</span>
            </a>
            <a href="#retain" className={styles.tocLink}>
              <span className={styles.tocArrow}>→</span>
              <span>Data retention</span>
            </a>
            <a href="#training" className={styles.tocLink}>
              <span className={styles.tocArrow}>→</span>
              <span>AI processing</span>
            </a>
            <a href="#security" className={styles.tocLink}>
              <span className={styles.tocArrow}>→</span>
              <span>Security</span>
            </a>
            <a href="#rights" className={styles.tocLink}>
              <span className={styles.tocArrow}>→</span>
              <span>Your rights &amp; how to reach us</span>
            </a>
            <a href="#changes" className={styles.tocLink}>
              <span className={styles.tocArrow}>→</span>
              <span>Changes to this policy</span>
            </a>
          </div>
        </nav>

        {/* Content Sections */}
        <article>
          {/* Section 1 */}
          <section id="collect" className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>1.</span>
              <span>Information we collect</span>
            </h2>
            <p className={styles.bodyText}>
              When you visit our website, message a restaurant that uses OrderIQ, or use our
              dashboard as restaurant staff, we may collect:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.itemLabel}>Website data</span> — basic technical information
                (such as IP address and browser type) and anything you submit voluntarily, such as
                through a contact form.
              </li>
              <li className={styles.listItem}>
                <span className={styles.itemLabel}>WhatsApp contact information</span> — your phone
                number and WhatsApp profile name.
              </li>
              <li className={styles.listItem}>
                <span className={styles.itemLabel}>Message content</span> — the text, images, or
                attachments you send to and receive from the AI agent.
              </li>
              <li className={styles.listItem}>
                <span className={styles.itemLabel}>Order details</span> — items ordered,
                quantities, prices, delivery or pickup preferences, and delivery address if provided.
              </li>
              <li className={styles.listItem}>
                <span className={styles.itemLabel}>Interaction metadata</span> — timestamps,
                message status (delivered, read), and conversation history.
              </li>
              <li className={styles.listItem}>
                <span className={styles.itemLabel}>Client account information</span> — for
                restaurant staff using the dashboard: name, login credentials, role, and actions
                taken within the platform.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section id="use" className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>2.</span>
              <span>How we use information</span>
            </h2>
            <p className={styles.bodyText}>We use the information above to:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.itemLabel}>Operate the AI agent</span> — understand and
                respond to customer messages, take orders, and answer questions.
              </li>
              <li className={styles.listItem}>
                <span className={styles.itemLabel}>Transactional messaging</span> — send order
                confirmations, status updates, and related transactional WhatsApp messages.
              </li>
              <li className={styles.listItem}>
                <span className={styles.itemLabel}>Management tools</span> — provide the management
                dashboard our Clients use to track orders, conversations, and fulfillment.
              </li>
              <li className={styles.listItem}>
                <span className={styles.itemLabel}>Security &amp; reliability</span> — maintain the
                security and reliability of the platform, including detecting abuse or technical
                issues.
              </li>
              <li className={styles.listItem}>
                <span className={styles.itemLabel}>Compliance</span> — comply with WhatsApp Business
                Platform policies and applicable law.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="share" className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>3.</span>
              <span>Who we share information with</span>
            </h2>
            <p className={styles.bodyText}>We share information as follows:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.itemLabel}>
                  With the restaurant Client you are messaging.
                </span>{' '}
                Since OrderIQ operates on behalf of that specific restaurant, your messages, order
                details, and contact information are visible to that restaurant&apos;s staff
                through the dashboard, so they can fulfill your order and respond to you.
              </li>
              <li className={styles.listItem}>
                <span className={styles.itemLabel}>With Meta / WhatsApp.</span> As required to
                operate on the WhatsApp Business Platform (message delivery, template submission,
                and platform compliance).
              </li>
              <li className={styles.listItem}>
                <span className={styles.itemLabel}>With service providers.</span> Service providers
                who help us run our infrastructure (e.g., hosting, cloud storage), under
                confidentiality obligations, and only as needed to provide the service.
              </li>
            </ul>
            <div className={styles.callout}>
              <p className={styles.calloutText}>
                <strong>Important:</strong> We do not sell your personal information, and we do not
                share your data with other restaurant Clients beyond the one you are ordering from.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="retain" className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>4.</span>
              <span>Data retention</span>
            </h2>
            <p className={styles.bodyText}>
              We retain conversation history, order records, and associated contact information
              indefinitely, so that Clients can maintain accurate order history, handle disputes,
              and provide continuity of service.
            </p>
            <p className={styles.bodyText}>
              If you would like your data deleted sooner, see the{' '}
              <a href="#rights" className={styles.contactEmail}>
                contact section
              </a>{' '}
              below — we will honor deletion requests where we are not otherwise required to retain
              data (e.g., for legal, tax, or dispute-resolution purposes).
            </p>
          </section>

          {/* Section 5 */}
          <section id="training" className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>5.</span>
              <span>AI processing</span>
            </h2>
            <p className={styles.bodyText}>
              Your messages are processed by our AI agent in real time to generate responses and
              manage orders.
            </p>
            <div className={styles.callout}>
              <p className={styles.calloutText}>
                <strong>No model training:</strong> We do not use your conversation data to train or
                improve our AI models. Data is used solely to operate the service for the
                conversation and Client it belongs to.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="security" className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>6.</span>
              <span>Security</span>
            </h2>
            <p className={styles.bodyText}>
              We apply reasonable technical and organizational safeguards to protect the data we
              hold, including access controls limiting dashboard visibility to authorized Client
              staff and encrypted transmission of data between WhatsApp, our systems, and our
              Clients&apos; dashboards.
            </p>
            <p className={styles.bodyText}>
              No system is perfectly secure, and we encourage you to avoid sending highly sensitive
              personal information (e.g., payment card numbers) over chat.
            </p>
          </section>

          {/* Section 7 */}
          <section id="rights" className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>7.</span>
              <span>Your rights &amp; how to reach us</span>
            </h2>
            <p className={styles.bodyText}>
              Depending on your location, you may have rights to access, correct, or request
              deletion of your personal information. To make a request, or if you have any questions
              about this policy, contact us at:
            </p>
            <div className={styles.contactCard}>
              <div className={styles.contactCompany}>iQLaunch</div>
              <p className={styles.bodyText}>
                Email:{' '}
                <a href="mailto:junaiddevv@gmail.com" className={styles.contactEmail}>
                  junaiddevv@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="changes" className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>8.</span>
              <span>Changes to this policy</span>
            </h2>
            <p className={styles.bodyText}>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or for legal or operational reasons. We will update the &quot;Last
              updated&quot; date at the top of this page when changes are made.
            </p>
          </section>
        </article>

        {/* Footer Notice */}
        <footer className={styles.footerNotice}>
          © 2026 iQLaunch. This page describes data practices for the OrderIQ WhatsApp AI agent platform.
        </footer>
      </div>
    </div>
  );
}
