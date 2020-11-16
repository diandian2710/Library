import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from "../components/home/AppIndex";
import Login from "../components/Login";
import Home from "../components/Home";
import LibraryIndex from "../components/library/LibraryIndex";
import Register from "../components/Register";
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/home',
      component: Home,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index', // // 要注意，以 / 开头的嵌套路径会被当作根路径,这让你充分的使用嵌套组件而无须设置嵌套的路径。
          name: 'AppIndex',
          component: AppIndex,
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
        },
        {
          path: '/jotter',
          name: 'Jotter',
          component: () => import('../components/jotter/Articles')
        },
        {
          path: '/jotter/article',
          name: 'Article',
          component: () => import('../components/jotter/ArticleDetails')
        },
        {
          path: '/admin/content/editor',
          name: 'Editor',
          component: () => import('../components/admin/content/ArticleEditor'),
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/admin',
      name: 'Admin',
      component: ()=>import('../components/admin/AdminIndex'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: '*',
      component: ()=>import('../components/pages/Error404')
    }
  ]
})

// 用于创建默认路由
export const createRouter = routes => new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/home',
      component: Home
    },
    {
      // home页面并不需要被访问，只是作为其它组件的父组件
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index', // // 要注意，以 / 开头的嵌套路径会被当作根路径,这让你充分的使用嵌套组件而无须设置嵌套的路径。
          name: 'AppIndex',
          component: AppIndex,
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
        },
        {
          path: '/jotter',
          name: 'Jotter',
          component: () => import('../components/jotter/Articles')
        },
        {
          path: '/jotter/article',
          name: 'Article',
          component: () => import('../components/jotter/ArticleDetails')
        },
        {
          path: '/admin/content/editor',
          name: 'Editor',
          component: () => import('../components/admin/content/ArticleEditor'),
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../components/Register')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../components/admin/AdminIndex'),
      meta: {
        requireAuth: true
      },
    },

    {
      path: '*',
      component: () => import('../components/pages/Error404')
    }
  ]
})
