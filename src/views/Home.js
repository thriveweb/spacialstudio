import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import _sortBy from 'lodash/sortBy'

import Content from '../components/Content'
import LazyImage from '../components/LazyImage'
import GalleryHome from '../components/GalleryHome'
import ProjectSection from '../components/ProjectSection'
import PostCard from '../components/PostCard'
import TestimonialsSection from '../components/TestimonialsSection'
import './Home.css'

export default ({ page, projects, posts }) => {
  const visiblePosts = _sortBy(posts, ['date'])
    .reverse()
    .slice(0, 2)
  return (
    <main className='Home'>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>

      {page.welcomeGalleryImages && (
        <GalleryHome
          images={page.welcomeGalleryImages.map(obj => obj.galleryimage)}
          flickityOptions={{ autoPlay: 30000 }}
        />
      )}

      {page.title && (
        <section className='section HomeTitle'>
          <div className='container'>
            <h1>{page.title}</h1>
          </div>
        </section>
      )}

      {page.service && (
        <section className='section'>
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
          <div className='container Flex alignCenter justifyBetween flexWrap'>
            <LazyImage src={page.aboutImage} alt='LazyImage' lazy />
            <div className='AboutSection--Info'>
              <small>About us</small>
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

      {!!visiblePosts.length && (
        <section className='section thin HomeNews'>
          <div className='container Flex alignStretch justifyBetween flexWrap'>
            <div className='HomeNews--Info'>
              <h2>{page.newsSectionTitle}</h2>
              <div className='HomeNews--Content'>
                <Content source={page.aboutContent} />
              </div>
              <Link to={`/about/`} className='button'>
                {page.aboutLinkText}
              </Link>
            </div>
            <div className='HomeNews--Posts Flex alignStretch justifyBetween flexWrap'>
              {visiblePosts.map((postItem, index) => (
                <PostCard
                  key={postItem.title + index}
                  postItem={postItem}
                  data-aos='fade-in'
                  className='HomeNews--Post'
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {!!projects.length && (
        <ProjectSection
          className='HomeProjectSection'
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
