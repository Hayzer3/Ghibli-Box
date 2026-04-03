import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              dimensions: false, // Remove width/height fixos do SVG
              svgoConfig: {
                plugins: [
                  {
                    name: "removeViewBox",
                    active: false, // Mantém o viewBox
                  },
                ],
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
