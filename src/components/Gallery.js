import React from 'react'

import LazyImage from '../components/LazyImage'
import './Gallery.css'

export default ({ images }) => (
  <div className='Gallery'>
    {images.map(image => <LazyImage lazy src={image} alt='gallery' />)}
  </div>
)
