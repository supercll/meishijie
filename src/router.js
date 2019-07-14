import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'

const Recipe = () => import( '@/views/recipe-daquan/recipe' );
const Create = () => import( '@/views/create/create' );

const Space = () => import( /* webpackChunkName: "space" */ '@/views/user-space/space');

const MenuList = () => import( /* webpackChunkName: "space" */ '@/views/user-space/menu-list');
const Fans = () => import( /* webpackChunkName: "space" */ '@/views/user-space/fans');

const Detail = () => import( '@/views/detail/detail');

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
    component: Create
  },
  {
    path: '/space',
    title: '个人空间',
    name: 'space',
    component: Space,
    redirect: {
      name: 'works'
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
        path: 'follower',
        name: 'follower',
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

Vue.use(Router)

export default new Router({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    ...viewsRoute
  ]
})
