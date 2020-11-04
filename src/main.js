// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
axios.defaults.baseURL = 'http://localhost:8443/api'
import store from './store'
import Footer from './components/commons/About'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false
axios.defaults.withCredentials = true

Vue.use(ElementUI)
Vue.use(Footer)

router.beforeEach((to, from, next) => {
  if (store.state.user.username && to.path.startsWith('/admin')) {
    initAdminMenu(router, store)
  }
  // 已登录状态下访问 login 页面直接跳转到后台首页
  if (store.state.username && to.path.startsWith('/login')) {
    next({
      path: 'admin/dashboard'
    })
  }
  if(to.meta.requireAuth){
    if(store.state.user){
      axios.get('/authentication').then(resp => {
        if (resp.data){
          console.log(resp.data)
          next()
        } else {
          next({
            path: 'login',
            query:{
              redirect: to.fullPath
            }
          })
        }
      })
    }else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  }else {
    next()
  }
}
)
const initAdminMenu = (router, store) => {
  // 防止重复触发加载菜单操作
  if (store.state.adminMenus.length > 0) {
    return
  }
  axios.get('/menu').then(resp => {
    if (resp && resp.status === 200) {
      var fmtRoutes = formatRoutes(resp.data)
      router.addRoutes(fmtRoutes)
      store.commit('initAdminMenu', fmtRoutes)
    }
  })
}
const formatRoutes = (routes) => {
  let fmtRoutes = []
  routes.forEach(route => {
    if (route.children) {
      route.children = formatRoutes(route.children)
    }

    let fmtRoute = {
      path: route.path,
      component: resolve => {
        require(['./components/admin/' + route.component + '.vue'], resolve)
      },
      name: route.name,
      nameZh: route.nameZh,
      iconCls: route.iconCls,
      meta: {
        requireAuth: true
      },
      children: route.children
    }
    fmtRoutes.push(fmtRoute)
  })
  return fmtRoutes
}

/* eslint-disable no-new */
new Vue({
  el: '#app', //挂载点
  render: h => h(App),
  router,
  store,
  components: { App }, //根组件
  template: '<App/>'
})

