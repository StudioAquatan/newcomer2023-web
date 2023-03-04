// eslint-disable-next-line @typescript-eslint/no-var-requires
const withExportImages = require("next-export-optimize-images");

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
    ],
  },
  experimental: { runtime: "experimental-edge" },
};

module.exports = withExportImages(nextConfig);
