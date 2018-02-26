import React from 'react'
import _sortBy from 'lodash/sortBy'
import _truncate from 'lodash/truncate'

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
                  <h3 className='Service--Title Coloured'>
                    <div
                      className='Coloured--Dot--small'
                      style={{
                        background: `${servicePod.color}`
                      }}
                    />
                    {servicePod.title}
                  </h3>
                )}
                {servicePod.galleryDescription && (
                  <div className='ServicePod--Description'>
                    {_truncate(servicePod.galleryDescription, {
                      length: 111
                    })}
                  </div>
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
