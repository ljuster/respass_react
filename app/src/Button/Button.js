import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import * as styles from './Button.css'

// sizes
export const SMALL_BUTTON = 'small'
export const MEDIUM_BUTTON = 'medium'
export const LARGE_BUTTON = 'large'

// options
export const PRIMARY_BUTTON = 'primary'
export const SECONDARY_BUTTON = 'secondary'

/* istanbul ignore next */
const StyledButton = styled.button(props => css`
  ${styles.buttonBase(props)}
  ${typeof styles[props.option] === 'function' ? styles[props.option](props) : ''}
  ${typeof styles[props.size] === 'function' ? styles[props.size](props) : ''}
`)

/* istanbul ignore next */
const StyledButtonLink = styled(StyledButton.withComponent('a'))`
  display: inline-block;
  text-decoration: none;
  &:hover, &:active, &:focus, &:visited {
    text-decoration: none;
  }
`

/* istanbul ignore next */
const Button = ({ component: Component, active, ...props }) => {
  const TheButton = Component
    ? StyledButtonLink.withComponent(Component)
    : props.href ? StyledButtonLink : StyledButton
  return <TheButton className={active ? 'active' : ''} {...props} />
}

Button.propTypes = {
  active: PropTypes.bool,
  size: PropTypes.string,
  option: PropTypes.string,
  href: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

Button.defaultProps = {
  active: false,
  size: MEDIUM_BUTTON,
  option: undefined, // results in default styles
  href: undefined
}

export default Button
