const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      needLogin: true
    },
    component: resolve => {
      require(['pages/index.vue'], resolve)
    },
    children:[
      {
        path: 'a',
        name: 'a',
        meta: {
          needLogin: true
        },
        component: resolve => {
          require(['pages/main/a.vue'], resolve)
        }
      },
      {
        path: 'b',
        name: 'b',
        meta: {
          needLogin: true
        },
        component: resolve => {
          require(['pages/main/b.vue'], resolve)
        }
      },
      {
        path: 'c',
        name: 'c',
        meta: {
          needLogin: true
        },
        component: resolve => {
          require(['pages/main/c.vue'], resolve)
        }
      },
      {
        path: 'd',
        name: 'd',
        meta: {
          needLogin: true
        },
        component: resolve => {
          require(['pages/main/d.vue'], resolve)
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      needLogin: false
    },
    component: resolve => {
      require(['pages/login.vue'], resolve)
    }
  },
  {
    path: '*',
    redirect: '/login'
  }
]
export default routes;
