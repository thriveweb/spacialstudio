import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Gallery from '../components/Gallery.js'
import Accordion from '../components/Accordion.js'
import ProjectSection from '../components/ProjectSection'
import PostSection from '../components/PostSection'
import ConsultationSection from '../components/ConsultationSection'

import './SingleService.css'

const SingleService = ({ singleService, projects, posts, ...props }) => {
  const projectsFiltered = projects.filter(
    project => project.title === selectedProjects
  )

  const selectedProjects = singleService.featuredProjects.map(selected => {
    return selected.projectList
  })

  return (
    <article className='SingleService' data-aos='fade-up'>
      <Helmet>
        <title>{singleService.title}</title>
      </Helmet>

      {console.log(singleService.featuredProjects)}
      {console.log(projectsFiltered)}
      {console.log(selectedProjects)}

      <PageHeader title={singleService.title} />
      {singleService.galleryDescription && (
        <section className='section thin Services--gallery'>
          <div className='container larger'>
            <div className='Flex alignCenter'>
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
          projects={projects}
          title={singleService.projectSectionTitle}
          limit='2'
        />
      )}

      {!!posts.length && (
        <section className='section thin'>
          <div className='container'>
            <PostSection
              posts={posts}
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
