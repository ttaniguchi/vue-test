const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env, { mode }) => ({
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        include: [path.resolve(__dirname, 'src')],
        enforce: 'pre',
      },
      {
        // <style module>に対応
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // <style scoped>に対応
          loaders: {
            css: 'vue-style-loader!css-loader',
          }
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
    new HtmlWebpackPlugin({
      hash: false,
      minify: false,
      filename: 'index.html',
      template: './src/index.html',
    }),
    new VueLoaderPlugin()
  ]
});
