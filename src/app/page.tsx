import styles from './page.module.css';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import PillarsSnapshot from '@/components/sections/PillarsSnapshot';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <AboutSection />
      <PillarsSnapshot />
      <FinalCTA />
    </div>
  );
}
