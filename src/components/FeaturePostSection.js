import React from 'react'

import FeaturePostCard from '../components/FeaturePostCard'
import './FeaturePostSection.css'

const FeaturePostSection = ({ featuredPost }) => (
  <div className='section thin FeaturePostSection'>
    <div className='container'>
      {console.log(featuredPost)}
      {featuredPost && (
        <div className='Flex alignCenter justifyBetween flexWrap'>
          <FeaturePostCard postItem={featuredPost} />
        </div>
      )}
    </div>
  </div>
)

export default FeaturePostSection
