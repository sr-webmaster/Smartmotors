import module from '~/store/modules/financialReports'

describe('FinancialReports Store', () => {
  test('the state has items', () => {
    const item = {}
    const items = []
    const result = module({ items, item })
    expect(result).toHaveProperty('state')
    expect(result.state).toHaveProperty('items', items)
  })

  test('the state has item', () => {
    const item = {}
    const items = []
    const result = module({ items, item })
    expect(result).toHaveProperty('state')
    expect(result.state).toHaveProperty('item', item)
  })

  test('is a namespaced module', () => {
    let item = {}
    let items = []
    const result = module({ items, item })
    expect(result).toHaveProperty('namespaced', true)
  })

  describe('Actions', () => {
    test('createItem() omits pagination from filters JSON as string', () => {
      let item = {}
      let items = []
      const store = module({ items, item })
      const commit = jest.fn()
      store.actions.createItem({ commit }, {
        data: {
          filters: '{"descending":false,"rowsPerPage":30,"page":1,"totalItems":0,"totalPages":0,"status":null}'
        }
      })
      expect(commit).toHaveBeenCalledWith('CREATE_ITEM', {
        data: { filters: '{"descending":false,"status":null}' },
        params: {}
      })
    })
  })
})
