import React from 'react'
import { NavLink } from 'react-router-dom'
import v from 'vudu'
import { styles as s } from 'stylesheet'

const localClasses = v({
  nav: {

  },
  link: {
    '@composes': [s.p, s.black],
    textDecoration: 'none',
    textTransform: 'uppercase',
    marginLeft: '40px',
    ':first-child': {
      marginLeft: '0',
    },
  },
})

const Navigation = () => (
  <nav className={localClasses.nav}>
    <NavLink className={localClasses.link} to="/about">About</NavLink>
    <NavLink className={localClasses.link} to="/resources">Resources</NavLink>
    <NavLink className={localClasses.link} to="/videos">Index</NavLink>
  </nav>
)

export default Navigation
