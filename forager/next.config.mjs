/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude server-side modules from the client-side bundle
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        net: false,
        crypto: false,
        zlib: false,
        stream: false,
      };
    }
    return config;
  },
};

export default nextConfig;
