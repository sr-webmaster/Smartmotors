import '../fonts/css/icon.css'
import AppComponent from 'fresh-bus/App'
import App from '@freshinup/core-ui/src/App'
import theme from './theme'
import NotFoundPage from 'fresh-bus/pages/404.vue'
import axios from 'axios'
import Vue from 'vue'
import { install as installAuthRouter } from 'fresh-bus/router/auth'
// Providers
import FreshBusProvider from 'fresh-bus/Provider'
import CoreProvider from '@freshinup/core-ui/src/Provider'
import DealsProvider from '@freshinup/deals-ui/src/Provider'
import ActivityProvider from '@freshinup/activity-ui/src/Provider'
import ClientProvider from './Provider'

const initialState = {
  loginSuccessRedirectPath: '/admin',
  permissions: {},
  page: {
    loadingColor: 'accent'
  },
  navigationAdmin: {
    title: 'SmartMotors',
    logo: '/images/logo.png',
    background: '/images/toyota.jpg',
    headerImage: '/images/img-header-background.png',
    isDark: false,
    hideIcons: false,
    backgroundActiveColor: '#da0101',
    foregroundActiveColor: 'white',
    items: [
      {
        action: 'icon-dashboard',
        title: 'Dashboard',
        to: { name: 'admin-dashboard' }
      },
      {
        action: 'icon-users',
        title: 'Users',
        to: { name: 'admin-users' }
      },
      {
        action: 'icon-reports-1',
        title: 'Fin. Reporting',
        to: { path: '/admin/financials' }
      }
      /*
      {
        action: 'icon-auto',
        title: 'Sales Opp. Manager',
        to: { path: '/admin/sales-opportunities' }
      },
      {
        action: 'icon-reports-3',
        title: 'Sales Opp. Reporting',
        to: { path: '/admin/opportunity-reports' }
      },
      {
        action: 'icon-events',
        title: 'Activity Worksheet',
        to: { path: '/admin/activities' }
      },
      {
        action: 'icon-reports-2',
        title: 'Activity Reporting',
        to: { path: '/admin/activity-reports' }
      },
      {
        action: 'icon-settings',
        title: 'Settings',
        to: { path: '' },
        items: [
          {
            title: 'Base User System Settings',
            to: { path: '/admin/bus-notifications' }
          },
          {
            title: 'Sales Opp. Manager Settings(coming soon)',
            to: { path: '/admin/coming-soon' }
          },
          {
            title: 'Activity WS Settings(coming soon)',
            to: { path: '/admin/coming-soon' }
          }
        ]
      }
      */
    ]
  },
  navigation: {
    userMenuItems: [
      { title: 'My Profile', to: { path: '/users/me/edit' } }
    ],
    isConsumerViewAvailable: false
  },
  ...window.__INITIAL_STATE__
}

const appInstance = new App({
  modules: [
    CoreProvider,
    FreshBusProvider,
    DealsProvider,
    ClientProvider,
    ActivityProvider
  ],
  initialState,
  theme,
  redirectOnNotFound: false,
  NotFoundPage,
  axios,
  Vue,
  middleware: require.context('../../vendor/freshinup/fresh-bus-forms/resources/assets/js/middleware/', true, /\.js$/)
})
installAuthRouter(Vue)
appInstance.boot(AppComponent)
appInstance.addRoutes([{ path: '/', redirect: '/admin' }, { path: '', redirect: '/admin' }])

// We may consider only exposing the app when a certain key is set (true EXPOSE_APP=true)
window.__APP__ = appInstance
export default appInstance
