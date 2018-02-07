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
      <div className='container'>
        {singleProject.projectFeaturedImage}
        {/* {singleProject.projectGalleryImages} */}
        {console.log(singleProject.content)}goes here
        {singleProject.title}
        {singleProject.content}
        {singleProject.year}
        --
        {singleProject.testimonial}
        {singleProject.role}
      </div>
    </div>
  </div>
)
