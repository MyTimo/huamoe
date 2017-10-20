import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Huashi from '@/components/Huashi'
import Fabu from '@/components/Fabu'
import Yuegao from '@/components/Yuegao'
import Wode from '@/components/Wode'
import Tuijian from '@/components/tuijian'
import Chushou from '@/components/chushou'
import Thuazuo from '@/components/Thuazuo'
import Tyonghu from '@/components/Tyonghu'
import Thuodong from '@/components/Thuodong'
import Tzhenggao from '@/components/Tzhenggao'
import Tsheji from '@/components/Tsheji'
import Tpaihang from '@/components/Tpaihang'
import Tqitian from '@/components/Tqitian'
import gaojian from '@/components/gaojian'
import tupian from '@/components/tupian'
import login from '@/components/login'
import register from '@/components/register'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/Huashi',
      name: 'Huashi',
      component: Huashi,
	    
    },
    {
      path: '/fabu',
      name: 'Fabu',
      component: Fabu
    },
    {
      path: '/yuegao',
      name: 'Yuegao',
      component: Yuegao
    },
    {
      path: '/wode',
      name: 'Wode',
      component: Wode
    }, 
    {
      path:'/tuijian',
      name:'Tuijian',
      component:Tuijian
    },
    {
      path:'/chushou',
      name:'Chushou',
      component:Chushou
    },
    {
      path:'/Thuazuo',
      name:'Thuazuo',
      component:Thuazuo
    },
    {
      path:'/Tyonghu',
      name:'Tyonghu',
      component:Tyonghu
    },
    {
      path:'/Thuodong',
      name:'Thuodong',
      component:Thuodong
    },
    {
      path:'/Tzhenggao',
      name:'Tzhenggao',
      component:Tzhenggao
    },
    {
      path:'/Tsheji',
      name:'Tsheji',
      component:Tsheji
    },
    {
      path:'/Tpaihang',
      name:'Tpaihang',
      component:Tpaihang
    },
    {
      path:'/Tqitian',
      name:'Tqitian',
      component:Tqitian
    },
    {
      path:'/gaojian/:t_id?',
      name:'gaojian',
      component:gaojian
    },
    {
      path:'/tupian/:p_id?',
      name:'tupian',
      component:tupian
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
       
      
    
  ]
})
