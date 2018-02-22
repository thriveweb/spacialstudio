import React from 'react'
import Helmet from 'react-helmet'

import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import MapBanner from '../components/MapBanner'
import './Contact.css'

export default ({ page, siteTitle, globalSettings }) => (
  <main className='Contact' data-aos='fade-up'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    {globalSettings && (
      <div className='section thin'>
        <div className='container'>
          <MapBanner
            apiKey='AIzaSyCcfv8L8FmeieABBF2u1dZxeB3NlULe_Nw'
            lat={globalSettings.location.lat}
            lng={globalSettings.location.lng}
          />
        </div>
      </div>
    )}
    <section className='section thick'>
      <div className='container'>
        <div className='Flex alignStart justifyBetween'>
          <h1>{page.title}</h1>
          <div className='Flex alignStart justifyBetween flexWrap thirds'>
            <div className='address pods'>
              <h4>Office Address</h4>
              {globalSettings.officeAddress}
            </div>
            <div className='email pods'>
              <h4>Email</h4>
              <a href={`mailto:${globalSettings.email}`}>
                {globalSettings.email}
              </a>
            </div>
            <div className='phone pods'>
              <h4>Phone</h4>
              <a className='tel' href={`tel:${globalSettings.phone}`}>
                {globalSettings.phone}
              </a>
            </div>
            <EnquiryFormSimpleAjax
              className='contactForm'
              name='Simple Form Ajax'
            />
          </div>
        </div>
      </div>
    </section>
  </main>
)
