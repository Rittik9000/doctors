/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'doctor-app-bp0m.onrender.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
