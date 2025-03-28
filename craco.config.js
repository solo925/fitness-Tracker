module.exports = {
    webpack: {
      configure: (webpackConfig) => ({
        ...webpackConfig,
        output: {
          ...webpackConfig.output,
          chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
        }
      })
    }
  };