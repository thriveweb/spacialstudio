import React from 'react'

import BackgroundImage from './BackgroundImage'
import './GalleryHome.css'

export default class GalleryHome extends React.Component {
  static defaultProps = {
    autoPlay: 1500,
    wrapAround: true,
    prevNextbuttons: true,
    pageDots: false
  }

  state = {
    index: 0
  }

  nextSlide = index =>
    this.setState(prevState => {
      const newIndex = index >= 0 ? index : prevState.index + 2
      return newIndex >= this.props.images.length
        ? { index: newIndex - this.props.images.length }
        : { index: newIndex }
    })

  calculatePosition = index => {
    const { images } = this.props
    let className = ''
    const diff = (index - this.state.index + images.length) % images.length
    if (diff === 0 || diff === 1) {
      className = 'active'
    }
    if (diff === 2 || diff === 3) {
      className = 'next'
    }
    if (diff === images.length - 2 || diff === images.length - 1) {
      className = 'prev'
    }
    return className
  }

  render () {
    const { images } = this.props
    return (
      <div className='GalleryHome'>
        {images.map((image, index) => {
          return (
            <div
              key={image + index}
              className={`GalleryHome--Item ${this.calculatePosition(index)}`}
            >
              <BackgroundImage lazy={'true'} src={image} alt='gallery' />
            </div>
          )
        })}

        {images.map((image, index) => {
          if (index % 2) return null
          return (
            <button
              key={index}
              className='relative'
              onClick={() => this.nextSlide(index)}
            >
              next
            </button>
          )
        })}
      </div>
    )
  }
}
