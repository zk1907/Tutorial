module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [ // 插件配置
    ['import', {
      libraryName: 'vant', // 名字
      libraryDirectory: 'es', // 目录名称
      style: true // 自动引入样式
    }, 'vant']
  ]

}
