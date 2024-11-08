/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.STRAPI_HOST,
        port: process.env.STRAPI_PORT,
      },
    ],
  },
  env: {
    STRAPI_HOST: process.env.STRAPI_HOST,
    STRAPI_API: process.env.STRAPI_API,
    STRAPI_TOKEN: process.env.STRAPI_TOKEN,
  },
};

export default nextConfig;
