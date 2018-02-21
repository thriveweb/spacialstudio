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
        <div className='address pods'>
          <h4>Office Address</h4>
          {globalSettings.officeAddress}
        </div>
        <div className='email pods'>
          <h4>Email</h4>
          <a href={`mailto:${globalSettings.email}`}>{globalSettings.email}</a>
        </div>
        <div className='phone pods'>
          <h4>Phone</h4>
          <a className='tel' href={`tel:${globalSettings.phone}`}>
            {globalSettings.phone}
          </a>
        </div>
        <div className='mail pods'>
          <h4>Mail</h4>
          {globalSettings.postalAddress}
        </div>
      </div>
    </div>
    <div className='container'>
      <span>© 2017 All rights reserved.</span>
    </div>
  </footer>
)
