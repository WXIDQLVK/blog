/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 因为你的项目在 blog/XHBlogs 子路径下，所以必须加上 basePath
  basePath: '/blog',
};

export default nextConfig;
