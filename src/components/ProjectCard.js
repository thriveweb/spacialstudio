import React from 'react'
import { Link } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'

import LazyImage from './LazyImage'
import './ProjectCard.css'

export default class ProjectCard extends React.Component {
  render () {
    const { projectItem } = this.props
    return (
      <Link
        to={`/projects/${_kebabCase(projectItem.title)}/`}
        className='ProjectCard'
      >
        {projectItem.projectFeaturedImage && (
          <div className='ProjectCard--Image'>
            <LazyImage
              src={projectItem.projectFeaturedImage}
              alt={projectItem.title}
            />
          </div>
        )}
        {projectItem.title && (
          <h3 className='ProjectCard--Title'>{projectItem.title}</h3>
        )}
        <div className='button'>See more</div>
      </Link>
    )
  }
}
