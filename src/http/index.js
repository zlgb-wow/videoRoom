import axios from 'axios'
import qs from 'qs'
import store from '@/vuex';



axios.interceptors.request.use(config => {
  if (config.token) {
    if (config.method == 'get') {
      config.params.token = localStorage.token;
    } else if (config.method == 'post') {
      config.data.token = localStorage.token;
    }
  }

  return config
}, error => {
  return Promise.reject(error)
})


axios.interceptors.response.use(response => {
  // console.log(response);
  // if(response.data.returnCode=='001007'){
  //   store.dispatch('logout');
  //   Toast(response.data.errorInfo);
  //   return false;
  // }
  return response
}, error => {
  return Promise.resolve(error.response)
});

const httpServer = (opts, data) => {
  var userInfo = localStorage.userInfo ? JSON.parse(localStorage.userInfo) : {};
  let Public = { //公共参数
    'token': localStorage.token ? localStorage.token : "",
    'account': userInfo.account ? userInfo.account : "",
  }
  //const baseURL='/api';  //开发环境前缀
  const baseURL = ''; //build打包请求前缀

  let httpDefaultOpts = { //http默认配置
    method: opts.method,
    baseURL,
    url: opts.url,
    timeout: 10000,
    params: Object.assign(Public, data),
    data: Object.assign(Public, data),
    headers: opts.method == 'get' ? {
      'X-Requested-With': 'XMLHttpRequest',
      "Accept": "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    } : {
      // 'X-Requested-With': 'XMLHttpRequest',
      // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      "Accept": "application/json",
    }
  };

  if (opts.method == 'get') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }

  let promise = new Promise((resolve, reject) => {
    axios(httpDefaultOpts).then(res => {
      //successState(res)
      resolve(res);
    }).catch(error => {
      //errorState(response)
      reject(error)
    })
  })
  return promise
}

export default httpServer
