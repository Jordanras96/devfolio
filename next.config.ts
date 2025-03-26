import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    unoptimized: false,
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.syloe.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.streamlinehq.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "akveo.github.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fbflipper.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  compress: true,
  staticPageGenerationTimeout: 120,
  experimental: {
    // Désactiver l'optimisation CSS
    // optimizeCss: true,
    scrollRestoration: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
