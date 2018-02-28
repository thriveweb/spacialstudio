import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <footer className='Footer'>
    <div className='container mainFooter Flex justifyBetween center'>
      <Link to='/'>
        <img src='/images/logo.svg' alt='Spacial Studio' />
      </Link>
      <div className='Flex alignStart justifyBetween flexWrap halfs'>
        {globalSettings.officeAddress && (
          <div className='address pods'>
            <h4>Office Address</h4>
            {globalSettings.officeAddress}
          </div>
        )}
        {globalSettings.email && (
          <div className='email pods'>
            <h4>Email</h4>
            <a href={`mailto:${globalSettings.email}`}>
              {globalSettings.email}
            </a>
          </div>
        )}
        {globalSettings.phone && (
          <div className='phone pods'>
            <h4>Phone</h4>
            <a className='tel' href={`tel:${globalSettings.phone}`}>
              {globalSettings.phone}
            </a>
          </div>
        )}
        {globalSettings.postalAddress && (
          <div className='mail pods'>
            <h4>Mail</h4>
            {globalSettings.postalAddress}
          </div>
        )}
      </div>
    </div>
    <div className='container Flex alignCenter justifyBetween flexWrap Footer--Copyright'>
      <small>© 2017 All rights reserved.</small>
      <small>
        <a href='https://thriveweb.com.au/'>Build on the Gold Coast</a>
      </small>
    </div>
  </footer>
)
