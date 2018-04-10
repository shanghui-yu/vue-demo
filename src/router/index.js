import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../view/home.vue'
import Solt from '../view/slot.vue'
import JsEs6 from '../view/js-es6.vue'
import Bss from '@/components/bss.vue'
import tabPage from '../view/tab-page.vue'
import Resolve from '../view/resolve.vue'
import ceshiA from '@/components/ceshi-a'
import CeshiB from '@/components/ceshi-b'
import Axios from '../view/axios'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Bss/:source',
      name: 'Bss',
      component: Bss
    },
    {
      path: '/Solt',
      name: 'Solt',
      component: Solt
    },
    {
      path: '/JsEs6',
      name: 'JsEs6',
      component: JsEs6
    },
    {
      path: '/Resolve',
      name: 'Resolve',
      component: Resolve
    },
    {
      path: '/Axios',
      name: 'Axios',
      component: Axios
    },
    {
      path: '/tabPage',
      name: 'tabPage',
      component: tabPage,
      children: [
        {path: 'ceshiA', component: ceshiA},
        { path: 'CeshiB', component: CeshiB }
      ]
    }
  ]
})
