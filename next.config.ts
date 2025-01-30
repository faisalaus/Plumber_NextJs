import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["nhps.com.au"], // Allow images from WordPress
  },
};

export default nextConfig;
