import React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import VideoList from 'components/VideoList'
import TagList from 'components/TagList'
import v from 'vudu'
import { styles as s } from 'stylesheet'

const localClasses = v({
  view: {
    '@composes': [s.flex],
    overflow: 'hidden',
  },
  videos: {
    flex: '0.59',
    padding: '0 75px',
  },
  tags: {
    flex: '0.41',
  },
})

const videoIndexRoot = document.getElementById('video-index-root');

const VideoIndexView = ({ tags, videos, videosByTag }) => createPortal(
  <div className={localClasses.view}>
    <div className={[localClasses.videos, 'scrollable'].join(' ')}>
      <VideoList videos={Object.keys(videos).map(key => videos[key])} />
    </div>
    <div className={[localClasses.tags, 'scrollable'].join(' ')}>
      <TagList tags={tags} videosByTag={videosByTag} />
    </div>
  </div>,
  videoIndexRoot
)

VideoIndexView.propTypes = {
  tags: PropTypes.object.isRequired,
  videos: PropTypes.object.isRequired,
  videosByTag: PropTypes.object.isRequired,
}

export default VideoIndexView
