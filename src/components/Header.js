import React from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import Navigation from 'components/Navigation'
import Logo from 'components/icons/Logo'
import v from 'vudu'
import { styles as s, colors } from 'stylesheet'

const localClasses = v({
  header: {
    '@composes': [s.flex, s.spaceBetween, s.alignCenter],
    height: '55px',
    padding: '0 40px',
    borderBottom: `1px solid ${colors.black}`,
  },
  link: {
    '@composes': [s.flex],
  },
})

const headerRoot = document.getElementById('header-root');

const Header = () => createPortal(
  <header className={localClasses.header}>
    <NavLink className={localClasses.link} to="/"><Logo /></NavLink>
    <Navigation />
  </header>,
  headerRoot
)

export default Header
