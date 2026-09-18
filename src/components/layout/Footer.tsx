import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.rule} />
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="iQLaunch — Home">
              <Image src={getAssetPath('/logo-white.png')} alt="iQLaunch" className={styles.logoImage} width={140} height={30} />
            </Link>
            <p className={styles.tagline}>
              Intelligent systems. Automated operations. Digital infrastructure.
            </p>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            <div className={styles.navGroup}>
              <span className={styles.navLabel}>Navigate</span>
              <Link href="/solutions" className={styles.navLink}>Solutions</Link>
              <Link href="/digital-products" className={styles.navLink}>Digital Products</Link>
            </div>
            <div className={styles.navGroup}>
              <span className={styles.navLabel}>Company</span>
              <Link href="/#about" className={styles.navLink}>About</Link>
              <Link href="/contact" className={styles.navLink}>Contact</Link>
              <Link href="/privacy" className={styles.navLink}>Privacy Policy</Link>
              <Link href="/terms" className={styles.navLink}>Terms of Service</Link>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>© {new Date().getFullYear()} iQLaunch</span>
          <a href="mailto:hello@iqlaunch.com" className={styles.email}>hello@iqlaunch.com</a>
        </div>
      </div>
    </footer>
  );
}
