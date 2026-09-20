import styles from './page.module.css';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import PillarsSnapshot from '@/components/sections/PillarsSnapshot';
import OrderIQSpotlight from '@/components/sections/OrderIQSpotlight';
import ProcessSection from '@/components/sections/ProcessSection';
import GuaranteesSection from '@/components/sections/GuaranteesSection';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <AboutSection />
      <PillarsSnapshot />
      <OrderIQSpotlight />
      <ProcessSection />
      <GuaranteesSection />
      <FinalCTA />
    </div>
  );
}
