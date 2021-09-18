import makeRestStore from '@freshinup/core-ui/src/store/utils/makeRestStore'

export default ({ items, item }, options = {}) => {
  return makeRestStore('financial-modifiers', { items, item }, null, options)
}
