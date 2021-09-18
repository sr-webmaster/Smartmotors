import module, { _getItemPath } from '~/store/modules/sales'

describe('Sales Store', () => {
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

  test('item url', () => {
    expect(_getItemPath({ id: 1 })).toEqual('/sales/v1/sales/1')
    expect(_getItemPath({ id: 3 })).toEqual('/sales/v1/sales/3')
  })
})
