import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

// import Recipe from '@/views/recipe-daquan/recipe'
// import Create from '@/views/create/create'
// import Space from '@/views/user-space/space'
// import Detail from '@/views/detail/detail'

const Recipe = () => import( '@/views/recipe-daquan/recipe' );
const Create = () => import( '@/views/create/create' );
const Space = () => import( '@/views/user-space/space');
const Detail = () => import( '@/views/detail/detail');

const viewsRoute = [
  {
    path: 'recipe',
    name: 'recipe',
    title: '菜谱大全',
    component: Recipe
  },
  {
    path: 'create',
    name: 'create',
    title: '发布菜谱',
    component: Create
  },
  {
    path: 'space',
    title: '个人空间',
    name: 'space',
    component: Space
  },
  {
    path: 'detail',
    name: 'detail',
    title: '菜谱细节',
    component: Detail
  }
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    ...viewsRoute
  ]
})
