import React from 'react'
import { NavLink } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'

import './Categories.css'

const Categories = ({ categories }) => (
  <div className='Categories'>
    {categories.map((category, index) => {
      return (
        <NavLink
          className='NavLink'
          key={category.title + index}
          to={`/blog/category/${_kebabCase(category.title)}/`}
        >
          {category.title}
          <div className='hover'>•</div>
        </NavLink>
      )
    })}
  </div>
)

export default Categories
