import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for the slim Docker runtime: `next build` emits
  // `.next/standalone` (server.js + traced node_modules only).
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/essays",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/essays/:slug",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/#digital-guides",
        permanent: true,
      },
      {
        source: "/packages",
        destination: "/#digital-guides",
        permanent: true,
      },
      {
        source: "/store",
        destination: "/#digital-guides",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
};

export default nextConfig;
