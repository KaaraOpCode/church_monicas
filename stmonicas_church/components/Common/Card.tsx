'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  image?: string;
  alt?: string;
  icon?: ReactNode;
  badges?: string[];
  href: string; // required to make card clickable
  ctaText?: string;
  children?: ReactNode;
}

export default function Card({
  title,
  image,
  alt = title,
  icon,
  badges = [],
  href,
  ctaText,
  children,
}: CardProps) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
    >
      {/* Image Section */}
      {image && (
        <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-5 flex flex-col">
        <div className="flex items-center space-x-3 mb-3">
          {icon && <div className="text-green-700 text-2xl">{icon}</div>}
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>

        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {badges.map((badge, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        <div className="text-gray-700 flex-grow">{children}</div>

        {/* CTA Button */}
        {ctaText && (
          <div className="mt-5">
            <span className="inline-block bg-green-700 text-white font-semibold py-2 px-4 rounded-md cursor-pointer select-none">
              {ctaText}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
