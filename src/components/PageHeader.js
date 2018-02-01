import React from 'react'
import PropTypes from 'prop-types'

import BackgroundImage from './BackgroundImage'
import './PageHeader.css'

const PageHeader = ({ title }) => (
  <div className='Section PageHeader relative'>
    <div className='Container relative'>
      <h1 className='PageHeader--Title'>{title}</h1>
    </div>
  </div>
)

PageHeader.propTypes = {
  title: PropTypes.string
}

export default PageHeader
