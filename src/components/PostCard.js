import React from 'react'
import { Link } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'

import LazyImage from './LazyImage'
import './PostCard.css'

export default class PostCard extends React.Component {
  render () {
    const { postItem } = this.props
    return (
      <Link to={`/blog/${_kebabCase(postItem.title)}/`} className='PostCard'>
        {postItem.postFeaturedImage && (
          <div className='PostCard--Image'>
            <LazyImage src={postItem.postFeaturedImage} alt={postItem.title} />
          </div>
        )}
        {postItem.title && (
          <h3 className='PostCard--Title'>{postItem.title}</h3>
        )}
        <div className='button'>See more</div>
      </Link>
    )
  }
}
