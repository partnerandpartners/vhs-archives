import React from 'react'
import PropTypes from 'prop-types'
import VideoList from 'components/VideoList'
import TagList from 'components/TagList'
import v from 'vudu'
import { styles as s } from 'stylesheet'

const localClasses = v({
  view: {
    '@composes': [s.flex],
  },
  videos: {
    flex: '0.59',
    padding: '0 75px',
  },
  tags: {
    flex: '0.41'
  },
})

const VideoIndexView = ({ tags, videos, videosByTag }) => (
  <div className={localClasses.view}>
    <div className={localClasses.videos}>
      <VideoList videos={Object.keys(videos).map(key => videos[key])} />
    </div>
    <div className={localClasses.tags}>
      <TagList tags={tags} videosByTag={videosByTag} />
    </div>
  </div>
)

VideoIndexView.propTypes = {
  tags: PropTypes.object.isRequired,
  videos: PropTypes.object.isRequired,
  videosByTag: PropTypes.object.isRequired,
}

export default VideoIndexView
