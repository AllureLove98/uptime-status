// 配置
window.Config = {

  // 站点名
  SiteName: 'CloudSpeed Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见说明
  ApiDomain: 'rapid-tooth-7352.2487642542.workers.dev',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm789837457-1fc72e716d52329897da7f90',
    'm789837278-154314b04ede808e08294cef',
    'm789837467-aa6506cb8b1f1e242cc07c9b',
    'm789837475-07b0237674147748ad60a2fb',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://tjys.now.sh/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/qikaile/uptime-status'
    }
  ]
};
