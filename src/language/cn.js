const messagesCn = {
  language: 'CN',
  name: '高峰',
  age: '年龄 : 25',
  sex: '性别 : 男',
  location: '现居地 : 广东省深圳市',
  speciality: '专业 : 自动化',
  collage: '毕业院校 : 武汉工程大学(本科)',
  phone: '手机 : 18575593807',
  email:'邮箱 : fenggao1993@gmail.com',
  qq:'QQ : 750965838',
  wechat:'微信 : Hollow_worldfeng',
  career: '求职意向 : 前端开发',
  info:'基本信息',
  contact: '联系方式',
  skills:'掌握技能',
  work : '工作经历', 
  project : '项目经验',
  myself : '自我评价',
  work1 : `任职软件部担任前端开发组长一职，负责公司所有项目前端的选型，
  公司主要项目的技术主要选择的是vue+vux+springCloud，
  采用前后端分离的方式，采用spa设计，路由懒加载，熟练使用es6编码，
  采用webpack模块化打包前端代码部署nginx上，
  除此之外也参与了公司小程序的设计和开发，该小程序为物联网小程序，通过蓝牙与硬件设备进行通信，
  在任职期间依靠公司现有的基础设计和开发了关注公众号吸粉的业务，
  为公司获得可观利润
  `,
  work2 : `担任公司软件开发工程师一职，负责第三方项目的编写和维护，
  包括学校的教务系统和跨平台app的开发，教务系统采用的是公司基于delphi封装的框架
  开发xhtml，熟悉基本sql的增删改查，跨平台app基于Dcloud，采用Hbuilder开发，打包成安卓app和苹果的ipa文件，
  再去xcode上面打包成APP发布到App Store`,
  work3 : `担任公司ios软件开发工程师一职，负责第三方app项目的编写和维护，
  采用,MJRefresh,FMDB来对项目做覆盖刷新页面和登录的数据存储。.采用AFNetworking,SDWebImage来请求数据和请求相应的图片。
  利用自定义cell来完成一些复杂的图文混排。
  第三方的登陆和分享`,
  pc:'pc端web项目',
  h5:'移动端web项目',
  app: 'app项目',
  miniprogram: '微信小程序项目',
  pro1: `pc端官方网站，纯原生H5+js+css开发，
  采用媒体查询进行屏幕适配，
  使用flex布局对页面进行设计,
  使用animate动画库实现各种动画,
  后期维护采用bootstrap实现移动端的兼容,
  使用sass预编译css处理器,使用jquery的ajax完成前后端数据的交互
  `,
  pro2: `
  该项目为xhtml项目，该项目采用公司内部基于delphi封装的框架,
  属于团队项目，在该项目中除了常规的html+css+jquery等内容，还接触到了sql基本的
  增删改查等操作，配合zui框架以及UI设计师完成前端页面的设计和布局，实现的功能包括文件的上传和下载.
  `,
  pro3:`1.0系统基于mui前端框架开发，采用template.js进行动态dom的渲染，通过mui框架中
  自带的api实现常用的例如上拉加载下拉刷新等功能，通过CDN的方式在项目中引入了微信jssdk，
  实现了移动端的扫码识别功能
  2.0对项目进行重构后基于vue2.0开发，采用vue-cli工具配置开发环境，引入了vue-router路由管理器，
  less预编译css处理工具,由于是微信浏览器项目，所以选用了基于微信的WeUI的基础上封装vux组件框架，
  vux-loader保证了组件按需使用，因此不用担心最终打包了整个vux的组件库代码,基于axios采用promise进行
  请求拦截，采用ADN的方式集成jssdk，使用路由懒加载,大部分代码采用es6编写，例如箭头函数，p
  romise，模板字符串和let，const等，采用阿里云oss文件上传，内含微信公众号支付，
  微信扫一扫等微信jssdk功能`,
  pro4: `该项目属于跨平台APP项目，辅助学生在平台上完成学习中的选课，实习和毕业设计等，使用mui框架
  用html+javascript+css开发,用Hbuilder打包成app发布到安卓应用平台和appstore，
  负责项目中学习，实习和毕业设计老师模块的界面的搭建以及布局，
  其中包括所有页面的布局以及交互，并帮后台人员完成了部分接口的撰写，
  在该项中解决各种遇到的问题，并且在体验度优先的情况下完美的实现了功能，
  其中包括伪即时通讯，用原生的canvas实现饼状图的显示等。`,
  pro5: `该项目属于微信小程序项目，该项目是让用户在微信小程序上通过扫描二维码来启动设备，
  为了提升用户体验，项目中采用了蓝牙和设备进行交互，由于小程序中蓝牙api是异步返回结果，
  所以项目中大量采用了promise去封装小程序的api，做到实时返回蓝牙结果，去一步一步和硬件交互`,
  myself1:'熟练掌握JavaScript/HTML5/CSS3 等相关前端开发技术',
  myself2:'熟悉模块化前端开发流程vue,react等框架',
  myself3:'熟练使用vue-cli进行项目开发',
  myself4:'熟悉ES6开发新特性',
  myself5:'了解且配置过webpack打包工具',
  myself6:'熟悉less，sass和styuls等css预编译处理插件',
  myself7:'有jquery，bootstrap相关项目开发经验',
  myself8:'理解Web标准, 熟悉svn代码管理工具',
  myself9:'有丰富的微信公众号网页和微信小程序等移动端开发经验',
  myself10:'熟练使用微信web工具对项目进行开发和调试',
  myself11:'有xhtml项目开发经历和基本的sql增删改查的',
  myself12:'热爱前端技术，有较强的自学能力，能快速响应需求进行开发',
}

export default messagesCn