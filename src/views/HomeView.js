import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import HomepageBackground from 'components/HomepageBackground'
import FeaturedVideoList from 'components/FeaturedVideoList'
import v from 'vudu'
import { styles as s } from 'stylesheet'

const localClasses = v({
  view: {
    '@composes': [s.pagePadding, s.flex, s.flexColumn, s.justifyCenter, s.grow1],
    width: '100%',
  },
})

const homeRoot = document.getElementById('home-root')

class HomeView extends Component {
  componentWillMount = () => homeRoot.classList.add('active-portal')
  componentWillUnmount = () => homeRoot.classList.remove('active-portal')

  render = () => createPortal(
    <div className={[localClasses.view, 'scrollable'].join(' ')}>
      <HomepageBackground />
      <FeaturedVideoList {...this.props} />
    </div>,
    homeRoot
  )
}

export default HomeView
