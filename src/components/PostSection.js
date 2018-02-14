import React from 'react'
import _sortBy from 'lodash/sortBy'

import PostCard from '../components/PostCard'
import './PostSection.css'

const PostSection = ({ posts = [], title, limit = 9999 }) => (
  <div className='section thin PostSection'>
    <div className='container'>
      {title && <h2 className='taCenter'>{title}</h2>}
      {posts.length && (
        <div className='Flex alignCenter justifyBetween flexWrap'>
          {_sortBy(posts, ['date'])
            .slice(0, limit)
            .map((postItem, index) => (
              <PostCard key={postItem.title + index} postItem={postItem} />
            ))}
        </div>
      )}
    </div>
  </div>
)

export default PostSection
