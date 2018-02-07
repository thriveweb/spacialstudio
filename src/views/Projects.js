import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
// import LazyImage from '../components/LazyImage'
import Content from '../components/Content.js'
// import Gallery from '../components/Gallery.js'
import './Projects.css'

export default ({ page, projects }) => (
  <div className='Style'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} />
    <div className='section thin'>
      <div className='container'>
        <Content source={page.body} />
      </div>
    </div>
    <div className='section thin'>
      <div className='container'>project card here</div>
    </div>
  </div>
)
