import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import styled from 'react-emotion'
import { uniqueId } from 'lodash'

const StyledTooltip = styled(ReactTooltip)(props => `
  color: #666 !important;
  background-color: #fff !important;
  border: solid 1px #e5e5e5 !important;
  border-radius: 2px !important;
  max-width: 270px;
  text-align: left;
  box-shadow: 0 10px 30px -15px #666;
  font-size: 14px;
  line-height: 18px;
  transition: opacity 0.3s ease-in-out;
  opacity: 1 !important;

  &:before {
    bottom: -8px !important;
    border-top: 8px solid #e5e5e5!important;
  }

  &:after {
    bottom: -5px !important;
    border-top-color: #fff !important;
  }
`)

const Tooltip = ({ message, children, id = uniqueId('tooltip-') }) => (
  <div>
    <StyledTooltip
      id={id}
      place='top'
      effect='solid'
    >
      {message}
    </StyledTooltip>
    <span data-for={id} data-tip>
      {children}
    </span>
  </div>
)

Tooltip.propTypes = {
  message: PropTypes.any,
  children: PropTypes.any
}

Tooltip.defaultProps = {
  message: undefined,
  children: undefined
}

export default Tooltip
