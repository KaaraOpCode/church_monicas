'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';
import Card from '@/components/Common/Card';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - St. Monica&apos;s Roman Catholic Church</title>
        <meta
          name="description"
          content="Learn about the Roman Catholic identity, mission, and community of St. Monica's Church."
        />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800">
        {/* Hero Section */}
        <section className="py-20 text-center px-4 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
                Welcome to St. Monica&apos;s Roman Catholic Church
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Guided by Christ and the teachings of the Catholic Church, we are a parish dedicated to faith, family, and service.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/#services"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow text-center transition"
                >
                  Mass Times & Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 animate-slide-up">
              <Image
                src="/hero_three.svg"
                alt="Catholic Community Worship"
                width={500}
                height={500}
                className="mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Parish History */}
        <section className="py-20 bg-gradient-to-r from-yellow-100 via-white to-yellow-200">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-yellow-800 mb-6">Our Patron: St. Monica</h2>
            <p className="text-gray-700 text-lg mb-6">
              St. Monica, mother of St. Augustine, is known for her unwavering prayer and faith. Inspired by her devotion, our parish continues her legacy through prayer, perseverance, and love.
            </p>
            <Image
              src="/hero_one.svg"
              alt="Saint Monica Icon"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-100 via-white to-indigo-200">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-indigo-800 mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg mb-6">
              To proclaim the Gospel of Jesus Christ, celebrate the Sacraments, and serve our local and global community in the love of God.
            </p>
            <Image
              src="/hero_four.svg"
              alt="Mission and Worship"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </section>

        {/* Catholic Values */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-12">Our Catholic Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card title="Faith in Christ" image="/hero_one.svg" href={''}>
                <p>
                  We are guided by the teachings of the Church and nourished by the Word of God and the Eucharist.
                </p>
              </Card>
              <Card title="Sacramental Life" image="/hero_two.svg" href={''}>
                <p>
                  Through Baptism, Confirmation, the Eucharist, and other sacraments, we grow closer to God and one another.
                </p>
              </Card>
              <Card title="Community & Charity" image="/hero_five.svg" href={''}>
                <p>
                  We reflect Christ’s love through mercy, outreach, and care for the vulnerable.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Pastoral Team Section */}
        <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-200">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet Our Pastoral Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card title="Fr. Emmanuel Mokhethi" image="/hero_two.svg" href={''}>
                <p>Parish Priest – Shepherds the parish through the Sacraments and preaching of the Word.</p>
              </Card>
              <Card title="Sr. Maria Thabiso" image="/hero_three.svg" href={''}>
                <p>Parish Sister – Leads faith formation, youth ministry, and women’s fellowship.</p>
              </Card>
              <Card title="Deacon Thabo Molefi" image="/hero_five.svg" href={''}>
                <p>Permanent Deacon – Assists in liturgy, pastoral care, and community outreach.</p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
