/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/blog',
  typescript: {
    // 忽略 TypeScript 构建报错
    ignoreBuildErrors: true,
  },
  eslint: {
    // 忽略 ESLint 语法报错
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
