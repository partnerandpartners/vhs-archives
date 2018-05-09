import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'components/Markdown'
import PageTitle from 'components/PageTitle'
import ResourceLinkList from 'components/ResourceLinkList'
import v from 'vudu'
import { styles as s } from 'stylesheet'

const localClasses = v({
  page: {
    '@composes': [s.pagePadding],
  },
  section: {
    '@composes': [s.flex],
  },
  body: {
    flex: '0.6',
    paddingRight: '40px',
  },
  links: {
    flex: '0.4',
  },
})

const ResourcesView = ({ body, links, title }) => (
  <div className={localClasses.page}>
    <PageTitle>{title}</PageTitle>
    <section className={localClasses.section}>
      <div className={localClasses.body}>
        <Markdown>{body}</Markdown>
      </div>
      <aside className={localClasses.links}>
        <ResourceLinkList links={links} />
      </aside>
    </section>

  </div>
)

ResourcesView.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default ResourcesView
