import { createRouter, createWebHistory } from 'vue-router'

//懒加载
const Index=()=>import('../views/Index.vue')
const Login=()=>import('../views/Login.vue')
const ClassManage=()=>import('../views/ClassManage.vue')
const GoodsManage=()=>import('../views/GoodsManage.vue')
const OrderManage=()=>import('../views/OrderManage.vue')
const UsersManage=()=>import('../views/UsersManage.vue')
const UsersLevel=()=>import('../views/UsersLevel.vue')
const Home=()=>import('../views/Home.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/index/home',
      name: 'home',
      component: Home
    },{
      path: '/index/classmanage',
      name: 'classmanage',
      component: ClassManage
    },{
      path: '/index/goodsmanage',
      name: 'goodsmanage',
      component: GoodsManage
    },{
      path: '/index/ordermanage',
      name: 'ordermanage',
      component: OrderManage
    },{
      path: '/index/usersmanage',
      name: 'usersmanage',
      component: UsersManage
    },{
      path: '/index/userslevel',
      name: 'userslevel',
      component: UsersLevel
    }
  ]
})

export default router
