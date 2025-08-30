/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    // Exclure la route CV du sitemap et de l'indexation
    async rewrites() {
        return [
            {
                source: '/cv.pdf',
                destination: '/api/cv',
            },
        ];
    },
    // Empêcher l'indexation de la route CV
    async headers() {
        return [
            {
                source: '/cv.pdf',
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'noindex, nofollow',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
