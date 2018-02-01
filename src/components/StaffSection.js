import React from 'react'
import _sortBy from 'lodash/sortBy'

import StaffMemberCard from './StaffMemberCard'
import './StaffSection.css'

export default ({ title, content, staff, id }) => (
  <section className='Section StaffSection' id={id}>
    <div className='Container'>
      <h2 className='H2 taCenter StaffSection--Title'>{title}</h2>
      {staff && (
        <div className='StaffSection--Grid'>
          {_sortBy(staff, ['order']).map(staffMember => (
            <StaffMemberCard
              key={staffMember.title}
              staffMember={staffMember}
            />
          ))}
        </div>
      )}
    </div>
  </section>
)
