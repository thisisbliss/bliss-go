const path = require('path');
const webpack = require('webpack');

module.exports = {
  /**
   * The entry file for our whole bundle. We only have 1 by default, but we can
   * add as many as we need to make use of code splitting, vendor bundling etc.
   * as we need it.
   * More info: https://webpack.js.org/concepts/output/#multiple-entry-points
   */
  entry: {
    app: './scripts/lib/entry.js'
  },

  /**
   * The output of our bundle. The output will use the key of the entrypoint
   * specified above, in this case, app.js
   */
  output: {
    path: path.resolve(__dirname, 'scripts'),
    filename: '[name].js'
  },

  /**
   * Webpack is only responsible for bundling. Any other functionality comes
   * from modules, usually loaders.
   */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          failOnWarning: false,
          failOnError: false,
          // There is an issue with the loader, causing all errors to stop
          // webpack from compiling. This option will force errors to be emitted
          // as warnings, allowing webpack to continue bundling.
          emitWarning: true
        }
      }
    ]
  },

  /**
   * Plugins add functionality to webpack.
   */
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ],

  /**
   * `devtool` determines the type of sourcemaps, if any, we want to output. This
   * is generally a good idea, as tracking down bugs without a sourcemap in a
   * bundled file is not fun.
   */
  devtool: 'source-map'
}