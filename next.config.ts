import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enables static export
  basePath: "/hookies", // Set this to your GitHub repo name
  images: {
    unoptimized: true, // Required if using Next.js Image component
  },
};

export default nextConfig;
