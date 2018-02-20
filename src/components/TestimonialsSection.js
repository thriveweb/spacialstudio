import React from 'react'
import _sortBy from 'lodash/sortBy'
import Flickity from './Flickity'

import TestimonialCard from '../components/TestimonialCard'
import './TestimonialsSection.css'

const TestimonialsSection = ({ projects = [], title, limit = 9999 }) => {
  const flickityOptions = {
    initialIndex: 1,
    autoPlay: 3500,
    wrapAround: true,
    prevNextbuttons: true,
    pageDots: false
  }

  return (
    <div className='section thin TestimonialSection'>
      <div className='container'>
        {title && <h2 className='taCenter'>{title}</h2>}
        {projects.length && (
          <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
          >
            {_sortBy(projects, ['order'])
              .slice(0, limit)
              .map((projectItem, index) => (
                <TestimonialCard
                  key={projectItem.title + index}
                  projectItem={projectItem}
                />
              ))}
          </Flickity>
        )}
      </div>
    </div>
  )
}
export default TestimonialsSection
