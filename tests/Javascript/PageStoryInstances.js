import mockApi from 'vue-cli-plugin-freshinup-ui/utils/mockApi'
import axios from 'axios'
import Provider from '../../resources/js/Provider'
import CoreProvider from '@freshinup/core-ui/src/Provider'
import Vue from 'vue'

const apiMocked = mockApi({ axios })

const providers = [
  CoreProvider(),
  Provider()
]

export const resetRoutes = (routes) => {
  apiMocked
    .reset()
  return apiMocked.addRoutes(routes)
    .ready()
}

export { apiMocked, providers, Vue }

export default {
  axios: mockApi.axiosInstance,
  apiMocked,
  providers,
  Vue
}
