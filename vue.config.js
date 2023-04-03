const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // webpack-dev-server 相关配置
  devServer: {   
    host: 'localhost',
    port: 8080,
    open: true,
    proxy: {
      'api': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        ws: true,
        pathRewrite: { 
          '^/api': ''
        }
      }
    },
  },
})
