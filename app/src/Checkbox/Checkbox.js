import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

/* istanbul ignore next */
const StyledCheckboxContainer = styled.div(props => css`
  position: relative;
  height: 20px;
  width: 20px;
  cursor: pointer;
`)

/* istanbul ignore next */
const StyledCheckbox = styled.span(props => css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid ${props.toggledOn
    ? props.theme.primaryColor
    : props.theme.defaultColorLight};

  &:hover {
    border-color: ${props.theme.primaryColor};
  }
`)

/* istanbul ignore next */
const StyledCheckMark = styled.span(props => css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%) rotate(45deg);
  width: 6px;
  height: 10px;
  border: 1px solid ${props.theme.primaryColor};
  border-width: 0 2px 2px 0;
`)

const Checkbox = ({
  toggledOn,
  toggle,
  className
}) => (
  <StyledCheckboxContainer onClick={toggle} className={className}>
    <StyledCheckbox toggledOn={toggledOn} />
    {toggledOn && <StyledCheckMark />}
  </StyledCheckboxContainer>
)

Checkbox.propTypes = {
  toggledOn: PropTypes.bool,
  toggle: PropTypes.func
}

Checkbox.defaultProps = {
  toggledOn: false,
  toggle: undefined
}

export default Checkbox
