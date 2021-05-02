module.exports = {
  webpack: {
    configure: {
      output: {
        filename: 'static/js/bundle.js',
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
