import React from 'react'
import PropTypes from 'prop-types'

const Info = ({ className }) => (
  <svg
    className={className}
    viewBox='0 0 15 15'
    xmlns='http://www.w3.org/2000/svg'
  >
    <title>InfoIcon</title>
    <path
      d='M7.5 0a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zM6.23 10.006C6.581 8.888 7.25 7.55 7.367 7.21c.17-.492-.132-.71-1.088.13l-.213-.4c1.09-1.185 3.335-1.453 2.571.384-.477 1.147-.818 1.921-1.013 2.518-.284.871.434.518 1.137-.131.096.156.127.207.222.387-1.56 1.486-3.294 1.617-2.755-.092zm2.963-5.105c-.332.283-.825.277-1.1-.014-.276-.29-.23-.755.102-1.038.332-.283.825-.277 1.1.014.275.29.23.755-.102 1.038z'
      fillRule='nonzero'
    />
  </svg>
)

Info.propTypes = {
  className: PropTypes.string
}

Info.defaultProps = {
  className: ''
}

export default Info
