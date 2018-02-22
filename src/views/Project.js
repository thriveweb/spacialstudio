import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import ProjectSection from '../components/ProjectSection'
import './Project.css'

export default ({ page, projects }) => (
  <main className='Project' data-aos='fade-up'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} />
    <ProjectSection projects={projects} />
  </main>
)
