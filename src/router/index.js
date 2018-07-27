import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes'
Vue.use(Router)

const router=new Router({
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.needLogin){
    if(localStorage.token){
      next()
    }else{
      next({name:'login'})
    }
  }else{
    next()
  } 
})


export default router;


