'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/Common/Card';

export default function Events() {
  const upcomingEvents = [
    {
      title: "Summer Bible Camp",
      image: "/hero_five.svg",
      alt: "Summer Bible Camp",
      date: "June 15–20, 2025",
      description: "A week of fun, learning, and spiritual growth for children ages 5–12.",
    },
    {
      title: "Community Concert",
      image: "/hero_three.svg",
      alt: "Community Concert",
      date: "July 8, 2025 | 7:00 PM",
      description: "Join us for an evening of music and fellowship featuring local Christian artists.",
    },
    {
      title: "Youth Retreat",
      image: "/hero_two.svg",
      alt: "Youth Retreat",
      date: "August 10–12, 2025",
      description: "A spiritual weekend for youth to connect and grow.",
    },
  ];

  const previousEvents = [
    {
      title: "Easter Celebration",
      image: "/hero_two.svg",
      alt: "Easter Celebration",
      date: "April 9, 2025",
      description: "A joyful gathering celebrating the resurrection of Christ.",
    },
    {
      title: "Lenten Retreat",
      image: "/hero_four.svg",
      alt: "Lenten Retreat",
      date: "March 3–5, 2025",
      description: "A weekend of reflection and prayer preparing for Easter.",
    },
    {
      title: "Christmas Carol Service",
      image: "/hero_one.svg",
      alt: "Christmas Carol Service",
      date: "December 24, 2024",
      description: "Songs and fellowship celebrating the birth of Jesus.",
    },
  ];

  const itemsPerPage = 2;

  // Upcoming events pagination
  const [upcomingPage, setUpcomingPage] = useState(0);
  const upcomingPagesCount = Math.ceil(upcomingEvents.length / itemsPerPage);
  const upcomingPageEvents = upcomingEvents.slice(
    upcomingPage * itemsPerPage,
    upcomingPage * itemsPerPage + itemsPerPage
  );

  // For smooth fade in/out on upcoming events
  const [upcomingVisible, setUpcomingVisible] = useState(true);
  useEffect(() => {
    setUpcomingVisible(false);
    const timeout = setTimeout(() => setUpcomingVisible(true), 200);
    return () => clearTimeout(timeout);
  }, [upcomingPage]);

  // Previous events pagination
  const [previousPage, setPreviousPage] = useState(0);
  const previousPagesCount = Math.ceil(previousEvents.length / itemsPerPage);
  const previousPageEvents = previousEvents.slice(
    previousPage * itemsPerPage,
    previousPage * itemsPerPage + itemsPerPage
  );

  // For smooth fade in/out on previous events
  const [previousVisible, setPreviousVisible] = useState(true);
  useEffect(() => {
    setPreviousVisible(false);
    const timeout = setTimeout(() => setPreviousVisible(true), 200);
    return () => clearTimeout(timeout);
  }, [previousPage]);

  return (
    <>
      {/* Upcoming Events */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-800">Upcoming Events</h2>
          <p className="text-gray-600 mt-2">Join us and be part of the experience.</p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 transition-opacity duration-300 ${
            upcomingVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {upcomingPageEvents.map((event) => (
            <Card key={event.title} title={event.title} image={event.image} alt={event.alt} href={''}>
              <p className="mb-2">{event.date}</p>
              <p>{event.description}</p>
            </Card>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 mt-8 text-purple-800 font-semibold">
          <button
            onClick={() => setUpcomingPage((p) => Math.max(p - 1, 0))}
            disabled={upcomingPage === 0}
            className="px-4 py-2 bg-green-600 text-white rounded disabled:bg-green-300"
          >
            Previous
          </button>

          <span>
            Page {upcomingPage + 1} of {upcomingPagesCount}
          </span>

          <button
            onClick={() => setUpcomingPage((p) => Math.min(p + 1, upcomingPagesCount - 1))}
            disabled={upcomingPage === upcomingPagesCount - 1}
            className="px-4 py-2 bg-green-600 text-white rounded disabled:bg-green-300"
          >
            Next
          </button>
        </div>
      </section>

      {/* Previous Events */}
      <section className="py-16 bg-gradient-to-br from-gray-100 via-white to-gray-200 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Previous Events</h2>
          <p className="text-gray-600 mt-2">Look back on some of our recent gatherings.</p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 transition-opacity duration-300 ${
            previousVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {previousPageEvents.map((event) => (
            <Card key={event.title} title={event.title} image={event.image} alt={event.alt} href={''}>
              <p className="mb-2">{event.date}</p>
              <p>{event.description}</p>
            </Card>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 mt-8 text-gray-800 font-semibold">
          <button
            onClick={() => setPreviousPage((p) => Math.max(p - 1, 0))}
            disabled={previousPage === 0}
            className="px-4 py-2 bg-gray-600 text-white rounded disabled:bg-gray-300"
          >
            Previous
          </button>

          <span>
            Page {previousPage + 1} of {previousPagesCount}
          </span>

          <button
            onClick={() => setPreviousPage((p) => Math.min(p + 1, previousPagesCount - 1))}
            disabled={previousPage === previousPagesCount - 1}
            className="px-4 py-2 bg-gray-600 text-white rounded disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
}
