import React from 'react'
import { createPortal } from 'react-dom'
import LogoStacked from 'components/icons/LogoStacked'
import v from 'vudu'
import { styles as s } from 'stylesheet'

const localClasses = v({
  footer: {
    padding: '50px 40px',
    backgroundImage: 'linear-gradient(-180deg, rgba(248,231,28,0.00) 44%, rgba(248,231,28,0.54) 96%)',
  },
})

const footerRoot = document.getElementById('footer-root');

const Footer = () => createPortal(
  <footer className={localClasses.footer}>
    <LogoStacked />
  </footer>,
  footerRoot
)

export default Footer
