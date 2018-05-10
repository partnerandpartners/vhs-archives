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
  playerContainer: {
    '@composes': [s.relative],
    minHeight: '80vh',
    maxHeight: '80vh',
  },
  player: {
    '@composes': [s.absolute, s.t0, s.b0, s.r0, s.l0],
    video: {
      '@composes': [s.block, s.bgBlack],
      width: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
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
    const { playing, paused } = this.state
    const video = videos[videoId]

    if (video) {
      const renderClasses = v({
        player: {
          video: {
            backgroundImage: !playing && !paused ? `url(${video.poster})` : 'none',
          },
        },
      })

      return (
        <Fragment>
          <div className={localClasses.playerContainer}>
            <ReactPlayer
              className={[localClasses.player, renderClasses.player].join(' ')}
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
              height="100%"
              config={{ file: { attributes: { poster: '/assets/images/transparent.png' } } }}
            />
          </div>
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
