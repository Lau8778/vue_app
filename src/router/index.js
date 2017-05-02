import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home/Home'
import All from '../components/All/All'
import Stroll from '../components/Stroll/Stroll'
import CartIndex from '../components/CartIndex/CartIndex'
import UserCenter from '../components/UserCenter/UserCenter'
import newProjects from '../components/newProject/newProject'
import channel from '../components/channel/channel'
import login from '../components/login/login'
import register from '../components/register/register'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'selected',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/all',
      name: 'All',
      component: All
    },
    {
      path: '/stroll',
      name: 'Stroll',
      component: Stroll
    },
    {
      path: '/cartIndex',
      name: 'CartIndex',
      component: CartIndex
    },
    {
      path: '/userCenter',
      name: 'UserCenter',
      component: UserCenter
    },
    {
      path: '/new',
      name: 'new',
      component: newProjects
    },
    {
      path: '/channel/:channelId',
      name: 'channel',
      component: channel
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
