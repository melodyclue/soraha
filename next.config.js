/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.youtube.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
