import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryLink: { href: string; label: string };
  secondaryLink: { href: string; label: string };
}

export default function Hero({ title, subtitle, primaryLink, secondaryLink }: HeroProps) {
  return (
    <section className="mb-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{subtitle}</p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link href={primaryLink.href} legacyBehavior>
          <a className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
            {primaryLink.label}
          </a>
        </Link>
        <a
          href={secondaryLink.href}
          className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-md border border-blue-600 transition-colors"
        >
          {secondaryLink.label}
        </a>
      </div>
    </section>
  );
}
