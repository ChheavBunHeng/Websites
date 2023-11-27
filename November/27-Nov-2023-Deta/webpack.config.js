const path = require('path');

module.exports = {
  entry: {
    bundle:['./src/js/script.js','./src/js/fetchAndLoader.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true,
  mode :"development"
};
