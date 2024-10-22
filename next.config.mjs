/* import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
    enabled: false,
}); */

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos'],
    },
};

export default nextConfig;
