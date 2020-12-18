import {createRouter, createWebHashHistory} from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
      {
          path:"/main",
          component:()=>import('../views/layout.vue')
      }
  ]
})