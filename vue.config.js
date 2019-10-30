module.exports = {
    // webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'darwin',
        host: '192.168.64.1',
        port: 8080,
        proxy: {
            '/api2': {
                target: 'http://localhost:3000',//设置你调用的接口域名和端口号
                changeOrigin: true,
            }
        }
    },
}