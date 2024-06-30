/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'app.econverse.com.br',
                port: '',
                pathname: '/**',
            },
        ]
    }
};

export default nextConfig;