// NOTE: DO NOT REMOVE
import parameterize from 'parameterize'
const context = require.context('.', true, /\.yml$/)

const tags = {}
context.keys().forEach(key => {
  tags[parameterize(key.slice(0, -4))] = context(key)
})

export default tags
