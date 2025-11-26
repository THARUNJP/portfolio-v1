import type { NextConfig } from "next";

const nextConfig:NextConfig = {
  output: 'export',               // Required for GitHub Pages
  images: {
    unoptimized: true,            // Required for GH Pages
  },
  basePath: '/portfolio-V1',      // <-- replace this with your repo name
  assetPrefix: "/portfolio-V1/",   // <-- replace this with your repo name
};

export default nextConfig;
