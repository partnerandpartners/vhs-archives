import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import v from 'vudu'
import { styles as s } from 'stylesheet'

const localClasses = v({
  body: {
    whiteSpace: 'pre-wrap',
    p: {
      '@composes': [s.pLarge],
      marginBottom: '40px',
    },
    a: {
      '@composes': [s.bgYellow, s.black, s.aLarge],
    },
  },
})

const Markdown = ({ children }) =>
  <ReactMarkdown className={localClasses.body} source={children} />

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Markdown
