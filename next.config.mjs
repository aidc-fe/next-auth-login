/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "img.alicdn.com",
      },
      { protocol: "https", hostname: "authjs.dev" },
    ],
  },
  env: {
    NEXT_PUBLIC_VERCEL_ENV: process.env.VERCEL_ENV,
    NEXT_PUBLIC_SHOPIFY_CLIENT_ID: process.env.SHOPIFY_CLIENT_ID,
    NEXT_PUBLIC_DEFAULT_TARGET_URL: process.env.DEFAULT_TARGET_URL,
    NEXT_PUBLIC_NEXT_AUTH_URL: process.env.NEXT_AUTH_URL,
  },
  async headers() {
    return [
      {
        source: "/auth/signOut",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3001", // Set your origin
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
