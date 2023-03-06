/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.NEXT_ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.workers.dev",
        pathname: "/**",
      },
    ],
    loader: "custom",
  },
  compiler: {
    emotion: true,
  },
  swcMinify: true,
  webpack: (config, ctx) => {
    if (ctx.nextRuntime === "edge") {
      if (!config.resolve.conditionNames) {
        config.resolve.conditionNames = ["require", "node"];
      }
      if (!config.resolve.conditionNames.includes("worker")) {
        config.resolve.conditionNames.push("worker");
      }
    }
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
