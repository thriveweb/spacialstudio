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
      conact page goes here.
    </div>
    <div className='container taCenter'>
      <span>© 2017 All rights reserved.</span>
    </div>
  </footer>
)
