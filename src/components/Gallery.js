import React from 'react'

import LazyImage from '../components/LazyImage'
import './Gallery.css'

export default ({ images }) => (
  <div className='Gallery'>
    {images.map((image, index) => (
      <LazyImage lazy key={image + index} src={image} alt='gallery' />
    ))}
  </div>
)
