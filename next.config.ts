import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.1.13", "192.168.1.5"],
};

export default withMDX(nextConfig);
