/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/main",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
