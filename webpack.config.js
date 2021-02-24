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
    new VueLoaderPlugin()
  ]
});
