import React from 'react'
import { Link } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'
import _format from 'date-fns/format'

import BackgroundImage from './BackgroundImage'
import './FeaturePostCard.css'

export default class FeaturePostCard extends React.Component {
  render () {
    const { postItem } = this.props
    const date = new Date(postItem.date)
    const dateFormatted = _format(date, 'MM.DD.YYYY')

    return (
      <Link
        to={`/blog/${_kebabCase(postItem.title)}/`}
        className='FeaturePostCard'
      >
        <div className='Flex alignCenter justifyBetween flexWrap'>
          {postItem.postFeaturedImage && (
            <div className='FeaturePostCard--Image relative'>
              <BackgroundImage
                src={postItem.postFeaturedImage}
                alt={postItem.title}
              />
            </div>
          )}
          <div className='info'>
            {postItem.category && (
              <span className='cat'>{postItem.category} | </span>
            )}
            {dateFormatted && <span className='date'>{dateFormatted}</span>}
            {postItem.title && (
              <h3 className='FeaturePostCard--Title'>{postItem.title}</h3>
            )}
            {postItem.excerpt}
            <div className='button'>See more</div>
          </div>
        </div>
      </Link>
    )
  }
}
