import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main/Main.vue'
import Classify from '../pages/Classify/Classify.vue'
import Cart from '../pages/Cart/Cart.vue'
import Second from '../pages/Second/Second.vue'
import Person from '../pages/Person/Person.vue'
import Zero from '../pages/Zero/Zreo.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path : '/zero',
      component : Zero
    },
    {
      path : '/main',
      component : Main,
      meta : {
        isShow : true
      }
    },
    {
      path : '/classify',
      component: Classify,
      meta : {
        isShow : true
      }
    },
    {
      path : '/cart',
      component : Cart,
      meta : {
        isShow : true
      }
    },
    {
      path : '/second',
      component : Second,
      meta : {
        isShow : true
      }
    },
    {
      path : '/person',
      component : Person
    },
    {
      path : '/login',
      component : Login
    },
    {
      path : '/',
      redirect : '/zero'
    }
  ]
})
