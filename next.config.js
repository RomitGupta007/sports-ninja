/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["cdn.vectorstock.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig
