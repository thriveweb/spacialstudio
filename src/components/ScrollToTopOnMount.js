import { Component } from 'react'
import { withRouter } from 'react-router'

class ScrollToTop extends Component {
  componentDidUpdate () {
    window.scrollTo(0, 0)
  }
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return this.props.children || null
  }
}

export default withRouter(ScrollToTop)
