'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';
import Card from '@/components/Common/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>St. Monica&apos;s Church</title>
        <meta name="description" content="A welcoming place for worship and community." />
      </Head>

      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800">
        {/* Hero Section */}
        <section className="py-16 text-center px-4">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
                Welcome to St. Monica&apos;s Church
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                A place of worship, community, and spiritual growth.
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4 flex-wrap">
                <Link
                  href="/about"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow text-center"
                >
                  Learn More
                </Link>
                <Link
                  href="#services"
                  className="border border-blue-700 hover:bg-blue-50 text-blue-700 font-medium py-3 px-6 rounded-lg text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/hero_one.svg"
                alt="Church Hero"
                width={500}
                height={500}
                className="mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Announcements Section */}
        <section className="relative py-20 bg-gradient-to-r from-indigo-100 via-white to-indigo-200 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/hero_one.svg"
              alt="Decorative background"
              fill
              className="object-cover opacity-10"
            />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 text-center">
            <div className="mb-12 animate-fade-in">
              <h2 className="text-4xl font-extrabold text-indigo-800 drop-shadow-sm">📢 Announcements</h2>
              <p className="mt-3 text-lg text-gray-700">
                Stay updated with our latest news, events, and community updates.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 animate-slide-up">
              <Card title="Sunday Service Time Change" image="/hero_five.svg">
                <p className="mb-2 text-sm text-gray-500 italic">June 10, 2025</p>
                <p className="text-gray-700">
                  Starting next week, our Sunday services will begin at <strong>10:00 AM</strong> instead of 9:30 AM.
                </p>
              </Card>

              <Card title="Community Outreach Program" image="/hero_four.svg">
                <p className="mb-2 text-sm text-gray-500 italic">June 8, 2025</p>
                <p className="text-gray-700">
                  Join us this Saturday for our monthly outreach at the local shelter from <strong>9 AM to 1 PM</strong>.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800">Our Services</h2>
            <p className="text-gray-600 mt-2">Serving our community with heart and faith.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            <Card title="Sunday Worship" image="/hero_two.svg" alt="Sunday Worship">
              <ul className="list-disc list-inside text-gray-700">
                <li>Morning Service: 10:00 AM</li>
                <li>Evening Service: 6:00 PM</li>
                <li>Sunday School: 9:00 AM</li>
              </ul>
            </Card>
            <Card title="Bible Study" image="/hero_three.svg" alt="Bible Study">
              <ul className="list-disc list-inside text-gray-700">
                <li>Wednesdays: 7:00 PM</li>
                <li>Fridays (Seniors): 10:00 AM</li>
              </ul>
            </Card>
            <Card title="Community Outreach" image="/hero_four.svg" alt="Community Outreach">
              <ul className="list-disc list-inside text-gray-700">
                <li>Food Pantry: Tuesdays 1–4 PM</li>
                <li>Homeless Ministry: Monthly</li>
                <li>Youth Programs: Weekends</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800">Upcoming Events</h2>
            <p className="text-gray-600 mt-2">Join us and be part of the experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
            <Card title="Summer Bible Camp" image="/hero_five.svg" alt="Summer Bible Camp">
              <p className="mb-2">June 15–20, 2025</p>
              <p>A week of fun, learning, and spiritual growth for children ages 5–12.</p>
            </Card>
            <Card title="Community Concert" image="/hero_three.svg" alt="Community Concert">
              <p className="mb-2">July 8, 2025 | 7:00 PM</p>
              <p>Join us for an evening of music and fellowship featuring local Christian artists.</p>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
