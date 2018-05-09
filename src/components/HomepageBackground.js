import React from 'react'
import { createPortal } from 'react-dom'
import ReactPlayer from 'react-player'
import v from 'vudu'
import { styles as s } from 'stylesheet'

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

const HomepageBackground = () => createPortal(
  <div className={localClasses.background}>
    <ReactPlayer
      width="100%"
      height="100%"
      playing
      loop
      volume={0}
      url='https://ia801506.us.archive.org/33/items/loops_201805/safe_sex_slut-loop.mp4'
    />
  </div>,
  homepageBackgroundRoot,
)

export default HomepageBackground
