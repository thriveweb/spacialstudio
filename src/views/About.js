import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import LazyImage from '../components/LazyImage'
import Content from '../components/Content.js'
import './About.css'

export default ({ page }) => (
  <div className='About'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} />
    <div className='Section thin'>
      <div className='Container'>
        <LazyImage src={page.featuredImage} alt='LazyImage' lazy />
        <blockquote>
          <Content source={page.welcomeQuote} />
        </blockquote>
        <Content source={page.welcomeSection} />
      </div>
    </div>
    <div className='Section thin'>
      <div className='Container'>
        <h2 className='section-title'>{page.historyTitle}</h2>
        <Content source={page.historySection} />
      </div>
    </div>
    <div className='Section thin'>
      <div className='Container'>
        <h2 className='section-title'>{page.servicesTitle}</h2>
        services go here
      </div>
    </div>
    <div className='Section thin'>
      <div className='Container'>Staff go here</div>
    </div>
  </div>
)
