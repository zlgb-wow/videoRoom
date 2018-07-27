import { WANUrl as url} from './base.js';
const {baseUrl,wsUrl} = url;
const api = {
  // websocket
  wsUrl:wsUrl,
  //产品介绍页(get)
  getProduct: baseUrl + '/liveroom/getProduct',
  //课程预告和关于我们(get)
  getAdvertisement: baseUrl + '/qq/advertisement/getAdvertisement',
  //直播间信息(get)
  getLiveRoom: baseUrl + '/liveroom',
  //登陆(post)
  login: baseUrl + '/login/login',
  //重设密码(post)
  setPass:baseUrl + '/login/setPass',
  //忘记密码(post)
  resetPass:baseUrl+ '/login/resetPass',
  //获取图形验证码(get)
  getCodeImg:baseUrl + '/login/getCode',
  //注册(post)
  register:baseUrl + '/login/register',
  //修改昵称(post)
  updataUserName:baseUrl+'/login/updataUserName',
  //获取手机验证码(post)
  sendVerificationCode:baseUrl+'/login/sendVerificationCode',
  //点赞
  addLikes:baseUrl+'/liveroom/addLikes',
  //获取课程信息
  getCurriculum:baseUrl+'/liveroom/getCurriculum',
  //获取ws历史记录
  getChatHistory:baseUrl+'/liveroom/initChatHistory',
  //获取游客信息
  getTouristGrade:baseUrl +'/liveroom/getTouristGrade',
}

export default api
