import React from 'react'
import { Link } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'

import './TestimonialCard.css'

export default class TestimonialCard extends React.Component {
  render () {
    const { projectItem } = this.props
    return (
      <Link
        to={`/projects/${_kebabCase(projectItem.title)}/`}
        className='TestimonialCard'
      >
        {projectItem.testimonial && (
          <div className='testimonials'>
            <h3>Client Testimonials</h3>
            <em>&quot;</em>
            <blockquote>{projectItem.testimonial}</blockquote>
            <div className='from Flex alignStart justifyStart'>
              {projectItem.name && <p>{projectItem.name}</p>}
              {projectItem.role && <small>{projectItem.role}</small>}
            </div>
          </div>
        )}
      </Link>
    )
  }
}
