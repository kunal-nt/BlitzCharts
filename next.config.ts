import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // Optional: if you want to handle images without Next.js optimization
  },
};

export default nextConfig;
