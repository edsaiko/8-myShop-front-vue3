import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'

const routes=[
  {
    path:'/Main',
    component:()=>import('@/views/Main.vue'),
  },
  {
    path:'/home',
    component:()=>import('@/views/home/Home.vue'),
    // children:[
    //     {
    //         path:'/',
    //         name:'home',
    //         component:()=>import('@/views/home/Home.vue')
    //     }
    // ]
  },
  {
    path:'/category/:id',
    component:()=>import('@/views/category/Category.vue'),
    redirect:'/category/all',
    children:[
      {
        path:'/category/sub/:id',
        name:'sub',
        component:()=>import('@/views/category/sub/Sub.vue')
      },
      {
        path:'/category/all/:id',
        name:'all',
        component:()=>import('@/views/category/all/All.vue')
      },
    ]
  },
  {
    path:'/search',
    component:()=>import('@/views/search/Search.vue'),
  },
  {
    path:'/detail/:id',
    component:()=>import('@/views/detail/Detail.vue'),
  },
  {
    path:'/cart',
    component:()=>import('@/views/cart/Cart.vue'),
  },
  //  结算页-自写
  {
    path:'/settlement',
    component:()=>import('@/views/settlement/Settlement.vue'),
  },
  //  结算页-复制
  {
    path:'/checkout',
    component:()=>import('@/views/checkOut/CheckOut.vue'),
  },
  {
    path:'/pay',
    component:()=>import('@/views/pay/Pay.vue'),
  },
  {
    path:'/paycallback',
    component:()=>import('@/views/pay/PayBack.vue'),
  },
  {
    path:'/login',
    component:()=>import('@/views/login/Login.vue'),
  },
  {
    path:'/register',
    component:()=>import('@/views/register/Register.vue'),
  },
  {
    path:'/member',
    name:'member',
    component:()=>import('@/views/Member/member.vue'),
    // redirect:"/member/my",
    children:[
      {
        path:'',
        name:'info',
        component:()=>import('@/views/Member/component/UserInfo.vue')
      },
      {
        path:'/member/order',
        name:'order',
        component:()=>import('@/views/Member/component/UserOrder.vue')
      },
    ]
  },
  {
    path:'/user-center',
    name:'test',
    component:()=>import('@/views/userCenter/UserCenter.vue'),
    redirect:"/user-center/my",
    children:[
      {
        path:'/user-center/my',
        name:'my',
        component:()=>import('@/views/userCenter/my/My.vue')
      },
      {
        path:'/user-center/save',
        name:'save',
        component:()=>import('@/views/userCenter/save/Save.vue')
      },
    ]
  },
  //其它错误地址重定向用*在这里失效了，会报错，说*要被定义
  // {
  //     path:'*',
  //     redirect:"/"
  // }
]

const router = createRouter({
  //用哈希的不成功？哈希好像对回退有帮助
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
  scrollBehavior(){
    return{
      top:0
    }
  }
})

export default router