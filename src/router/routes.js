const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    meta:{
      needLogin:true
    },
    component: resolve => {
        require(['components/HelloWorld.vue'], resolve)
      }
  },
  {
    path: '/login',
    name: 'login',
    meta:{
      needLogin:false
    },
    component: resolve => {
        require(['pages/login.vue'], resolve)
      }
  },
  {
    path: '*',
    redirect:'/login'
  }
]
export default routes;
