const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    util: require.resolve('util/'),
    zlib: require.resolve('browserify-zlib'),
    stream: require.resolve('stream-browserify'),
    url: require.resolve('url/'),
    assert: require.resolve('assert/'),
    crypto: require.resolve('crypto-browserify'),
    process: require.resolve('process/browser.js') // Note the .js extension
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser.js', // Note the .js extension
      Buffer: ['buffer', 'Buffer']
    })
  );

  // Add this to handle ESM modules
  config.module.rules.push({
    test: /\.m?js$/,
    resolve: {
      fullySpecified: false
    }
  });

  return config;
};