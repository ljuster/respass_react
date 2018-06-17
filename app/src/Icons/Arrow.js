import React from 'react'
import PropTypes from 'prop-types'

const Arrow = ({ className }) => (
  <svg
    className={className}
    viewBox='0 0 24 15'
    xmlns='http://www.w3.org/2000/svg'
  >
    <title>DownArrowIcon</title>
    <path
      d='M0 2.83L2.829 0l9.175 9.339L21.171 0 24 2.83 12.004 15z'
      fillRule='nonzero'
    />
  </svg>
)

Arrow.propTypes = {
  className: PropTypes.string
}

Arrow.defaultProps = {
  className: ''
}

export default Arrow
