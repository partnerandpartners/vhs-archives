import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import v from 'vudu'
import { styles as s, colors, copy } from 'stylesheet'
import { site } from 'config'

const localClasses = v({
  lineItem: {
    marginBottom: '40px',
    ':last-child': {
      marginBottom: '0',
    },
  },
  link: {
    textDecoration: 'none',
  },
  index: {
    '@composes': [s.block],
    fontSize: '20px',
    lineHeight: '2em',
    ...copy.karla,
  },
  title: {
    '@composes': [s.h3, s.block],
    lineHeight: '1em',
  },
})

const LineItem = ({ id, index, title }) => (
  <li className={localClasses.lineItem}>
    <NavLink
      className={localClasses.link}
      style={{ color: site.lightHomepageCopy ? colors.white : colors.black }}
      to={`/videos/${id}`}
    >
      <span className={localClasses.index}>{("0" + index).slice(-2)}</span>
      <span className={localClasses.title}>{title}</span>
    </NavLink>
  </li>
)

const FeaturedVideoList = ({ videos }) => (
  <ul>
    {videos.map((video, index) => <LineItem key={video.id} index={index+1} {...video} />)}
  </ul>
)

FeaturedVideoList.propTypes = {
  videos: PropTypes.array.isRequired,
}

export default FeaturedVideoList
