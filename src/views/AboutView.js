import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'components/Markdown'
import PageTitle from 'components/PageTitle'
import v from 'vudu'
import { styles as s } from 'stylesheet'

const localClasses = v({
  page: {
    '@composes': [s.pagePadding],
  },
})

const AboutView = ({ body, title }) => (
  <div className={localClasses.page}>
    <PageTitle>{title}</PageTitle>
    <Markdown>{body}</Markdown>
  </div>
)

AboutView.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default AboutView
