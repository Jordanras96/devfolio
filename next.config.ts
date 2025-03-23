import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    unoptimized: false,
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  optimizeFonts: true,
  compress: true,
  swcMinify: true,
  staticPageGenerationTimeout: 120,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
