import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nhps.com.au", // WordPress Image Domain
      },
    ],
  },
};

export default nextConfig;
