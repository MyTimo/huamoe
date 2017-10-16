import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Huashi from '@/components/Huashi'
import Fabu from '@/components/Fabu'
import Yuegao from '@/components/Yuegao'
import Wode from '@/components/Wode'

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
      component: Huashi
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
    }
    
  ]
})
