'use client';
import Card from '@/components/Common/Card';

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-800">Our Services</h2>
        <p className="text-gray-600 mt-2">Serving our community with heart and faith.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <Card title="Sunday Worship" image="/hero_two.svg" alt="Sunday Worship" href={''}>
          <ul className="list-disc list-inside text-gray-700">
            <li>Morning Service: 10:00 AM</li>
            <li>Evening Service: 6:00 PM</li>
            <li>Sunday School: 9:00 AM</li>
          </ul>
        </Card>
        <Card title="Bible Study" image="/hero_three.svg" alt="Bible Study" href={''}>
          <ul className="list-disc list-inside text-gray-700">
            <li>Wednesdays: 7:00 PM</li>
            <li>Fridays (Seniors): 10:00 AM</li>
          </ul>
        </Card>
        <Card title="Community Outreach" image="/hero_four.svg" alt="Community Outreach" href={''}>
          <ul className="list-disc list-inside text-gray-700">
            <li>Food Pantry: Tuesdays 1–4 PM</li>
            <li>Homeless Ministry: Monthly</li>
            <li>Youth Programs: Weekends</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
