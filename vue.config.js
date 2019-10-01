module.exports = {
    // webpack-dev-server 相关配置
    devServer: {
     open: process.platform === 'darwin',
     host: '192.168.137.1',
     port: 8080,
    },
    // 第三方插件配置
    pluginOptions: {
     // ...
    }
   }