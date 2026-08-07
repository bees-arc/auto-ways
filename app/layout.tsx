import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-title',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Autoways Private Limited | Sustainable Tyre Retreading & Rebuilding Sri Lanka',
  description: 'Sri Lanka’s trusted leader in tyre retreading, tread manufacturing, and fleet maintenance since 1991. Serving transport, logistics, agriculture, and construction sectors.',
  keywords: 'tyre retreading, tyre rebuilding, autoways, sri lanka, tyre repair, fleet maintenance, tread manufacturing, hot cure, cold cure, anuradhapura',
  openGraph: {
    title: 'Autoways Private Limited | Tyre Retreading Sri Lanka',
    description: 'Delivering eco-friendly, cost-effective tyre retreading and tread manufacturing solutions.',
    url: 'https://autoways.lk',
    siteName: 'Autoways Private Limited',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: '0px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
