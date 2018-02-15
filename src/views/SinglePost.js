import React from 'react'
import Helmet from 'react-helmet'

import Content from '../components/Content'
import Gallery from '../components/Gallery'
import BackgroundImage from '../components/BackgroundImage'
import { dateFormatted } from '../util/date'

import './SinglePost.css'

export default ({ singlePost }) => (
  <div className='SinglePost'>
    <Helmet>
      <title>{singlePost.title}</title>
    </Helmet>
    <div className='section thin'>
      <div className='container relative'>
        {singlePost.postFeaturedImage && (
          <BackgroundImage
            className='SinglePost--BackgroundImage'
            src={singlePost.postFeaturedImage}
            alt={singlePost.title}
          />
        )}
        <div className='SinglePost--Content relative'>
          <div className='SinglePost--Category-Date'>
            {' '}
            {singlePost.category && (
              <span className='cat'>{singlePost.category} | </span>
            )}
            {singlePost.date && (
              <span className='postDate'>{dateFormatted(singlePost.date)}</span>
            )}
          </div>

          {singlePost.title && (
            <h1 className='SinglePost--Title'>{singlePost.title}</h1>
          )}
          <div className='SinglePost--InnerContent'>
            {singlePost.content && <Content source={singlePost.content} />}
            {singlePost.galleryImages && (
              <div className='SinglePost--gallery'>
                <Gallery
                  images={singlePost.galleryImages.map(obj => obj.galleryimage)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
)
