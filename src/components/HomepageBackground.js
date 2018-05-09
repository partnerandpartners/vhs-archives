import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import ReactPlayer from 'react-player'
import v from 'vudu'
import { styles as s } from 'stylesheet'
import { site } from 'config'

const localClasses = v({
  background: {
    '@composes': [s.bgBlack, s.fixed, s.l0, s.r0, s.t0, s.b0],
    zIndex: '1',
    video: {
      objectFit: 'cover',
    },
  },
})

const homepageBackgroundRoot = document.getElementById('background-root')

class HomepageBackground extends Component {
  state = {
    index: 0,
  }

  onEnded = () => {
    const { index } = this.state
    const nextIndex = index === site.homepageVideos.length - 1 ? 0 : index + 1
    this.setState({ index: nextIndex })
  }

  render = () => createPortal(
    <div className={localClasses.background}>
      <ReactPlayer
        ref={elem => {this.player = elem}}
        onEnded={this.onEnded}
        width="100%"
        height="100%"
        playing
        volume={0}
        url={site.homepageVideos[this.state.index]}
      />
    </div>,
    homepageBackgroundRoot,
  )
}

export default HomepageBackground
