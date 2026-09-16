import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import AnimationProvider from '@/components/layout/AnimationProvider';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space',
  weight: ['500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

const jetbrains = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: {
    default: 'iQLaunch — Intelligent Systems & Automation',
    template: '%s — iQLaunch',
  },
  description:
    'iQLaunch builds intelligent digital systems and automated solutions — AI agents, WhatsApp automation, custom software, and digital infrastructure for modern businesses.',
  metadataBase: new URL('https://iqlaunch.com'),
  openGraph: {
    title: 'iQLaunch — Intelligent Systems & Automation',
    description:
      'We build systems that make businesses operate better. AI agents, business automation, custom software, and digital products.',
    url: 'https://iqlaunch.com',
    siteName: 'iQLaunch',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iQLaunch — Intelligent Systems & Automation',
    description:
      'We build systems that make businesses operate better.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">
          <AnimationProvider>{children}</AnimationProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
