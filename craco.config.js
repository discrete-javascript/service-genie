module.exports = {
  webpack: {
    configure: {
      output: {
        filename: 'dist/index.js',
      },
      optimization: {
        runtimeChunk: false,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // vendor chunk
          },
        },
      },
    },
  },
  plugins: [
    {
      plugin: require('craco-plugin-scoped-css'),
    },
  ],
};
