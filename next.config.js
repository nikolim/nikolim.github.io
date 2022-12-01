/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/nikolim.github.io/' : '',
  images: {
    unoptimized: true,
  },
}