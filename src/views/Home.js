import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import Content from '../components/Content'
import LazyImage from '../components/LazyImage'
import Gallery from '../components/Gallery'
import ProjectSection from '../components/ProjectSection'
import PostSection from '../components/PostSection'
import TestimonialsSection from '../components/TestimonialsSection'
import './Home.css'

export default ({ page, projects, posts }) => {
  return (
    <main className='Home'>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>

      {page.welcomeGalleryImages && (
        <div className='SingleProject--gallery'>
          <Gallery
            images={page.welcomeGalleryImages.map(obj => obj.galleryimage)}
          />
        </div>
      )}

      {page.title && (
        <section className='section thick HomeTitle'>
          <div className='container'>
            <h1>{page.title}</h1>
          </div>
        </section>
      )}

      {page.service && (
        <section className='section thick'>
          <div className='container'>
            <h2 className='section-title'>{page.servicesTitle}</h2>
            <div className='servicesGrid Flex alignStart justifyCenter flexWrap'>
              {page.service.map(servicePod => (
                <div key={servicePod.title} className='servicePod'>
                  {servicePod.icon && (
                    <img
                      className='servicePod--Icon'
                      src={servicePod.icon}
                      alt={servicePod.title}
                    />
                  )}
                  <div className='servicePod--Info'>
                    {servicePod.title && (
                      <h4 className='ServicePod--Title'>{servicePod.title}</h4>
                    )}
                    {servicePod.description && <p>{servicePod.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.aboutSectionTitle && (
        <section className='section thin AboutSection'>
          <div className='container Flex alignCenter justifyBettwen'>
            <LazyImage src={page.aboutImage} alt='LazyImage' lazy />
            <div className='AboutSection--Info'>
              <blockquote>
                <Content source={page.aboutSectionTitle} />
              </blockquote>
              <div className='AboutSection--Content'>
                <Content source={page.aboutContent} />
              </div>
              <Link to={`/about/`} className='button'>
                {page.aboutLinkText}
              </Link>
            </div>
          </div>
        </section>
      )}

      {!!posts.length && (
        <section className='section thin'>
          <div className='container'>
            <PostSection
              posts={posts}
              title={page.newsSectionTitle}
              limit='3'
              showLoadMore={false}
            />
          </div>
        </section>
      )}

      {!!projects.length && (
        <ProjectSection
          projects={projects}
          title={page.projectSectionTitle}
          limit='4'
        />
      )}

      {!!projects.length && (
        <TestimonialsSection
          projects={projects}
          title={page.testimonialSectionTitle}
          limit='6'
        />
      )}
    </main>
  )
}
