import React from 'react'
import Helmet from 'react-helmet'
import _sortBy from 'lodash/sortBy'

import PageHeader from '../components/PageHeader'
import ProjectSection from '../components/ProjectSection'
import './Project.css'

export default ({ page, projects }) => (
  <div className='Project'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} />
    <ProjectSection projects={projects} />
  </div>
)
