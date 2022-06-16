const { defineConfig } = require('@vue/cli-service');
const path = require('path');
function resolve(dir){
    return path.join(__dirname,'..',dir);
}
module.exports = defineConfig({
    transpileDependencies: true,
    pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'less',
          patterns: [
            // 这个是加上自己的路径,不能使用(如下:alias)中配置的别名路径
            path.resolve(__dirname, './src/assets/styles/main.less')
          ]
        }
    },
    chainWebpack: config => {
        // 保存时自动格式化代码
        config.plugin('eslint').tap((options) => {
            options[0].fix = true
            return options
          }),
          config.resolve.alias
          .set('@', resolve('src'))
          .set('assets', resolve('src/assets'))
          .set('utils', resolve('src/utils'));
      },
      devServer: {
        open: true,
        port: 8001,
        proxy: {
            '/apis': {
                target: 'https://api.github.com',  // target host
                ws: true,  // proxy websockets 
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': ''  // rewrite path
                }
            },
        }
    }
})
