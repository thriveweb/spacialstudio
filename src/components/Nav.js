import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'

class Nav extends React.Component {
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    if (window.scrollY < 200) {
      document.body.classList.remove('scrolled')
    } else {
      document.body.classList.add('scrolled')
    }
  }

  addBodyClass = () => {
    document.body.classList.add('isHome')
  }

  render () {
    const isHome = this.props.location.pathname === '/'
    if (isHome) {
      // addBodyClass()
    }
    return (
      <nav
        className={`Nav ${isHome ? 'isHome' : ''}`}
        ref={element => {
          this.element = element
        }}
      >
        <div className='container'>
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
              <NavLink to='/project/' exact>
                Projects
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
  }
}

export default withRouter(Nav)
