/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isGithubActions ? repo : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
