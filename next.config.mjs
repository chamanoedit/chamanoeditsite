/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "pay.hotmart.com",
      },
      {
        protocol: "https",
        hostname: "**.hotmart.com",
      },
      {
        protocol: "https",
        hostname: "connect.facebook.net",
      },
    ],
  },
}

export default nextConfig
