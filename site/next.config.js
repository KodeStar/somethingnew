/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Something New',
    description: 'The official store for Kasm supported applications.',
    icon: '/img/logo.svg',
    listUrl: 'https://kodestar.github.io/somethingnew/list.json',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/somethingnew',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
