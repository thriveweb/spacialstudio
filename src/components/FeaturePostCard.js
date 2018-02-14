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
        {postItem.postFeaturedImage && (
          <div className='FeaturePostCard--Image'>
            <LazyImage src={postItem.postFeaturedImage} alt={postItem.title} />
          </div>
        )}
        {postItem.title && (
          <h3 className='FeaturePostCard--Title'>{postItem.title}</h3>
        )}
        <div className='button'>See more</div>
      </Link>
    )
  }
}
