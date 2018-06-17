import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DefaultErrorMessage from './DefaultErrorMessage'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch (error, info) {
    this.setState({
      error: error,
      errorInfo: info
    })

    console.error('Error Message: ', error)
    console.error('Error Info: ', info)
  }

  render () {
    if (this.state.errorInfo) {
      return this.props.render
        ? this.props.render(this.state)
        : <DefaultErrorMessage />
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  render: PropTypes.func,
  children: PropTypes.node
}

ErrorBoundary.defaultProps = {
  render: undefined,
  children: null
}

export default ErrorBoundary
