import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './PasswordProtected.css'

// Remove react devtools hook for obfuscation:
// https://github.com/facebook/react-devtools/blob/master/shells/chrome/src/checkForReact.js
if (
  process.env.NODE_ENV === 'production' &&
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ &&
  Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length
) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {}
}

class PasswordProtected extends Component {
  static defaultProps = {
    daysToExpire: 5,
    localStorageKey: 'Password',
    defaultMessage: 'Please enter a password',
    incorrectMessage: 'The password you entered is incorrect',
    hiddenUsername: 'Spacial Studios',
    password: null // base64 encoded
  }

  static propTypes = {
    daysToExpire: PropTypes.number,
    password: PropTypes.string.isRequired
  }

  state = {
    passwordInput: '',
    passwordAttempt: '',
    message: this.props.defaultMessage
  }

  componentDidMount () {
    const passwordToken = window.localStorage.getItem(
      this.props.localStorageKey
    )
    if (passwordToken) this.readToken(passwordToken)
  }

  componentDidUpdate () {
    this.writeToken()
  }

  readToken = passwordToken => {
    if (!passwordToken) return
    const dayInMS = 86400 * 1000
    const token = JSON.parse(passwordToken)
    const now = new Date().valueOf()
    const tokenDate = new Date(token.time).valueOf()
    const expiryDate = tokenDate.valueOf() + this.props.daysToExpire * dayInMS
    const expired = expiryDate < now
    if (!expired) {
      this.setState({ passwordAttempt: token.passwordAttempt })
    }
  }

  writeToken = () => {
    window.localStorage.setItem(
      this.props.localStorageKey,
      JSON.stringify({
        passwordAttempt: this.state.passwordAttempt,
        time: new Date()
      })
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      passwordAttempt: btoa(this.state.passwordInput),
      message: this.props.incorrectMessage
    })
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    const { children, password, hiddenUsername, className = '' } = this.props
    const { message, passwordInput, passwordAttempt } = this.state
    return passwordAttempt !== password ? (
      <main className={`PasswordProtected ${className}`} data-aos='flip-down'>
        <div className='section'>
          <div className='container'>
            <div className='PasswordProtected--Modal'>
              {message && (
                <div className='PasswordProtected--Message'>{message}</div>
              )}
              <form
                onSubmit={this.handleSubmit}
                className='PasswordProtected--Form'
              >
                <input
                  className='PasswordProtected--Input'
                  type='hidden'
                  name='passwordInput'
                  value={hiddenUsername}
                  disabled
                />
                <input
                  className='PasswordProtected--Input'
                  type='password'
                  name='passwordInput'
                  onChange={this.handleChange}
                  value={passwordInput}
                  required
                />
                <input
                  type='submit'
                  value='Submit'
                  className='PasswordProtected--Button'
                />
              </form>
            </div>
          </div>
        </div>
      </main>
    ) : (
      children
    )
  }
}

export default PasswordProtected
