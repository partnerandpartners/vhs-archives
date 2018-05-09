import React from 'react'
import v from 'vudu'
import { styles as s, colors, copy } from 'stylesheet'

const localClasses = v({
  list: {
    borderLeft: `1px solid ${colors.black}`,
  },
  lineItem: {
    '@composes': [s.flex, s.alignCenter],
    height: '80px',
    padding: '0 15px',
    fontSize: '36px',
    borderTop: `1px solid ${colors.black}`,
    ...copy.blocus,
    ':first-child': {
      borderTop: '0',
    },
  },
})

const LineItem = ({ count, title }) => (
  <li className={localClasses.lineItem}>{`${title} (${count})`}</li>
)

const TagList = ({ tags, videosByTag }) => (
  <ul className={localClasses.list}>
    {Object.keys(tags).map(key => <LineItem key={key} {...tags[key]} count={videosByTag[key].length} />)}
  </ul>
)

export default TagList
