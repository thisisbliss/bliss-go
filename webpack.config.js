const path = require('path');

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
    filename: '[name].js',
    path: path.resolve(__dirname, 'scripts')
  }
}