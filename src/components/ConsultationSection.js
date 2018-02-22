import React from 'react'
import { Link } from 'react-router-dom'

import './ConsultationSection.css'

const ConsultationSection = ({ ...props }) => {
  return (
    <section className='ConsultationSection section thin' {...props}>
      <div className='container'>
        <h2>Ask today for a free consultation</h2>
        <Link className='button' to='/contact/'>
          book now
        </Link>
      </div>
    </section>
  )
}
export default ConsultationSection
