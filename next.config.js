/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mks-sistemas.nyc3.digitalocenspaces.com',
        port: '',
        pathname: '/products/**',
      },
    ],
  },
};

module.exports = nextConfig;
