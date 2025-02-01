/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.nhps.com.au",
      },
    ],
  },
};

module.exports = nextConfig;
