'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './ContactPage.module.css';

const projectTypes = [
  'Autonomous AI Agents',
  'Modern Web Platforms',
  'Custom Mobile Apps',
  'Full Infrastructure Suite',
];

const timelineOptions = ['Immediate (< 2 Weeks)', '1 Month', '2–3 Months', 'Ongoing Retainer'];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedTimeline, setSelectedTimeline] = useState(timelineOptions[1]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className={styles.page}>
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <span aria-hidden="true">←</span>
          <span>Back to iQLaunch</span>
        </Link>

        <div className={styles.layout}>
          {/* Left Column: Direct Channels & Guarantee */}
          <div className={styles.left}>
            <div className={styles.badgeRow}>
              <span className={styles.badgePulse} />
              <span className={styles.badgeText}>Direct Architecture Channel</span>
            </div>

            <h1 className={styles.headline}>
              Let&apos;s engineer your digital infrastructure.
            </h1>

            <p className={styles.subtext}>
              Tell us about your operational bottlenecks or platform vision. Every submission is
              reviewed directly by our engineering leads, with an initial technical assessment delivered
              within 4 business hours.
            </p>

            <div className={styles.channelList}>
              <div className={styles.channelCard}>
                <span className={styles.channelLabel}>Direct Technical Contact</span>
                <a href="mailto:junaiddevv@gmail.com" className={styles.channelVal}>
                  junaiddevv@gmail.com
                </a>
              </div>

              <div className={styles.channelCard}>
                <span className={styles.channelLabel}>Instant WhatsApp Channel</span>
                <a
                  href="https://wa.me/?text=Hello%20iQLaunch,%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelVal}
                >
                  Start WhatsApp Chat →
                </a>
              </div>

              <div className={styles.channelCard}>
                <span className={styles.channelLabel}>Response Standard</span>
                <span className={styles.channelVal}>&lt; 4 Hours Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div>
            {submitted ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✓</div>
                <h2 className={styles.successTitle}>Inquiry Transmitted</h2>
                <p className={styles.successDesc}>
                  Your specifications have been logged. A senior systems engineer will review your
                  operational scope and respond via email or WhatsApp within 4 business hours.
                </p>
                <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Initiate Technical Discovery</h2>
                  <p className={styles.formDesc}>
                    Share your requirements to receive an architectural scope and delivery estimate.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Core Requirement</label>
                    <div className={styles.pillsRow}>
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          className={`${styles.pillBtn} ${selectedType === type ? styles.pillBtnActive : ''}`}
                          onClick={() => setSelectedType(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="fullName" className={styles.fieldLabel}>
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      required
                      placeholder="e.g. Alex Sterling"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="workEmail" className={styles.fieldLabel}>
                      Work Email / Phone
                    </label>
                    <input
                      id="workEmail"
                      required
                      placeholder="alex@company.com or WhatsApp number"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Desired Timeline</label>
                    <div className={styles.pillsRow}>
                      {timelineOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          className={`${styles.pillBtn} ${selectedTimeline === opt ? styles.pillBtnActive : ''}`}
                          onClick={() => setSelectedTimeline(opt)}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="scope" className={styles.fieldLabel}>
                      Project Scope &amp; Bottlenecks
                    </label>
                    <textarea
                      id="scope"
                      required
                      placeholder="What operational workflows or platform are you looking to automate or engineer?"
                      className={styles.textarea}
                    />
                  </div>

                  <button type="submit" disabled={loading} className={styles.submitBtn}>
                    <span>{loading ? 'Transmitting...' : 'Transmit Project Specifications'}</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
