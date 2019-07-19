// vue.config.js
module.exports = {
  baseUrl: '/',
  devServer: {
      proxy: {
          '/api': {
              target: ' http://127.0.0.1:7001',
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                '^/api': ''
              }
          }
      }
  }
}