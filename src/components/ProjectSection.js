import React from 'react'
import _sortBy from 'lodash/sortBy'

import ProjectCard from '../components/ProjectCard'
import './ProjectSection.css'

const ProjectSection = ({
  projects = [],
  title,
  limit = 9999,
  className = '',
  ...props
}) => (
  <div className={`section thin ProjectSection ${className}`} {...props}>
    <div className='container'>
      {title && (
        <h2 className='taCenter' data-aos='fade-down'>
          {title}
        </h2>
      )}
      {projects.length && (
        <div
          className='Flex alignCenter justifyBetween flexWrap'
          data-aos='fade-up'
        >
          {_sortBy(projects, ['order'])
            .slice(0, limit)
            .map((projectItem, index) => (
              <ProjectCard
                key={projectItem.title + index}
                projectItem={projectItem}
              />
            ))}
        </div>
      )}
    </div>
  </div>
)

export default ProjectSection
