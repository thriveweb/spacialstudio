import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import './Footer.css'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <footer className='Footer'>
    <div className='container Flex justifyBetween alignEnd'>
      <Link to='/'>
        <Logo />
      </Link>
      <div className='Flex alignStart justifyBetween halfs'>
        <div className='address pods'>
          <h4>Office Address</h4>
          {globalSettings.officeAddress}
        </div>
        <div className='email pods'>
          <h4>Email</h4>
          <a href='mailto:'>{globalSettings.email}</a>
        </div>
        <div className='phone pods'>
          <h4>Phone</h4>
          {globalSettings.phone}
        </div>
        <div className='mail pods'>
          <h4>Mail</h4>
          {globalSettings.postalAddress}
        </div>
      </div>
    </div>
    <div className='container taCenter'>
      <span>© 2017 All rights reserved.</span>
    </div>
  </footer>
)
