import React from 'react'
import _sortBy from 'lodash/sortBy'

import './ServicePodSection.css'

const ServicePodSection = ({ title, services, ...props }) => {
  return (
    <section className='section '>
      <div className='container'>
        <h2 className='section-title'>{title}</h2>
        <div className='servicesGrid Flex alignStart justifyCenter flexWrap'>
          {_sortBy(services, ['order']).map(servicePod => (
            <div key={servicePod.title} className='ServicePod'>
              {servicePod.icon && (
                <img
                  data-aos='fade-up'
                  className='ServicePod--Icon'
                  src={servicePod.icon}
                  alt={servicePod.title}
                />
              )}
              <div className='ServicePod--Info' data-aos='fade-left'>
                {servicePod.title && (
                  <h4 className='Service--Title Coloured'>
                    <div
                      className='Coloured--Dot--small'
                      style={{
                        background: `${servicePod.color}`
                      }}
                    />
                    {servicePod.title}
                  </h4>
                )}
                {servicePod.galleryDescription && (
                  <p>{servicePod.galleryDescription}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ServicePodSection
