import React from 'react'

import BackgroundImage from './BackgroundImage'
import './PhotoLayout.css'

export default ({ images }) => (
  <div className='PhotoLayout relative'>
    {images.map((image, index) => (
      <BackgroundImage lazy key={image + index} src={image} alt='PhotoLayout' />
    ))}
  </div>
)
