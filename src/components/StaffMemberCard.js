import React from 'react'

import LazyImage from './LazyImage'
import Content from './Content'
import './StaffMemberCard.css'

export default class StaffMemberCard extends React.Component {
  static defaultProps = {
    contentLimit: 150
  }

  state = {
    contentWrapExpanded: false
  }

  toggleExpandContent = () => {
    this.setState(prevState => ({
      contentWrapExpanded: !prevState.contentWrapExpanded
    }))
  }

  render () {
    const { staffMember, contentLimit } = this.props
    const limitContent = staffMember.content.length > contentLimit
    const contentToDisplay = limitContent && !this.state.contentWrapExpanded
      ? staffMember.content.slice(0, contentLimit) + '...'
      : staffMember.content

    return (
      <div className='StaffMember'>
        {staffMember.image && (
          <div className='StaffMember--Image'>
            <LazyImage
              src={staffMember.image}
              alt={staffMember.title}
            />
          </div>
        )}
        <h3 className='StaffMember--Title'>{staffMember.title}</h3>
        {staffMember.subtitle && (
          <div className='StaffMember--Subtitle'>{staffMember.subtitle}</div>
        )}
        <div className='StaffMember--ContentWrap'>
          <Content source={contentToDisplay} />
        </div>
        {!this.state.contentWrapExpanded && limitContent &&
          <button className='StaffMember--ReadMore' onClick={this.toggleExpandContent}>Read More</button>
        }
      </div>
    )
  }
}
