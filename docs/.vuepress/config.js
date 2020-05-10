module.exports = {
  base:'/y-ui/',
  title: 'y-ui', // 设置网站标题
  description: 'ui 库', //描述
  port: 1234, //端口
  themeConfig: { //主题配置
      nav: [{
              text: '主页',
              link: '/'
          }, // 导航条
      ],
      // 为以下路由添加侧边栏
      sidebar: {
          '/components/': [
            {
                title:'入门',
                collapsable: false,
                children: [
                    'start',
                ]
            },
            {
                  title:'基础组件',
                  collapsable: false,
                  children: [
                      'button',
                      'message',
                      'popover',
                      'collapse',
                      'carousel'
                  ]
            },
            {
                  title:'导航',
                  collapsable: false,
                  children: [
                      'tabs',
                  ]
            },
            {
                  title:'数据',
                  collapsable: false,
                  children: [
                      'pagination',
                  ]
            },
          ]
      }
  }
}
