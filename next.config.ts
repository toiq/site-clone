import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dipainhouse.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
