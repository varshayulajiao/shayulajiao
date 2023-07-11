import { createRouter, createWebHistory } from 'vue-router'
import useLogin from '../stores/user'

//懒加载
const Index=()=>import('../views/Index.vue')
const Login=()=>import('../views/Login.vue')
const ClassManage=()=>import('../views/ClassManage.vue')
const GoodsManage=()=>import('../views/GoodsManage.vue')
const OrderManage=()=>import('../views/OrderManage.vue')
const UsersManage=()=>import('../views/UsersManage.vue')
const UsersLevel=()=>import('../views/UsersLevel.vue')
const Home=()=>import('../views/Home.vue')
const Comment=()=>import('../views/Comment.vue')
const Notice=()=>import('../views/Notice.vue')
const AdministraorsManage=()=>import('../views/AdministraorsManage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta:{
        auth:true
      }
      ,
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
        },{
          path: 'comment',
          name: 'comment',
          component: Comment,
          meta:{
            title:'评论管理'
          }
        },{
          path: 'notice',
          name: 'notice',
          component: Notice,
          meta:{
            title:'公告管理'
          }
        },{
          path: 'administraorsmanage',
          name: 'administraorsmanage',
          component: AdministraorsManage,
          meta:{
            title:'管理员管理'
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

router.beforeEach((to,from,next)=>{
      if(to.meta.auth){
        const Login=useLogin()
          if(Login.username){
            next()
          }else{
            next('/login')
          }
      }else{
        next()
      }
})

export default router
