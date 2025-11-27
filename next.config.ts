import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio-v1",       // FIXED (correct repo name)
  assetPrefix: "/portfolio-v1/",   // FIXED (correct repo name)
};

export default nextConfig;