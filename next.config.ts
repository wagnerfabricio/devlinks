import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
        pathname: "/wagnerfabricio-devlinks/**",
      },
    ],
  },
};

export default nextConfig;
