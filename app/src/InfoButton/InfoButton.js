import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { Info } from 'src/Icons'
import Tooltip from '../Tooltip'

const InfoIcon = styled(Info)(props => `
  fill: ${props.theme.gray4};
  vertical-align: middle;
  width: 12px;
  height: 12px;
  cursor: pointer;
  transition: fill 0.3s ease-in-out;
 
  &:hover {
    fill: ${props.theme.gray1};
  }
`)

const InfoButton = ({ message }) => (
  <Tooltip message={message}>
    <InfoIcon />
  </Tooltip>
)

InfoButton.propTypes = {
  message: PropTypes.any
}

InfoButton.defaultProps = {
  message: undefined
}

export default InfoButton
