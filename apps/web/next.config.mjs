import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.imgur.com",
      },
      {
        hostname: "img.freepik.com",
      },
      {
        hostname: "api-dev.itstoni.com",
        protocol: "https",
      },
      {
        hostname: "api.itstoni.com",
      },
      {
        protocol: "http",
        port: "1337",
        hostname: "localhost",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
