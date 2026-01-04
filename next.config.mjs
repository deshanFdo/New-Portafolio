/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/New-Portafolio',
  assetPrefix: '/New-Portafolio/',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
