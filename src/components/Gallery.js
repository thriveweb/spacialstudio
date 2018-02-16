import React from 'react'

import Flickity from './Flickity'
import BackgroundImage from './BackgroundImage'
import './Gallery.css'

const Gallery = ({ images, flickityOptions }) => {
  const options = {
    initialIndex: 0,
    autoPlay: 1500,
    wrapAround: true,
    prevNextbuttons: true,
    pageDots: false,
    ...flickityOptions
  }
  return (
    <div className='Gallery'>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={options} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
      >
        {images.map((image, index) => (
          <BackgroundImage lazy key={image + index} src={image} alt='gallery' />
        ))}
      </Flickity>
    </div>
  )
}

export default Gallery
