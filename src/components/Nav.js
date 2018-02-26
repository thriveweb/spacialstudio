import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import _sortBy from 'lodash/sortBy'
import _kebabCase from 'lodash/kebabCase'

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
    const services = this.props.services
    return (
      <nav
        className={`Nav ${isHome ? 'isHome' : ''}`}
        ref={element => {
          this.element = element
        }}
      >
        <div className='container'>
          <div className='Flex alignCenter justifyBetween relative'>
            <Link style={{ color: 'currentColor' }} to='/'>
              <Logo />
            </Link>
            <div className='nav Flex alignCenter justifyStart'>
              <NavLink to='/about/' exact>
                About
              </NavLink>
              <div className='NavLink--DropDown'>
                <div className='NavLink NavLink--Parent'>
                  Services <div className='hover'>•</div>
                  <div className='NavLink--Children'>
                    {_sortBy(services, ['order']).map(servicePod => (
                      <NavLink
                        key={_kebabCase(servicePod.title)}
                        to={`/services/${_kebabCase(servicePod.title)}/`}
                        exact
                      >
                        {servicePod.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <NavLink to='/project/' exact>
                Projects
              </NavLink>
              <NavLink to='/blog/' exact>
                Blog
              </NavLink>
              <NavLink to='/contact/' exact>
                Contact
              </NavLink>
              <NavLink to='/client-area/' exact className='login'>
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav)
