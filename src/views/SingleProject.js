import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'

import './SingleProject.css'

export default ({ singleProject }) => (
  <div className='Project'>
    <Helmet>
      <title>{singleProject.title}</title>
    </Helmet>
    <PageHeader title={singleProject.title} />
    <div className='section thin'>
      <div className='container'>{console.log(singleProject)}goes here</div>
    </div>
  </div>
)
