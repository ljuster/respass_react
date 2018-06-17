import React from 'react'
import PropTypes from 'prop-types'

const Check = ({ onAnimationEnd, className }) => (
  <svg
    viewBox='0 0 19 15'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    onAnimationEnd={onAnimationEnd}
  >
    <path
      d='M15.848 0L7.031 9.133 2.9 5.176 0 8.109 7.031 15 18.75 2.932 15.848 0z'
      fillRule='nonzero'
    />
  </svg>
)

Check.propTypes = {
  onAnimationEnd: PropTypes.func
}

export default Check
