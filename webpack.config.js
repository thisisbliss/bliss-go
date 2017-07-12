const path = require('path');

module.exports = {
  entry: './scripts/lib/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'scripts')
  }
}