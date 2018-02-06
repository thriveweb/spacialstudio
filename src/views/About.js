import React from 'react'
import Helmet from 'react-helmet'
import _sortBy from 'lodash/sortBy'

import PageHeader from '../components/PageHeader'
import LazyImage from '../components/LazyImage'
import Content from '../components/Content.js'
import StaffMemberCard from '../components/StaffMemberCard'

import './About.css'

export default ({ page, staff }) => (
  <div className='About'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} />
    <div className='section thin welcome'>
      <div className='container Flex alignCenter justifyBettwen'>
        <LazyImage src={page.featuredImage} alt='LazyImage' lazy />
        <div className='welcome--info'>
          <blockquote>
            <Content source={page.welcomeQuote} />
          </blockquote>
          <div className='welcome--content'>
            <Content source={page.welcomeSection} />
          </div>
        </div>
      </div>
    </div>
    {page.historyTitle && (
      <div className='section thin history'>
        <div className='container'>
          <h2 className='section-title'>{page.historyTitle}</h2>
          <Content source={page.historySection} className='threeColumn' />
        </div>
      </div>
    )}
    {page.service && (
      <div className='section thick'>
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
      </div>
    )}
    {staff && (
      <div className='section thin StaffSection'>
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
      </div>
    )}
  </div>
)
