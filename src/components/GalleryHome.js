import React from 'react'

import './GalleryHome.css'

export default class GalleryHome extends React.Component {
  static defaultProps = {
    autoPlay: 3000,
    wrapAround: true,
    prevNextbuttons: true,
    pageDots: false
  }

  state = {
    index: 0
  }

  autoPlay = null

  componentDidMount () {
    this.autoPlay = setInterval(this.nextSlide, this.props.autoPlay)
  }
  componentWillUnmount () {
    clearInterval(this.autoPlay)
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
        <div className='overlay' />
        {images.map((image, index) => {
          return (
            <div
              key={image + index}
              className={`GalleryHome--Item ${this.calculatePosition(index)}`}>
              <div
                className='BackgroundImage absolute'
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover'
                }}
              />
            </div>
          )
        })}
        <div className='GalleryHome--Indicators'>
          {images.map((image, index) => {
            if (index % 2) return null
            return (
              <div
                key={index}
                className={`GalleryHome--Indicator relative ${this.calculatePosition(
                  index
                )}`}
                onClick={() => {
                  this.nextSlide(index)
                  clearInterval(this.autoPlay)
                  this.autoPlay = setInterval(
                    this.nextSlide,
                    this.props.autoPlay
                  )
                }}>
                <img
                  src={`/images/dot-${
                    this.calculatePosition(index) === 'active'
                      ? 'active'
                      : 'inActive'
                  }.svg`}
                  alt='Indicator'
                  className='GalleryHome--IndicatorDot'
                />
              </div>
            )
          })}
        </div>
        <img
          src='/images/see-more.svg'
          alt='Scroll down to see more'
          className='GalleryHome--Arrow'
        />
      </div>
    )
  }
}
