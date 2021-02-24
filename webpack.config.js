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
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          cssModules: {
            localIdentName: '[path][name]---[local]---[hash:base64:5]',
            camelCase: true,
          },
        },
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin()
  ]
});
