const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env, { mode }) => ({
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dest'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin()
  ]
});
