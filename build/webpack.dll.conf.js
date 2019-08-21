const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    vendor: ['vue/dist/vue.esm.js', 'vuex', 'axios', 'dayjs', 'vue-router', 'element-ui']
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: '[name].dll.js',
    library: '[name]_[hash]_lib'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../', 'static/js/[name]-manifest.json'),
      name: '[name]_[hash]_lib',
      context: __dirname
    })
  ]
}
