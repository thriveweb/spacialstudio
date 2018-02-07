import React from 'react'
import Helmet from 'react-helmet'

import Content from '../components/Content'
import Gallery from '../components/Gallery'

import './SingleProject.css'

export default ({ singleProject }) => (
  <div className='Project'>
    <Helmet>
      <title>{singleProject.title}</title>
    </Helmet>

    <div className='section thin'>
      <div className='container Flex alignStart justifyBetween'>
        <div className='SingleProject--gallery'>
          <Gallery
            images={singleProject.projectGalleryImages.map(
              obj => obj.galleryimage
            )}
          />
        </div>
        <div className='SingleProject--content'>
          <h1>{singleProject.title}</h1>
          <Content source={singleProject.content} />
          <div className='breakout '>
            <div className='year breakout--box'>
              <h3>Year</h3>
              <p>{singleProject.year}</p>
            </div>
            <div className='type breakout--box'>
              <h3>Type of project</h3>
              <p>{singleProject.typeofproject}</p>
            </div>
            <div className='client breakout--box'>
              <h3>Client</h3>
              <p>{singleProject.client}</p>
            </div>
          </div>
          <div className='testimonials'>
            <blockquote>{singleProject.testimonial}</blockquote>
            <div className='from Flex alignStart justifyStart'>
              <p>{singleProject.name}</p>
              <p>
                <small>{singleProject.role}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
