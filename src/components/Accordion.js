import React from 'react'

import './Accordion.css'

export default class Accordion extends React.Component {
  static defaultProps = {
    items: [],
    className: ''
  }

  state = {
    activeItem: null
  }

  handleClick = index => {
    const activeItem = this.state.activeItem === index ? null : index
    this.setState({ activeItem })
  }

  render () {
    const { items, className } = this.props
    return (
      <div className={`Accordion ${className}`}>
        {items.map((item, index) => {
          const active = this.state.activeItem === index
          return (
            <div
              className='Accordion--item'
              key={`accordion-item-${item.title + index}`}
              active={active}
            >
              <h3 onClick={() => this.handleClick(index)}>{item.title}</h3>
              {active && (
                <div className='description'>
                  {item.description} <br />
                  {item.link && (
                    <a href={item.link} className='Button'>
                      {item.link}
                    </a>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }
}
