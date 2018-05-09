import React from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import Navigation from 'components/Navigation'
import Logo from 'components/icons/Logo'
import v from 'vudu'
import { styles as s, colors } from 'stylesheet'
import { site } from 'config'

const localClasses = v({
  header: {
    '@composes': [s.flex, s.spaceBetween, s.alignCenter],
    height: '55px',
    padding: '0 40px',
  },
  link: {
    '@composes': [s.flex],
  },
})

const headerRoot = document.getElementById('header-root');

const Header = ({ match: { isExact } }) => {

  const homepageThemeColor = site.lightHomepageCopy ? colors.white : colors.black

  return createPortal(
    <header
      className={localClasses.header}
      style={{ borderBottom: isExact ? '0' : `1px solid ${colors.black}` }}
    >
      <NavLink className={localClasses.link} to="/">
        <Logo color={isExact ? homepageThemeColor : colors.black} />
      </NavLink>
      <Navigation color={isExact ? homepageThemeColor : colors.black} />
    </header>,
    headerRoot
  )
}

export default Header
