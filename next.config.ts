import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables static export
  images: { unoptimized: true }, // if you're using next/image
  assetPrefix: "/ener-b", // match GitHub repo name
  basePath: "/kenkkui",
};

export default nextConfig;
