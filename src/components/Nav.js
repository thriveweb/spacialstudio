import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'

export default ({ handlePopupOpen }) => (
  <nav className='Nav'>
    <div className='Container'>
      <div className='Flex alignCenter justifyBetween'>
        <Link to='/'>
          <Logo />
        </Link>
        <div className='nav Flex alignCenter justifyStart'>
          <NavLink to='/about/' exact>
            About
          </NavLink>
          <NavLink to='/services/' exact>
            Services
          </NavLink>
          <NavLink to='/style/' exact>
            Style
          </NavLink>
          <NavLink to='/blog/' exact>
            Blog
          </NavLink>
          <NavLink to='/contact/' exact>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
)
