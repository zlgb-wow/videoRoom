import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/common/reset.css'
import '@/assets/css/common/public.css'
import '@/assets/css/common/common.css'


import $ajax from '@/http'
Vue.prototype.$ajax = $ajax

export default function init(){
    Vue.use(ElementUI);
}