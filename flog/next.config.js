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
  generateBuildId: () => "flog",
  exportPathMap: () => ({
    "/signUp": { page: "/signUp" },
    "/login": { page: "/login" },
    "/main": { page: "/main" },
    "/404": { page: "/404" },
  }),

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
