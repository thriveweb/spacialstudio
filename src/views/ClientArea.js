import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Accordion from '../components/Accordion.js'
import './ClientArea.css'

export default ({ page }) => (
  <main className='ClientArea'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>

    <PageHeader title={page.title} />

    {page.contentSection && (
      <section className='section thin'>
        <div className='container'>
          <h1 className='taCenter'>{page.title}</h1>
          <Content source={page.contentSection} className='threeColumn' />
        </div>
      </section>
    )}

    {page.accordion && (
      <section className='section thin'>
        <div className='container'>
          <Accordion items={page.accordion} />
        </div>
      </section>
    )}
  </main>
)
