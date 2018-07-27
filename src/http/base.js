// 常量

// 外网配置
const WANUrl = {
  baseUrl: '/api/qq_web',
  // baseUrl: '/qq_web',
  wsUrl:'ws://120.24.250.149:9001/websocket'
}

// 内网配置
const LANUrl = {
  baseUrl: '/api',
  wsUrl:'ws://192.168.57.132:9001/websocket'
}

// 测试环境配置
const testUrl = {
  baseUrl: 'http://server.ainiugu666.com/WxService/necy/',
  ossService: 'http://www.ainiugu6.com/fileUpload/post/FileUploadService/',
  wechat: {
    APPID: 'wx6013b617eaa66c73', // 线上微信公众号appId
    REDIRECTURL: 'http://server.ainiugu666.com/WxService/get/wxlogin/getCode',
    getOpenId: 'http://server.ainiugu666.com/WxService/get/wxlogin/getOpenId',
    state: window.location.hostname.replace(/[.]/g, 'A')
  },
  staticPath: '/static/',
  openFire: {
    serviceUrl: '112.74.12.213',
  }
}

// 任何环境下都公用的常量
const other = {
  VERSION: '1.1.2',
  mockUrl: 'http://mockTest/',
  OSSPATH: 'http://oss.ainiugu666.com/',
  CHATTYPE: { // 聊天室类型
    TASKFORCE: 0, // 专案组
    PRIVATE: 1, // 私人理财师
    CLUB: 2 // 俱乐部
  },
  CHATMSGTYPE: { // 聊天内容类型
    TEXT: 0, // 文本
    IMAGE: 1, // 图片
    FILE: 2, // 文件
    AUDIO: 3, // 音频
    VIDEO: 4 // 视频
  },
  PRODUCTTYPE: { // 产品类型
    DXJN: 5,
    JGGT: 6,
    SRDZ: 7
  },
  CHATROLE: { // 聊天角色
    TEA: 1,
    STU: 2
  }
}

export {
  WANUrl,
  LANUrl,
  testUrl,
  other
}
