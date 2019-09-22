import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Store from '@/store'

import Home from '@/views/home/Home.vue'   // 引入组件 打包会打包在文件中，如果都用import的话，所有组件都会打包在一个文件中，导致文件很大

// 按需加载，访问路径的时候才会加载，不访问，不加载

const Recipe = () => import( '@/views/recipe/recipe' );
const Create = () => import( '@/views/create/create' );
const Edit = () => import( '@/views/user-space/edit' );

const Space = () => import( /* webpackChunkName: "space" */ '@/views/user-space/space');
const MenuList = () => import( /* webpackChunkName: "space" */ '@/views/user-space/menu-list');
const Fans = () => import( /* webpackChunkName: "space" */ '@/views/user-space/fans');

const Detail = () => import( '@/views/detail/detail');
const Login = () => import( '@/views/user-login/index');

const viewsRoute = [
  {
    path: '/recipe',
    name: 'recipe',
    title: '菜谱大全',
    component: Recipe
  },
  {
    path: '/create',
    name: 'create',
    title: '发布菜谱',
    component: Create,
    meta: {
      login: true
    }
  },
  {
    path: '/edit',
    title: '编辑个人资料',
    name: 'edit',
    meta: {login: true},
    component: Edit
  },
  {
    path: '/space',
    title: '个人空间',
    name: 'space',
    component: Space,
    redirect: {
      name: 'works'
    },
    meta: {
      login: true
    },
    children: [
      {
        path: 'works',
        name: 'works',
        title: '作品',
        component: MenuList
      },
      {
        path: 'fans',
        name: 'fans',
        title: '我的粉丝',
        component: Fans
      },
      {
        path: 'following',
        name: 'following',
        title: '我的关注',
        component: Fans
      },
      {
        path: 'collection',
        name: 'collection',
        title: '收藏',
        component: MenuList
      }
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    title: '菜谱细节',
    component: Detail
  }
]



const router = new Router({
  mode: 'history',  // hash http://localhost:8081#home   http://localhost:8081/home
  routes: [
    {
      path: '/',
      name: 'home',
      title: '首页',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      title: '登录页',
      component: Login
    },
    ...viewsRoute,
    {
      path: '*',
      name: 'noFound',
      title: '未找到',
      redirect: {
        name: 'home'
      }
    }
  ]
})


export default router;