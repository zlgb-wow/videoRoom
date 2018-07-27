import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'
import '@/assets/css/public.css'


import $ajax from '@/http'
Vue.prototype.$ajax = $ajax

export default function init(){
    Vue.use(ElementUI);
}