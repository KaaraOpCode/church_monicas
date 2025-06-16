'use client';

import Head from 'next/head';
import Image from 'next/image';
import { FaSchool, FaClinicMedical, FaChurch, FaUsers, FaFemale, FaMale } from 'react-icons/fa';
import Card from '@/components/Common/Card';
import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';

const locations = [
  { type: 'School', name: 'SHHS', href: '/schools/shhs', image: '/hero_one.svg', alt: 'SHHS School Building', icon: <FaSchool /> },
  { type: 'School', name: 'HFHS', href: '/schools/hfhs', image: '/hero_five.svg', alt: 'HFHS School Building', icon: <FaSchool /> },
  { type: 'School', name: 'Primary School', href: '/schools/primary', image: '/hero_three.svg', alt: 'Primary School Building', icon: <FaSchool /> },
  { type: 'Clinic', name: 'Clinic', href: '/clinic', image: '/hero_two.svg', alt: 'Community Clinic', icon: <FaClinicMedical /> },
  { type: 'Church', name: 'Church', href: '/church', image: '/hero_four.svg', alt: 'Church Building', icon: <FaChurch /> },
];

export default function Community() {
  return (
    <>
      <Head>
        <title>Community - St. Monica&apos;s Church</title>
        <meta
          name="description"
          content="Explore the ecosystem of education, health, and worship that supports our community."
        />
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 text-gray-800">
        {/* Hero Section */}
        <section className="py-20 text-center px-4 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-900">
                Strengthening Our Roots Together
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Through education, health, and spiritual care, our ecosystem empowers every person in the community to flourish in faith and well-being.
              </p>
              <a
                href="#ecosystem"
                className="inline-block bg-green-700 text-white py-2 px-6 rounded-full font-semibold hover:bg-green-800 transition"
              >
                Explore the Ecosystem
              </a>
            </div>
            <div className="md:w-1/2 animate-slide-up">
              <Image
                src="/hero_four.svg"
                alt="Illustration of community ecosystem"
                width={500}
                height={500}
                className="mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Community Ecosystem Section */}
        <section
          id="ecosystem"
          className="relative py-20 bg-gradient-to-r from-green-100 via-white to-green-200 overflow-hidden"
        >
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <div className="mb-12 animate-fade-in">
              <h2 className="text-4xl font-extrabold text-green-800 drop-shadow-sm">
                🌿 Community Ecosystem
              </h2>
              <p className="mt-3 text-lg text-gray-700">
                Our community thrives through strong institutions that uplift minds, bodies, and souls.
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 animate-slide-up">
              {locations
                .filter(loc => ['School', 'Clinic', 'Primary School'].includes(loc.type))
                .map(({ name, href, image, alt, icon }) => (
                  <Card
                    key={name}
                    title={name}
                    image={image || '/default_location.svg'}
                    alt={alt}
                    icon={icon}
                    badges={['Vital']}
                    href={href}
                  >
                    <p className="text-gray-700 mb-4">{`A vital ${name} supporting our community.`}</p>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="py-16 bg-white">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-green-800">Get Involved</h2>
            <p className="text-gray-600 mt-2">
              There are many ways to participate and grow with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 animate-slide-up">
            <Card
              title="Youth Fellowship"
              image="/hero_five.svg"
              alt="Youth Fellowship"
              icon={<FaUsers />}
              badges={['Weekly', 'Fun']}
              href="/youth-fellowship/join"
              ctaText="Join Youth"
            >
              <ul className="list-disc list-inside text-gray-700">
                <li>Youth meetings every Friday at 6 PM</li>
                <li>Fun and faith-based activities</li>
                <li>Community service projects</li>
              </ul>
            </Card>
            <Card
              title="Women’s Ministry"
              image="/hero_one.svg"
              alt="Women's Ministry"
              icon={<FaFemale />}
              badges={['Monthly', 'Support']}
              href="/womens-ministry/join"
              ctaText="Join Women"
            >
              <ul className="list-disc list-inside text-gray-700">
                <li>Monthly gatherings</li>
                <li>Spiritual growth workshops</li>
                <li>Support and fellowship</li>
              </ul>
            </Card>
            <Card
              title="Men’s Ministry"
              image="/hero_two.svg"
              alt="Men's Ministry"
              icon={<FaMale />}
              badges={['Weekly', 'Mentorship']}
              href="/mens-ministry/join"
              ctaText="Join Men"
            >
              <ul className="list-disc list-inside text-gray-700">
                <li>Weekly Bible studies</li>
                <li>Mentorship programs</li>
                <li>Community outreach</li>
              </ul>
            </Card>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
