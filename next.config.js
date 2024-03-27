const nextConfig = {
  compiler: {
    styledComponents: true
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // appDir: true,
  },
  images: {
    // domains: [process.env.IMAGES_URL || ''],
  },
  distDir: 'build'
}

module.exports = nextConfig
