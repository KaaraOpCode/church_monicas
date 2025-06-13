'use client';

import Link from 'next/link';

const locations = [
  { type: 'School', name: 'SHHS', href: '/schools/shhs' },
  { type: 'School', name: 'HFHS', href: '/schools/hfhs' },
  { type: 'School', name: 'Primary School', href: '/schools/primary' },
  { type: 'Clinic', name: 'Clinic', href: '/clinic' },
  { type: 'Church', name: 'Church', href: '/church' },
];

export default function LocationsList() {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
          Our Locations
        </h2>
        <ul className="space-y-6">
          {locations.map(({ type, name, href }) => (
            <li
              key={name}
              className="flex items-center justify-between bg-white rounded shadow p-4 dark:bg-gray-800"
            >
              <div>
                <p className="text-xl font-semibold text-green-900">{name}</p>
                <p className="text-sm text-green-700">{type}</p>
              </div>
              <Link
                href={href}
                className="text-accent font-semibold hover:underline"
                aria-label={`View more about ${name}`}
              >
                {type === 'School' ? 'View Details' : 'Visit'}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
