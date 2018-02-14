import React from 'react'
import _sortBy from 'lodash/sortBy'

import PostCard from '../components/PostCard'
import './PostSection.css'

const PostSection = ({ projects = [], title, limit = 9999 }) => (
  <div className='section thin PostSection'>
    <div className='container'>
      {title && <h2 className='taCenter'>{title}</h2>}
      {projects.length && (
        <div className='Flex alignCenter justifyBetween flexWrap'>
          {_sortBy(projects, ['order'])
            .slice(0, limit)
            .map((projectItem, index) => (
              <PostCard
                key={projectItem.title + index}
                projectItem={projectItem}
              />
            ))}
        </div>
      )}
    </div>
  </div>
)

export default PostSection
