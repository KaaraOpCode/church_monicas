'use client';
import Image from 'next/image';
import Card from '@/components/Common/Card';

export default function Announcements() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-indigo-100 via-white to-indigo-200 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/hero_one.svg" alt="Decorative background" fill className="object-cover opacity-10" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl font-extrabold text-indigo-800 drop-shadow-sm">📢 Announcements</h2>
          <p className="mt-3 text-lg text-gray-700">
            Stay updated with our latest news, events, and community updates.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 animate-slide-up">
          <Card title="Sunday Service Time Change" image="/hero_five.svg" href={''}>
            <p className="mb-2 text-sm text-gray-500 italic">June 10, 2025</p>
            <p className="text-gray-700">
              Starting next week, our Sunday services will begin at <strong>10:00 AM</strong> instead of 9:30 AM.
            </p>
          </Card>

          <Card title="Community Outreach Program" image="/hero_four.svg" href={''}>
            <p className="mb-2 text-sm text-gray-500 italic">June 8, 2025</p>
            <p className="text-gray-700">
              Join us this Saturday for our monthly outreach at the local shelter from <strong>9 AM to 1 PM</strong>.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
