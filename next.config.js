/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/center-hello-world',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
