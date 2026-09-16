'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useNavScroll } from '@/lib/animations';
import styles from './Navigation.module.css';

const navLinks = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/digital-products', label: 'Digital Products' },
  { href: '/#about', label: 'About' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useNavScroll(useCallback((isScrolled: boolean) => {
    setScrolled(isScrolled);
  }, []));

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/" className={styles.logo} onClick={closeMobile} aria-label="iQLaunch — Home">
            <Image
              src="/logo-white.png"
              alt="iQLaunch"
              className={styles.logoImage}
              width={168}
              height={36}
              priority
            />
          </Link>

          <div className={styles.links} role="list">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
                role="listitem"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="/contact" className={styles.contactLink}>
            Contact
          </Link>

          <button
            className={`${styles.menuToggle} ${mobileOpen ? styles.menuOpen : ''}`}
            onClick={toggleMobile}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOpen : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className={styles.mobileContent}>
          <div className={styles.mobileLinks}>
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={closeMobile}
                style={{ transitionDelay: mobileOpen ? `${(i + 1) * 80}ms` : '0ms' }}
                tabIndex={mobileOpen ? 0 : -1}
              >
                <span className={styles.mobileLinkNumber}>0{i + 1}</span>
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`${styles.mobileLink} ${styles.mobileLinkAccent}`}
              onClick={closeMobile}
              style={{ transitionDelay: mobileOpen ? `${(navLinks.length + 1) * 80}ms` : '0ms' }}
              tabIndex={mobileOpen ? 0 : -1}
            >
              <span className={styles.mobileLinkNumber}>04</span>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
