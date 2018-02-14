import React from 'react'
import Helmet from 'react-helmet'

import Content from '../components/Content'
import Gallery from '../components/Gallery'

import './SinglePost.css'

export default ({ singlePost }) => (
  <div className='Post'>
    <Helmet>
      <title>{singlePost.title}</title>
    </Helmet>

    <div className='section thin'>
      <div className='container Flex alignStart justifyBetween'>
        {singlePost.projectGalleryImages && (
          <div className='SinglePost--gallery'>
            <Gallery
              images={singlePost.projectGalleryImages.map(
                obj => obj.galleryimage
              )}
            />
          </div>
        )}
        <div className='SinglePost--content'>
          {singlePost.title && <h1>{singlePost.title}</h1>}
          {singlePost.content && <Content source={singlePost.content} />}
          <div className='breakout Flex alignStart justifyBetween'>
            {singlePost.year && (
              <div className='year breakout--box'>
                <h3>Year</h3>
                <p>{singlePost.year}</p>
              </div>
            )}
            {singlePost.typeofproject && (
              <div className='type breakout--box'>
                <h3>Type of project</h3>
                <p>{singlePost.typeofproject}</p>
              </div>
            )}
            {singlePost.client && (
              <div className='client breakout--box'>
                <h3>Client</h3>
                <p>{singlePost.client}</p>
              </div>
            )}
          </div>

          {singlePost.testimonial && (
            <div className='testimonials'>
              <h3>Client Testimonials</h3>
              <em>&quot;</em>
              <blockquote>{singlePost.testimonial}</blockquote>
              <div className='from Flex alignStart justifyStart'>
                {singlePost.name && <p>{singlePost.name}</p>}
                {singlePost.role && <small>{singlePost.role}</small>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)
