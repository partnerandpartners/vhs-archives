// NOTE: DO NOT REMOVE
import parameterize from 'parameterize'
const context = require.context('.', true, /\.yml$/)

const videos = {}
context.keys().forEach(key => {
  const id = parameterize(key.slice(0, -4))
  videos[id] = context(key)
  videos[id].id = id
})

export default videos
