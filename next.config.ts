import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co', // Use the hostname of your Supabase project URL
      },
    ],
  }
};

export default nextConfig;
