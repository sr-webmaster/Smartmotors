import makeRestStore from '@freshinup/core-ui/src/store/utils/makeRestStore'

const MODULE_URL = '/deals/v1'
export const _getItemPath = ({ id }) => `${MODULE_URL}/deals/${id}`

export default (initialState = {}, options) => {
  const { items, item } = initialState
  const store = makeRestStore('deals', { items, item }, {
    itemsPath: () => `${MODULE_URL}/deals`,
    itemPath: _getItemPath
  }, options)

  // Add Mutations
  store.mutations = {
    ...store.mutations
  }
  // Add Actions
  store.actions = {
    ...store.actions
  }

  // Add Getters
  store.getters = {
    ...store.getters
  }

  return {
    namespaced: true,
    ...store
  }
}
