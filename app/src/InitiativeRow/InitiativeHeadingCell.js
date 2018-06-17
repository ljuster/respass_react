import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { GridCell } from 'src/Grid'
import { Arrow } from 'src/Icons'
import Star from 'src/Star'
import Checkbox from 'src/Checkbox'
import { responsiveText, withToggle } from 'src/utils'

/* istanbul ignore next */
export const InitiativeCell = styled(GridCell)(props => css`
  display: flex;
  padding-left: 16px;
  align-items: center;
  cursor: pointer;
  background-color: ${props.theme.grayLight};
  &:before { border-right: solid 1px ${props.theme.grayDark}; }
`)

/* istanbul ignore next */
export const InitiativeTitle = styled.div(props => css`
  width: calc(100% - 80px);
  padding: 10px 0;
  font-family: ${props.theme.semiboldFont};
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0;
  ${responsiveText({
    min: 14,
    max: 16,
    minVw: 420,
    maxVw: 1200
  })}
`)

/* istanbul ignore next */
export const ExpandArrow = styled(Arrow)(props => `
  position: relative;
  width: 30px;
  top: 4px;
  padding: 10px;
  margin-right: 5px;
  path { fill: ${props.theme.primaryColor}; }
  transform: ${props.isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'};
  transition: all 200ms ease-in-out;
`)

const InitiativeCheckbox = styled(Checkbox)`
  margin-right: 10px;
`

const TempStar = withToggle(Star)
const TempCheckbox = withToggle(InitiativeCheckbox)

const InitiativeHeadingCell = ({ isOpen, count, name, logo, onToggleOpen, isChecked, isFave, onCheckboxClick, onFaveClick, children, ...restProps }) => (
  <InitiativeCell sticky {...restProps}>
    {/*
    <InitiativeCheckbox toggle={onCheckboxClick} toggledOn={isChecked} />
    <Star toggle={onFaveClick} toggledOn={isFave} />
    */}
    <TempCheckbox />
    <TempStar />
    <span onClick={onToggleOpen}><ExpandArrow isOpen={isOpen} /></span>
    <InitiativeTitle onClick={onToggleOpen}>{name}</InitiativeTitle>
    {children}
  </InitiativeCell>
)

InitiativeHeadingCell.propTypes = {
  isOpen: PropTypes.bool,
  logo: PropTypes.string,
  name: PropTypes.string,
  count: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  isChecked: PropTypes.bool,
  isFave: PropTypes.bool,
  onCheckboxClick: PropTypes.func,
  onFaveClick: PropTypes.func,
  children: PropTypes.node,
  onToggleOpen: PropTypes.func
}

InitiativeHeadingCell.defaultProps = {
  isOpen: false,
  logo: undefined,
  name: undefined,
  count: undefined,
  isChecked: false,
  isFave: false,
  onCheckboxClick: undefined,
  onFaveClick: undefined,
  children: undefined,
  onToggleOpen: undefined
}

export default InitiativeHeadingCell
