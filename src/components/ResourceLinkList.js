import React from 'react'
import v from 'vudu'
import { styles as s, colors, copy } from 'stylesheet'

const localClasses = v({
  list: {
    borderTop: `4px solid ${colors.green}`,
  },
  listItem: {
    '@composes': [s.flex, s.alignTop],
    padding: '25px 0',
    borderTop: `1px solid ${colors.green}`,
    ':first-child': {
      borderTop: '0',
    },
  },
  link: {
    textDecoration: 'none',
    color: colors.green,
    span: {
      '@composes': [s.block],
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: '20px',
    textTransform: 'uppercase',
    marginBottom: '5px',
    ...copy.karla,
  },
  body: {
    fontSize: '20px',
    marginBottom: '5px',
    ...copy.karla,
  },
  url: {
    fontSize: '20px',
    fontStyle: 'italic',
    ...copy.karla,
  },
})

const ResourceLinkList = ({ links }) => {

  const resourceLinks = links.map((link, index) => (
    <li className={localClasses.listItem} key={index}>
      <a className={localClasses.link} href={link.url} rel="noopener" target="_blank">
        <span className={localClasses.title}>{link.title}</span>
        <span className={localClasses.body}>{link.body}</span>
        <span className={localClasses.url}>{link.url}</span>
      </a>
    </li>
  ))

  return (
    <ul className={localClasses.list}>
      {resourceLinks}
    </ul>
  )
}

export default ResourceLinkList
