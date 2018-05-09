import React from 'react'
import v from 'vudu'
import { styles as s, colors, copy } from 'stylesheet'

const localClasses = v({
  list: {
    '@composes': [s.flex, s.flexColumn],
    height: '100%',
    borderLeft: `1px solid ${colors.black}`,
  },
  lineItem: {
    '@composes': [s.flex, s.alignCenter],
    height: '80px',
    minHeight: '80px',
    padding: '0 15px',
    fontSize: '36px',
    borderTop: `1px solid ${colors.black}`,
    cursor: 'pointer',
    ...copy.blocus,
    ':first-child': {
      borderTop: '0',
    },
  },
})

const LineItem = ({ active, count, id, onClick, title }) => (
  <li
    className={localClasses.lineItem}
    onClick={() => onClick(id)}
    style={{ backgroundColor: active ? colors.yellow : 'transparent' }}
  >
    {`${title} (${count})`}
  </li>
)

const TagList = ({ currentTag, onClick, tags, videosByTag }) => (
  <ul className={localClasses.list}>
    {Object.keys(tags).map(key => (
      <LineItem
        key={key}
        {...tags[key]}
        id={key}
        onClick={onClick}
        active={currentTag === key}
        count={videosByTag[key].length}
      />
    ))}
  </ul>
)

export default TagList
