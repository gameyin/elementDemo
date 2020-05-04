import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '../components/User'
import EditUser from '../components/EditUser'
import AddUser from '../components/AddUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: 'add',
          name: 'useradd',
          component: AddUser
        },
        {
          path: 'edit',
          name: 'useredit',
          component: EditUser
        }
      ]
    }
  ]
})
