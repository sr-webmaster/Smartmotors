import { axios } from './PageStoryInstances'
import { createStoreFromProviders } from '@freshinup/core-ui/src/App'
import FreshBusProvider from 'fresh-bus/Provider'
import CoreProvider from '@freshinup/core-ui/src/Provider'
import DealsProvider from '@freshinup/deals-ui/src/Provider'
import Provider from '../../resources/js/Provider'

export default (initialState = {}, options = {}) => {
  return createStoreFromProviders(
    [
      FreshBusProvider(),
      CoreProvider(),
      DealsProvider(),
      Provider()
    ],
    {
      navigationAdmin: {
        headerImage: '/images/img-header-background.png',
        ...initialState.navigationAdmin
      },
      page: {
        loadingColor: 'accent',
        ...initialState.page
      },
      userNotifications: {
        fetchInterval: 0,
        ...initialState.userNotifications
      },
      ...initialState
    },
    {
      axios,
      ...options
    }
  )
}
