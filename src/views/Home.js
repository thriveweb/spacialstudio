import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import _sortBy from 'lodash/sortBy'

import { getImageSrc } from '../util/getImageUrl'
import Content from '../components/Content'
import LazyImage from '../components/LazyImage'
import WelcomeAnimation from '../components/WelcomeAnimation'
import ServicePodSection from '../components/ServicePodSection'
import GalleryHome from '../components/GalleryHome'
import ProjectSection from '../components/ProjectSection'
import PostCard from '../components/PostCard'
import TestimonialsSection from '../components/TestimonialsSection'
import ConsultationSection from '../components/ConsultationSection'
import './Home.css'

const Home = ({ page, projects, posts, services }) => {
  const visiblePosts = _sortBy(posts, ['date'])
    .reverse()
    .slice(0, 2)

  const homeGalleryImages = page.welcomeGalleryImages.map(obj =>
    getImageSrc(obj.galleryimage, window.innerWidth / 2 || 1800)
  )

  return (
    <main className='Home'>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>

      <WelcomeAnimation waitForImages={homeGalleryImages.slice(0, 2)} />

      {page.welcomeGalleryImages && (
        <GalleryHome
          images={homeGalleryImages}
          flickityOptions={{ autoPlay: 30000 }}
        />
      )}

      {page.title && (
        <section className='section HomeTitle'>
          <div className='container'>
            <h1 data-aos='fade-down'>{page.title}</h1>
          </div>
        </section>
      )}

      {services && (
        <ServicePodSection title={page.servicesTitle} services={services} />
      )}

      {page.aboutSectionTitle && (
        <section className='section thick AboutSection'>
          <div className='container hidden Flex alignCenter justifyBetween flexWrap'>
            <LazyImage
              src={page.aboutImage}
              alt='LazyImage'
              lazy
              data-aos='fade-left'
            />
            <div className='AboutSection--Info'>
              <h2>About us</h2>
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
          <div className='container hidden Flex alignStretch justifyBetween flexWrap relative'>
            <div
              className='HomeNews--Info'
              data-aos='slide-left'
              data-aos-offset='300'
            >
              <h2>{page.newsSectionTitle}</h2>
              <div className='HomeNews--Content'>
                <Content source={page.aboutContent} />
              </div>
              <Link to={`/blog/`} className='button'>
                {page.aboutLinkText}
              </Link>
            </div>
            <div
              className='HomeNews--Posts Flex alignStretch justifyBetween flexWrap'
              data-aos='slide-left'
              data-aos-offset='400'
            >
              {visiblePosts.map((postItem, index) => (
                <PostCard
                  key={postItem.title + index}
                  postItem={postItem}
                  data-aos='slide-left'
                  data-aos-offset='500'
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

      <ConsultationSection />
    </main>
  )
}

export default Home
