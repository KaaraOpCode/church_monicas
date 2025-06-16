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
  ctaText?: string;
  ctaHref?: string;
  children?: ReactNode;
}

export default function Card({
  title,
  image,
  alt = title,
  icon,
  badges = [],
  ctaText,
  ctaHref,
  children,
}: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Image Section */}
      {image && (
        <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center space-x-3 mb-3">
          {/* Icon */}
          {icon && (
            <div className="text-green-700 text-2xl flex-shrink-0">
              {icon}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {badges.map((badge, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full select-none"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Children (description/content) */}
        <div className="text-gray-700 flex-grow">{children}</div>

        {/* CTA Button */}
        {ctaText && ctaHref && (
          <div className="mt-5">
            <Link
              href={ctaHref}
              className="inline-block w-full text-center bg-green-700 text-white font-semibold py-2 rounded-md hover:bg-green-800 transition"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
