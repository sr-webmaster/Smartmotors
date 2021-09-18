import makeRestStore from '@freshinup/core-ui/src/store/utils/makeRestStore'

const MODULE_URL = '/sales/v1'
export const _getItemPath = ({ id }) => `${MODULE_URL}/sales/${id}`

export default ({ items, item }, options) => {
  const store = makeRestStore('sales', { items, item }, {
    itemsPath: () => `${MODULE_URL}/sales`,
    itemPath: _getItemPath
  }, options)

  return {
    namespaced: true,
    modules: {
      export: makeRestStore(
        'export',
        { items, item },
        {
          itemsPath: () => `${MODULE_URL}/export`,
          itemPath: () => `${MODULE_URL}/export`
        }
      )
    },
    ...store
  }
}
