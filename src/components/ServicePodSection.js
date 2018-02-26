import React from 'react'

import './ServicePodSection.css'

const ServicePodSection = ({ title, services, ...props }) => {
  return (
    <section className='section '>
      <div className='container'>
        <h2 className='section-title'>{title}</h2>
        <div className='servicesGrid Flex alignStart justifyCenter flexWrap'>
          {services.map(servicePod => (
            <div key={servicePod.title} className='servicePod'>
              {servicePod.icon && (
                <img
                  data-aos='fade-up'
                  className='servicePod--Icon'
                  src={servicePod.icon}
                  alt={servicePod.title}
                />
              )}
              <div className='servicePod--Info' data-aos='fade-left'>
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
                {servicePod.description && <p>{servicePod.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ServicePodSection
