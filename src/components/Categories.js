import React from 'react'
import { NavLink } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'

import './Categories.css'

const Categories = ({ categories }) => (
  <ul className='Categories'>
    {categories.map((category, index) => {
      return (
        <li key={category + index}>
          <NavLink to={`/blog/category/${_kebabCase(category)}/`}>
            {category}
          </NavLink>
        </li>
      )
    })}
  </ul>
)

export default Categories
