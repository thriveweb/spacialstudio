import React from 'react'
import Helmet from 'react-helmet'
import _sortBy from 'lodash/sortBy'

import PageHeader from '../components/PageHeader'
import BackgroundImage from '../components/BackgroundImage'
import Content from '../components/Content.js'
import ServicePodSection from '../components/ServicePodSection'
import StaffMemberCard from '../components/StaffMemberCard'

import './About.css'

export default ({ page, staff, services }) => (
  <main className='About' data-aos='fade-up'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} />
    <section className='section thin welcome'>
      <div className='container Flex alignCenter justifyBettwen'>
        <div className='welcome--image'>
          <BackgroundImage src={page.featuredImage} lazy />
        </div>
        <div className='welcome--info'>
          <blockquote>
            <Content source={page.welcomeQuote} />
          </blockquote>
          <div className='welcome--content'>
            <Content source={page.welcomeSection} />
          </div>
        </div>
      </div>
    </section>
    {page.historyTitle && (
      <section className='section thin history'>
        <div className='container'>
          <h2 className='section-title'>{page.historyTitle}</h2>
          <Content source={page.historySection} className='threeColumn' />
        </div>
      </section>
    )}
    {services && (
      <ServicePodSection title={page.servicesTitle} services={services} />
    )}
    {staff && (
      <section className='section thin StaffSection' data-aos='fade-up'>
        <div className='container'>
          <div className='StaffSection--Grid Flex alignStart justifyBetween flexWrap'>
            {_sortBy(staff, ['order']).map(staffMember => (
              <StaffMemberCard
                key={staffMember.title}
                staffMember={staffMember}
              />
            ))}
          </div>
        </div>
      </section>
    )}
  </main>
)
