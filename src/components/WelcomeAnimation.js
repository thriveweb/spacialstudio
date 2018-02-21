import React from 'react'

import './WelcomeAnimation.css'

export default class WelcomeAnimation extends React.Component {
  element = null

  componentWillMount () {
    document.body.classList.add('fixed')
  }

  componentDidMount () {
    this.element.addEventListener('animationend', this.handleAnimationFinish)
  }

  componentWillUnmount () {
    this.element.removeEventListener('animationend', this.handleAnimationFinish)
  }

  handleAnimationFinish = e => {
    if (e.animationName === 'pulse') {
      document.body.classList.remove('fixed')
    }
  }

  render () {
    return (
      <main
        className='WelcomeAnimation'
        ref={element => {
          this.element = element
        }}
      >
        <img
          className='WelcomeAnimation--Spacial'
          src='images/spacial.svg'
          alt='Spacial'
        />
        <img
          className='WelcomeAnimation--Studio'
          src='images/studio.svg'
          alt='Studio'
        />
      </main>
    )
  }
}
