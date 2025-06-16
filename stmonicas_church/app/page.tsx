// app/page.tsx or app/home/page.tsx
'use client';

import Head from 'next/head';
import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';
import HeroSection from '@/components/Home/HeroSection';
import Announcements from '@/components/Home/Announcements';
import Services from '@/components/Home/Services';
import Events from '@/components/Home/Events';

export default function Home() {
  return (
    <>
      <Head>
        <title>St. Monica&apos;s Church</title>
        <meta name="description" content="A welcoming place for worship and community." />
      </Head>

      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800">
        <HeroSection />
        <Announcements />
        <Services />
        <Events />
      </main>
      <Footer />
    </>
  );
}
