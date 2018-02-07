import React from 'react'
import Helmet from 'react-helmet'
import _sortBy from 'lodash/sortBy'

import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import './Project.css'

export default ({ page, projects }) => (
  <div className='Project'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} />
    <div className='section thin'>
      <div className='container Flex alignCenter justifyBetween flexWrap'>
        {_sortBy(projects, ['order']).map((projectItem, index) => (
          <ProjectCard
            key={projectItem.title + index}
            projectItem={projectItem}
          />
        ))}
      </div>
    </div>
  </div>
)
