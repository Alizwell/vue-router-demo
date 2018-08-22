import  Vue  from 'vue'
import  VueRouter from 'vue-router'

Vue.use(VueRouter)

const  Foo = {
  template:'<div>foo</div>'
}

const  Bar = {
  template:'<div>bar</div>'
}

const  routes = [
  {
    path: '/',
    component: App
  },
  {
    path:'/foo',
    component:Foo
  },
  {
    path:'/bar',
    component:Bar
  }
]

const  router = new VueRouter({
  routes
})

new Vue({
  router
}).mounted('#app');