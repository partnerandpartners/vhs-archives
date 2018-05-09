import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import VideoList from 'components/VideoList'
import TagList from 'components/TagList'
import v from 'vudu'
import { styles as s } from 'stylesheet'

const localClasses = v({
  view: {
    '@composes': [s.flex],
    minWidth: '100%',
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

const videoIndexRoot = document.getElementById('video-index-root')

class VideoIndexView extends Component {
  state = {
    tag: null,
  }

  componentWillMount = () => videoIndexRoot.classList.add('active-portal')
  componentWillUnmount = () => videoIndexRoot.classList.remove('active-portal')

  handleTagClick = tag => this.setState({ tag })

  render = () => {
    const { tags, videos, videosByTag } = this.props
    const { tag } = this.state

    const indexedVideos = tag ? videosByTag[tag] : Object.keys(videos).map(key => videos[key])

    return createPortal(
      <div className={localClasses.view}>
        <div className={[localClasses.videos, 'scrollable'].join(' ')}>
          <VideoList videos={indexedVideos} />
        </div>
        <div className={[localClasses.tags, 'scrollable'].join(' ')}>
          <TagList
            currentTag={tag}
            tags={tags}
            videosByTag={videosByTag}
            onClick={this.handleTagClick}
          />
        </div>
      </div>,
      videoIndexRoot
    )
  }
}

VideoIndexView.propTypes = {
  tags: PropTypes.object.isRequired,
  videos: PropTypes.object.isRequired,
  videosByTag: PropTypes.object.isRequired,
}

export default VideoIndexView
