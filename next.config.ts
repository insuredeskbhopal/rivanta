import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,
  allowedDevOrigins: ["172.31.240.1"],
  images: { qualities: [75, 90] },
  async redirects() {
    return [{ source: "/proof/cbg", destination: "/", permanent: false }];
  },
};

export default nextConfig;
