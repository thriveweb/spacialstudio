import React from 'react'

import FeaturePostCard from '../components/FeaturePostCard'
import './FeaturePostSection.css'

const FeaturePostSection = ({ featuredPost }) => (
  <div className='section thin FeaturePostSection'>
    <div className='container'>
      {featuredPost && <FeaturePostCard postItem={featuredPost} />}
    </div>
  </div>
)

export default FeaturePostSection
