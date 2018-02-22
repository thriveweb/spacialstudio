import React from 'react'
import './Spinner.css'
export default ({ size = '6rem' }) => (
  <div className='Spinner'>
    <div className='semipolar-spinner' style={{ '--size': size }}>
      <div className='ring' />
      <div className='ring' />
      <div className='ring' />
      <div className='ring' />
      <div className='ring' />
    </div>
  </div>
)
