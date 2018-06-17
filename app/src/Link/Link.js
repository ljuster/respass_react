import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import * as styles from './Link.css'

// sizes
export const SMALL_LINK = 'small'
export const MEDIUM_LINK = 'medium'
export const LARGE_LINK = 'large'

// options
export const PRIMARY_LINK = 'primary'
export const SECONDARY_LINK = 'secondary'

const StyledLink = styled.a(props => css`
  ${styles.linkBase(props)}
  ${typeof styles[props.option] === 'function' ? styles[props.option](props) : ''}
  ${typeof styles[props.size] === 'function' ? styles[props.size](props) : ''}
`)

/* istanbul ignore next */
const StyledLinkOnClick = styled(StyledLink.withComponent('button'))`
  outline: none;
  border: none;
`

const Link = ({ component: Component, active, ...props }) => {
  const TheLink = Component
    ? StyledLink.withComponent(Component)
    : props.onClick && typeof props.onClick === 'function' ? StyledLinkOnClick : StyledLink
  return <TheLink className={active ? 'active' : ''} {...props} />
}

Link.propTypes = {
  active: PropTypes.bool,
  size: PropTypes.string,
  option: PropTypes.string
}

Link.defaultProps = {
  active: false,
  size: 'inherit',
  option: undefined // undefined results in default styles
}

export default Link
