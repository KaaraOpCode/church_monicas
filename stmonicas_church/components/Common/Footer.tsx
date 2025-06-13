import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">St. Monica&apos;s Church</h3>
            <p className="text-gray-300">
              A place of worship, community, and spiritual growth.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-white">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-300 not-italic">
              St Monica, Leribe<br />
              Popopo, ST 12345<br />
              <a href="tel:+1234567890" className="hover:text-white">
                (266) 456-7890
              </a><br />
              <a href="mailto:info@stmonicas.church" className="hover:text-white">
                info@stmonicas.church
              </a>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} St. Monica&apos;s Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
