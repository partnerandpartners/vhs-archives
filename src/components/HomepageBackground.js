import React from 'react'
import { createPortal } from 'react-dom'
import v from 'vudu'
import { styles as s } from 'stylesheet'

const localClasses = v({
  background: {
    '@composes': [s.bgBlack, s.fixed, s.l0, s.r0, s.t0, s.b0],
    zIndex: '1',
  },
})

const homepageBackgroundRoot = document.getElementById('background-root')

const HomepageBackground = () => createPortal(
  <div className={localClasses.background}>

  </div>,
  homepageBackgroundRoot,
)

export default HomepageBackground
