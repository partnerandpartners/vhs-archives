import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import v from 'vudu'
import { styles as s } from 'stylesheet'

const localClasses = v({
  lineItem: {
    marginBottom: '50px',
  },
})

const LineItem = ({ id, poster, title }) => (
  <li className={localClasses.lineItem}>
    <NavLink to={`/videos/${id}`}>
      {poster ? (
        <img src={poster} />
      ) : title}
    </NavLink>
  </li>
)

const VideoList = ({ videos }) => (
  <ul>
    {videos.map(video => <LineItem key={video.id} {...video} />)}
  </ul>
)

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
}

export default VideoList
