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
      component: Index,
      children:[
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta:{
            title:'后台主页'
          }
        },{
          path: 'classmanage',
          name: 'classmanage',
          component: ClassManage,
          meta:{
            title:'分类管理'
          }
        },{
          path: 'goodsmanage',
          name: 'goodsmanage',
          component: GoodsManage,
          meta:{
            title:'商品管理'
          }
        },{
          path: 'ordermanage',
          name: 'ordermanage',
          component: OrderManage,
          meta:{
            title:'订单管理'
          }
        },{
          path: 'usersmanage',
          name: 'usersmanage',
          component: UsersManage,
          meta:{
            title:'用户管理'
          }
        },{
          path: 'userslevel',
          name: 'userslevel',
          component: UsersLevel,
          meta:{
            title:'用户等级'
          }
        }
      ]
    },{
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
