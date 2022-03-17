module.exports = {
  devIndicators: {
    autoPrerender: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  env: {
    API_URL: 'http://localhost:1336',
    PER_PAGE: 12,
  },
};
