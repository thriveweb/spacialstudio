import React from 'react'
import { Link } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'

import LazyImage from './LazyImage'
import './FeaturePostCard.css'

export default class FeaturePostCard extends React.Component {
  render () {
    const { postItem } = this.props
    return (
      <Link
        to={`/blog/${_kebabCase(postItem.title)}/`}
        className='FeaturePostCard'
      >
        <div className='Flex'>
          {postItem.postFeaturedImage && (
            <div className='FeaturePostCard--Image'>
              <LazyImage
                src={postItem.postFeaturedImage}
                alt={postItem.title}
              />
            </div>
          )}
          <div className='info'>
            {postItem.title && (
              <h3 className='FeaturePostCard--Title'>{postItem.title}</h3>
            )}

            {postItem.date}

            {postItem.category}

            {postItem.excerpt}

            <div className='button'>See more</div>
          </div>
        </div>
      </Link>
    )
  }
}
