import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import Content from '../components/Content'
import PhotoLayout from '../components/PhotoLayout'
import BackgroundImage from '../components/BackgroundImage'
import { dateFormatted } from '../util/date'

import './SinglePost.css'

export default ({ singlePost, nextPostURL, prevPostURL }) => {
  const content = singlePost.content || ''
  let contentArray = content.split('{{gallery}}')
  contentArray[1] = contentArray.slice(1).join('')

  return (
    <article className='SinglePost' data-aos='fade-up'>
      <Helmet>
        <title>{singlePost.title}</title>
      </Helmet>
      <section className='section thin'>
        <div className='container relative'>
          {singlePost.postFeaturedImage && (
            <BackgroundImage
              className='SinglePost--BackgroundImage'
              src={singlePost.postFeaturedImage}
              alt={singlePost.title}
            />
          )}
          <div className='SinglePost--Content relative'>
            <div className='aos' data-aos='fade-up' data-aos-delay='200'>
              <div className='SinglePost--Category-Date'>
                {' '}
                {singlePost.category && (
                  <span className='cat'>{singlePost.category} | </span>
                )}
                {singlePost.date && (
                  <span className='postDate'>
                    {dateFormatted(singlePost.date)}
                  </span>
                )}
              </div>

              {singlePost.title && (
                <h1 className='SinglePost--Title'>{singlePost.title}</h1>
              )}
              <div className='SinglePost--InnerContent'>
                {contentArray[0] && <Content source={contentArray[0]} />}
                {singlePost.galleryImages && (
                  <div className='SinglePost--gallery'>
                    <PhotoLayout
                      images={singlePost.galleryImages.map(
                        obj => obj.galleryimage
                      )}
                    />
                  </div>
                )}
                {contentArray[1] && <Content source={contentArray[1]} />}
              </div>
              <div className='SinglePost--Links Flex alignStretch justifyBetween flexWrap'>
                {nextPostURL && <Link to={nextPostURL}>Next Post</Link>}
                {prevPostURL && <Link to={prevPostURL}>Previous Post</Link>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
