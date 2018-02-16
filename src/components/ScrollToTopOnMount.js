import { Component } from 'react'
import { withRouter } from 'react-router'

class ScrollToTop extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return this.props.children || null
  }
}

export default withRouter(ScrollToTop)
