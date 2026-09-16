import styles from './page.module.css';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <AboutSection />
    </div>
  );
}

