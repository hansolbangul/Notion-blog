/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['www.notion.so', 'lh5.googleusercontent.com', 'lh3.googleusercontent.com', 's3-us-west-2.amazonaws.com'],
  },
}

module.exports = nextConfig
