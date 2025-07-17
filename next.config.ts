import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  compiler: {
    reactRemoveProperties: false,
  },
}

export default nextConfig
