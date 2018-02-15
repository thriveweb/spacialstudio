import React from 'react'
import { Link } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'

import BackgroundImage from './BackgroundImage'
import { dateFormatted } from '../util/date'
import './FeaturePostCard.css'

export default class FeaturePostCard extends React.Component {
  render () {
    const { postItem } = this.props

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
          <div className='FeaturePostCard--Info'>
            {postItem.category && (
              <span className='FeaturePostCard--Cat'>
                {postItem.category} |{' '}
              </span>
            )}
            {postItem.date && (
              <span className='FeaturePostCard--PostDate'>
                {dateFormatted(postItem.date)}
              </span>
            )}
            {postItem.title && (
              <h3 className='FeaturePostCard--Title'>{postItem.title}</h3>
            )}
            {postItem.excerpt && (
              <div className='FeaturePostCard--Excerpt'>{postItem.excerpt}</div>
            )}

            <div className='button'>See more</div>
          </div>
        </div>
      </Link>
    )
  }
}
