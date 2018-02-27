import React from 'react'
import { withRouter } from 'react-router-dom'
import _sortBy from 'lodash/sortBy'
import _kebabCase from 'lodash/kebabCase'

import NavLink from './NavLink'
import './NavPopup.css'

class NavPopup extends React.Component {
  render () {
    const { active, handleClose, services } = this.props
    return (
      <div className={`NavPopup ${active && 'active'}`}>
        <button className='NavPopup--CloseButton' onClick={handleClose}>
          <CloseSVG />
        </button>
        <div className='flex'>
          <div className='inner'>
            <NavLink onClick={handleClose} to='/about/' exact>
              About
            </NavLink>
            <div className='NavLink--DropDown'>
              <div className='NavLink NavLink--Parent'>
                Services <div className='hover'>•</div>
                <div className='NavLink--Children--Mobile'>
                  {_sortBy(services, ['order']).map(servicePod => (
                    <NavLink
                      onClick={handleClose}
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
            <NavLink onClick={handleClose} to='/project/' exact>
              Projects
            </NavLink>
            <NavLink onClick={handleClose} to='/blog/' exact>
              Blog
            </NavLink>
            <NavLink onClick={handleClose} to='/contact/' exact>
              Contact
            </NavLink>
            <NavLink
              onClick={handleClose}
              to='/client-area/'
              exact
              className='login'
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NavPopup)

const CloseSVG = () => (
  <svg
    width='28'
    height='27'
    viewBox='0 0 28 27'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g stroke='#ffffff' strokeWidth='3' fill='none' fillRule='evenodd'>
      <path d='M2 26L27 1M2 1l25 25' />
    </g>
  </svg>
)
