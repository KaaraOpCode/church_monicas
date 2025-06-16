import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">St. Monica&apos;s Church</h3>
            <p className="text-gray-300">
              A place of worship, community, and spiritual growth.
            </p>
          </div>

          <div className="md:col-span-1">
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

          <div className="md:col-span-1">
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

          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Donate</h3>
            <div className="text-gray-300 space-y-4 text-sm">
              <div>
                <h4 className="font-semibold">Banks</h4>
                <p>First National Bank</p>
                <p>Account No: 1234567890</p>
                <p>Branch Code: 987654</p>
              </div>
              <div>
                <h4 className="font-semibold">Mobile Money</h4>
                <p>Mpesa: +266 700 12345</p>
                <p>EcoCash: +266 701 67890</p>
                <p>Use your phone number as reference</p>
              </div>
              <div>
                <h4 className="font-semibold">Crypto</h4>
                <p>Bitcoin: 1A2b3C4d5E6f7G8h9J0kLmNoPqRsTuVwXyZ</p>
                <p className="mt-4">Ethereum: 0xAbCdEf0123456789aBcDEf0123456789aBCdEf01</p>
              </div>
            </div>
          </div>

          {/* Crypto QR codes */}
          <div className="md:col-span-1 flex flex-col items-center space-y-8">
            <div className="text-center">
              <Image
                src="/qr-bitcoin.png"
                alt="Bitcoin QR Code"
                width={96}
                height={96}
                priority={false}
                className="mx-auto"
              />
              <p className="mt-2 text-gray-300 text-sm">Scan to donate BTC</p>
            </div>

            <div className="text-center">
              <Image
                src="/qr-ethereum.png"
                alt="Ethereum QR Code"
                width={96}
                height={96}
                priority={false}
                className="mx-auto"
              />
              <p className="mt-2 text-gray-300 text-sm">Scan to donate ETH</p>
            </div>
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
