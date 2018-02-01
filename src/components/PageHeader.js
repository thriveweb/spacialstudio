import React from 'react'
import PropTypes from 'prop-types'
import './PageHeader.css'

const PageHeader = ({ title }) => (
  <div className='section PageHeader thick relative'>
    <div className='container relative'>
      <h1 className='PageHeader--Title'>{title}</h1>
    </div>
  </div>
)

PageHeader.propTypes = {
  title: PropTypes.string
}

export default PageHeader
