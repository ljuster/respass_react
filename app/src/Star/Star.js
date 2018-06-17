import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

/* istanbul ignore next */
const StyledStarContainer = styled.div(props => css`
  position: relative;
  display: inline-block;
  cursor: pointer;
`)

/* istanbul ignore next */
const StyledStar = styled.div(props => css`
  position: relative;
  display: inline-block;
  height: 0;
  width: 0;
  margin-left: .9em;
  margin-right: .9em;
  margin-bottom: 1.2em;
  border-right:  .3em solid transparent;
  border-bottom: .7em  solid ${props.toggledOn
    ? props.theme.defaultStarColor
    : props.theme.defaultColorLight};
  border-left:   .3em solid transparent;

  /* Controlls the size of the stars. */
  font-size: 6px;

  &:before, &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: .6em;
    left: -1em;
    border-right:  1em solid transparent;
    border-bottom: .7em  solid ${props.toggledOn
    ? props.theme.defaultStarColor
    : props.theme.defaultColorLight};
    border-left:   1em solid transparent;
    transform: rotate(-35deg);
  }

  &:after {
    transform: rotate(35deg);
  }
`)

const Star = ({
  toggledOn,
  toggle,
  className
}) => (
  <StyledStarContainer onClick={toggle} className={className}>
    <StyledStar toggledOn={toggledOn} />
  </StyledStarContainer>
)

Star.propTypes = {
  toggledOn: PropTypes.bool,
  toggle: PropTypes.func
}

Star.defaultProps = {
  toggledOn: false,
  toggle: undefined
}

export default Star
