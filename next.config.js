/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_URL: process.env.API_URL,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
            },
        ],
    },
}

module.exports = nextConfig
