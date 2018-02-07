import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
// import LazyImage from '../components/LazyImage'
import Content from '../components/Content.js'
import Gallery from '../components/Gallery.js'
import Accordion from '../components/Accordion.js'
import './Services.css'

export default ({ page }) => (
  <div className='Services'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} />
    <div className='section thin gallery'>
      <div className='container'>
        <div className='Flex alignCenter'>
          <Gallery images={page.galleryImages.map(obj => obj.galleryimage)} />
          <div className='info'>
            <h2>{page.galleryTitle}</h2>
            {page.galleryDescription}
          </div>
        </div>
      </div>
    </div>
    <div className='section thin'>
      <div className='container'>
        <h2 className='taCenter'>{page.threeColumnSectionTitle}</h2>
        <Content source={page.threeColumnSection} className='threeColumn' />
        <Accordion items={page.accordion} />
        <h2>{page.projectSectionTitle}</h2>
        projects here.
        <h2>{page.newsSectionTitle}</h2>
        news here.
        <h2>{page.bookingTitle}</h2>
        <a className='Button' href=''>
          link to contact page
        </a>
      </div>
    </div>
  </div>
)
