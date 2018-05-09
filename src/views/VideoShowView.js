import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import ReactPlayer from 'react-player'
import Markdown from 'components/Markdown'
import VideoPlayerControls from 'components/VideoPlayerControls'
import VideoCaptions from 'components/VideoCaptions'
import PageTitle from 'components/PageTitle'
import v from 'vudu'
import { styles as s } from 'stylesheet'

const localClasses = v({
  player: {
    video: {
      '@composes': [s.bgBlack],
      objectFit: 'cover',
    }
  },
  section: {
    '@composes': [s.pagePadding],
  },
})

class VideoShowView extends Component {

  state = {
    duration: null,
    paused: false,
    playing: false,
    progress: {},
    userPlaying: false,
  }

  handleDuration = duration => this.setState({ duration })
  handleProgess = progress => this.setState({ progress })
  handleCaptionClick = seconds => {
    this.player.seekTo(seconds)
    this.setState({ userPlaying: true })
  }
  handlePlaying = () => this.setState({ playing: true, paused: false })
  handlePause = () => this.setState({ playing: false, paused: true })
  handleEnded = () => this.setState({ playing: false, paused: false })
  togglePlayer = () => this.setState({ userPlaying: !this.state.userPlaying })

  render = () => {
    const { match: { params: { videoId } }, videos } = this.props
    const video = videos[videoId]

    if (video) {
      return (
        <Fragment>
          <ReactPlayer
            className={localClasses.player}
            ref={elem => this.player = elem}
            onDuration={this.handleDuration}
            onEnded={this.handleEnded}
            onProgress={this.handleProgess}
            onStart={this.handlePlaying}
            onPlay={this.handlePlaying}
            onPause={this.handlePause}
            url={video.source}
            playing={this.state.userPlaying}
            width="100%"
            height="auto"
            config={{ file: { attributes: { poster: video.poster } } }}
          />
          <VideoPlayerControls {...this.state} onClick={this.togglePlayer} />
          <section className={localClasses.section}>
            <PageTitle>{video.title}</PageTitle>
            <Markdown>{video.body}</Markdown>
            {video.captions && (
              <VideoCaptions
                onClick={this.handleCaptionClick}
                playedSeconds={this.state.progress.playedSeconds}
                captions={video.captions}
              />
            )}
          </section>
        </Fragment>
      )
    }
    // if no video found, redirect to index
    return <Redirect to="/videos" />
  }
}

VideoShowView.propTypes = {
  match: PropTypes.object.isRequired,
  videos: PropTypes.object.isRequired,
}

export default VideoShowView
