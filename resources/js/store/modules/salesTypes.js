import makeRestStore from '@freshinup/core-ui/src/store/utils/makeRestStore'

const RESOURCE_NAME = 'types'
export const _getItemPath = ({ id }) => `/sales/v1/${RESOURCE_NAME}/${id}`

export default ({ items, item }, options = {}) => {
  let store = makeRestStore('sales', { items, item }, {
    itemsPath: () => `/sales/v1/${RESOURCE_NAME}`,
    itemPath: _getItemPath
  }, options)

  return {
    namespaced: true,
    ...store
  }
}
