// Karma configuration
// Generated on Fri Apr 17 2020 14:58:57 GMT+0800 (GMT+08:00)
const webpackConfig = require('@vue/cli-service/webpack.config');
module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    frameworks: ['mocha'],
    files:['tests/**/*.spec.js'], //需要加载到浏览器的文件列表
    exclude: [],
    preprocessors: { //在浏览器使用之前处理匹配的文件
      '**/*.spec.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    webpack: webpackConfig,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity
  })
}
