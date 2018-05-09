import React from 'react'
import PropTypes from 'prop-types'
import Text from 'components/Text'
import v from 'vudu'
import { styles as s } from 'stylesheet'

const localClasses = v({
  title: {
    '@composes': [s.green],
    textAlign: 'center',
    marginBottom: '50px',
  },
})

const PageTitle = ({ children }) => <Text classes={localClasses.title} variant='h2'>{children}</Text>

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
}

export default PageTitle
