'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="py-20 text-center px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Welcome to St. Monica&apos;s Church
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            A place of worship, community, and spiritual growth.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4 flex-wrap">
            <Link
              href="/about"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow text-center"
            >
              Learn More
            </Link>
            <Link
              href="#services"
              className="border border-blue-700 hover:bg-blue-50 text-blue-700 font-medium py-3 px-6 rounded-full text-center"
            >
              Our Services
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 animate-slide-up">
          <Image
            src="/hero_one.svg"
            alt="Church Hero"
            width={500}
            height={500}
            className="mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
