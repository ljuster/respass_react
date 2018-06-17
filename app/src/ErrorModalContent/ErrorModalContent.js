import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

/* istanbul ignore next */
const ModalErrors = styled.ul`
  padding: 0;
  margin: 0;
`

/* istanbul ignore next */
const ModalError = styled.li`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`

export const ErrorModalContent = ({
  errors,
  errorKeyName
}) => (
  <ModalErrors>{
    typeof errors === 'string'
      ? errors
      : errors.map((error, index) => (
        <ModalError key={`error-${index}`}>
          {error[errorKeyName] || error.full_message || error.detail || error}
        </ModalError>
      ))
  }</ModalErrors>
)

ErrorModalContent.propTypes = {
  errors: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]).isRequired,
  onConfirmClick: PropTypes.func,
  title: PropTypes.string,
  errorKeyName: PropTypes.string
}

ErrorModalContent.defaultProps = {
  onConfirmClick: undefined,
  confirmLabel: 'Ok',
  title: 'Error',
  errorKeyName: ''
}

export default ErrorModalContent
