'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DarkModeToggle from '../DarkModeToggle';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Community', href: '/community' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Toggle mobile menu open/close
  const toggleMenu = () => setIsOpen(!isOpen);

  // Check if nav item is active
  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
          onClick={() => setIsOpen(false)} // close menu on nav click
        >
          St. Monica&apos;s
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-base font-medium">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${
                    isActive(href)
                      ? 'text-accent underline decoration-2 underline-offset-4'
                      : 'text-gray-700 dark:text-gray-200 hover:text-accent dark:hover:text-amber-400'
                  } transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right controls */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle />

          {/* Hamburger button - mobile only */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent text-gray-700 dark:text-gray-200"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav menu */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col space-y-3 px-6 py-4">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block text-lg font-medium ${
                    isActive(href)
                      ? 'text-accent underline decoration-2 underline-offset-4'
                      : 'text-gray-700 dark:text-gray-200 hover:text-accent dark:hover:text-amber-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
