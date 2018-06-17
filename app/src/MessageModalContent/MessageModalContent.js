import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { responsiveText } from 'src/utils'

const Message = styled.div(props => `
  font-family: ${props.theme.regularFont};
  padding: 30px;
  ${responsiveText({
    min: 14,
    max: 18,
    minVw: 420,
    maxVw: 1200
  })}
`)

export const MessageModalContent = ({ message }) => (
  <Message>{message}</Message>
)

MessageModalContent.propTypes = {
  message: PropTypes.string
}

MessageModalContent.defaultProps = {
  message: 'no message'
}

export default MessageModalContent
