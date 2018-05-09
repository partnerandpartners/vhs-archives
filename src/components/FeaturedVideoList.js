import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const LineItem = ({ id, title }) => (
  <li><NavLink to={`/videos/${id}`}>{title}</NavLink></li>
)

const FeaturedVideoList = ({ videos }) => (
  <ul>
    {videos.map(video => <LineItem key={video.id} {...video} />)}
  </ul>
)

FeaturedVideoList.propTypes = {
  videos: PropTypes.array.isRequired,
}

export default FeaturedVideoList
