/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  publicRuntimeConfig: {
    basePath: '/portfolio',
  },
};

module.exports = nextConfig;
