import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.4"],
  images: {
    qualities: [75, 85],
  },
  reactCompiler: true,
};

export default nextConfig;
