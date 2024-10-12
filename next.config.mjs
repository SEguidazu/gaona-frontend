/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    STRAPI_URL: process.env.STRAPI_URL,
    STRAPI_API: process.env.STRAPI_API,
    STRAPI_TOKEN: process.env.STRAPI_TOKEN,
  },
};

export default nextConfig;
