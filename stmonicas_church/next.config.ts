import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'example.com',       // Replace with your external image domains
      'cdn.somestorage.io',
      // add more domains as needed
    ],
  },
};

export default nextConfig;
