import React from 'react'
import Helmet from 'react-helmet'
import _sortBy from 'lodash/sortBy'

import PageHeader from '../components/PageHeader'
// import LazyImage from '../components/LazyImage'
import Content from '../components/Content.js'
import Gallery from '../components/Gallery.js'
import Accordion from '../components/Accordion.js'
import ProjectCard from '../components/ProjectCard'
import './Services.css'

export default ({ page, projects }) => (
  <div className='Services'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} />
    <div className='section thin Services--gallery'>
      <div className='container larger'>
        <div className='Flex alignCenter'>
          <Gallery images={page.galleryImages.map(obj => obj.galleryimage)} />
          <div className='Services--info'>
            <h2 className='large'>{page.galleryTitle}</h2>
            <div className='Services--description'>
              {page.galleryDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='section thin'>
      <div className='container'>
        <h2 className='taCenter'>{page.threeColumnSectionTitle}</h2>
        <Content source={page.threeColumnSection} className='threeColumn' />
      </div>
    </div>
    <div className='section thin'>
      <div className='container'>
        <Accordion items={page.accordion} />
      </div>
    </div>
    <div className='section thin Projects--section'>
      <div className='container'>
        <h2 className='taCenter'>{page.projectSectionTitle}</h2>
        <div className='Flex alignCenter justifyBetween'>
          {_sortBy(projects, ['order'])
            .slice(projects, 2)
            .map((projectItem, index) => (
              <ProjectCard
                key={projectItem.title + index}
                projectItem={projectItem}
              />
            ))}
        </div>
      </div>
    </div>
    <div className='section thin'>
      <div className='container'>
        <h2>{page.newsSectionTitle}</h2>
        news here.
      </div>
    </div>
    <div className='section thin'>
      <div className='container'>
        <h2>{page.bookingTitle}</h2>
        <a className='button' href=''>
          link to contact page
        </a>
      </div>
    </div>
  </div>
)
