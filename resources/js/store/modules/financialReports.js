import makeRestStore from '@freshinup/core-ui/src/store/utils/makeRestStore'
import omit from 'lodash/omit'
import get from 'lodash/get'

export default (initialState = {}, options) => {
  const store = makeRestStore('financial-reports', initialState, null, options)

  // Initial State
  store.state = {
    ...store.state,
    ...initialState
  }
  const __actions = { ...store.actions }
  store.actions = {
    ...store.actions,
    createItem (context, payload = { }) {
      const filters = JSON.parse(get(payload, 'data.filters', '{}'))
      const _payload = {
        ...payload,
        data: {
          ...payload.data,
          filters: JSON.stringify(omit(filters, ['rowsPerPage', 'page', 'totalItems', 'totalPages']))
        }
      }
      return __actions.createItem.call(null, context, _payload)
    }
  }

  return {
    namespaced: true,
    ...store
  }
}
