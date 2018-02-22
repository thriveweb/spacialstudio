import React from 'react'
import Helmet from 'react-helmet'

import Content from '../components/Content'
import Gallery from '../components/Gallery'

import './SingleProject.css'

export default ({ singleProject }) => (
  <article className='Project' data-aos='fade-up'>
    <Helmet>
      <title>{singleProject.title}</title>
    </Helmet>

    <section className='section thin'>
      <div className='container Flex alignStart justifyBetween'>
        {singleProject.projectGalleryImages && (
          <div className='SingleProject--gallery'>
            <Gallery
              images={singleProject.projectGalleryImages.map(
                obj => obj.galleryimage
              )}
            />
          </div>
        )}
        <div className='SingleProject--content'>
          {singleProject.title && <h1>{singleProject.title}</h1>}
          {singleProject.content && <Content source={singleProject.content} />}
          <div className='breakout Flex alignStart justifyBetween'>
            {singleProject.year && (
              <div className='year breakout--box'>
                <h3>Year</h3>
                <p>{singleProject.year}</p>
              </div>
            )}
            {singleProject.typeofproject && (
              <div className='type breakout--box'>
                <h3>Type of project</h3>
                <p>{singleProject.typeofproject}</p>
              </div>
            )}
            {singleProject.client && (
              <div className='client breakout--box'>
                <h3>Client</h3>
                <p>{singleProject.client}</p>
              </div>
            )}
          </div>

          {singleProject.testimonial && (
            <div className='testimonials'>
              <h3>Client Testimonials</h3>
              <em>&quot;</em>
              <blockquote>{singleProject.testimonial}</blockquote>
              <div className='from Flex alignStart justifyStart'>
                {singleProject.name && <p>{singleProject.name}</p>}
                {singleProject.role && <small>{singleProject.role}</small>}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  </article>
)
