import React from 'react'
import Helmet from 'react-helmet'

import Content from '../components/Content.js'
import Gallery from '../components/Gallery.js'
import Accordion from '../components/Accordion.js'
import ProjectSection from '../components/ProjectSection'
import PostSection from '../components/PostSection'
import ConsultationSection from '../components/ConsultationSection'

import './SingleService.css'

const SingleService = ({ singleService, projects, posts, ...props }) => {
  const selectedProjects = singleService.featuredProjects.map(
    selected => selected.projectList
  )
  const projectsFiltered = projects.filter(
    item => selectedProjects.indexOf(item.title) >= 0
  )

  const selectedPosts = singleService.featuredPosts.map(
    selected => selected.postList
  )
  const postsFiltered = posts.filter(
    item => selectedPosts.indexOf(item.title) >= 0
  )

  return (
    <article className='SingleService' data-aos='fade-up'>
      <Helmet>
        <title>{singleService.title}</title>
      </Helmet>

      <div className='section PageHeader thick relative'>
        <div className='container relative'>
          <h1 className='PageHeader--Title Coloured'>
            <div
              className='Coloured--Dot'
              style={{
                background: `${singleService.color}`
              }}
            />
            {singleService.title}
          </h1>
        </div>
      </div>

      {singleService.galleryDescription && (
        <section className='section thin Services--gallery'>
          <div className='container larger'>
            <div className='Flex alignCenter justifyBetween'>
              <Gallery
                images={singleService.galleryImages.map(
                  obj => obj.galleryimage
                )}
              />
              <div className='Services--info'>
                <h2 className='large'>{singleService.galleryTitle}</h2>
                <div className='Services--description'>
                  {singleService.galleryDescription}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {singleService.threeColumnSectionTitle && (
        <section className='section thin'>
          <div className='container'>
            <h2 className='taCenter'>
              {singleService.threeColumnSectionTitle}
            </h2>
            <Content
              source={singleService.threeColumnSection}
              className='threeColumn'
            />
          </div>
        </section>
      )}

      {singleService.accordion && (
        <section className='section thin'>
          <div className='container'>
            <Accordion items={singleService.accordion} />
          </div>
        </section>
      )}

      {!!projects.length && (
        <ProjectSection
          projects={projectsFiltered}
          title={singleService.projectSectionTitle}
          limit='2'
        />
      )}

      {!!posts.length && (
        <section className='section thin'>
          <div className='container'>
            <PostSection
              posts={postsFiltered}
              title={singleService.newsSectionTitle}
              limit='3'
              showLoadMore={false}
            />
          </div>
        </section>
      )}

      <ConsultationSection />
    </article>
  )
}
export default SingleService
