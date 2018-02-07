import React from 'react'
import { Link } from 'react-router-dom'

import LazyImage from './LazyImage'
import Content from './Content'
import './ProjectCard.css'

export default class ProjectCard extends React.Component {
  render () {
    const { projectItem } = this.props

    return (
      <div className='ProjectCard'>
        {projectItem.image && (
          <div className='Project--Image'>
            <LazyImage src={projectItem.image} alt={projectItem.title} />
          </div>
        )}
        <h3 className='Project--Title'>{projectItem.title}</h3>
      </div>
    )
  }
}
