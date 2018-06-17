import React from 'react'
import styled, { css } from 'react-emotion'
import PropTypes from 'prop-types'

const ToastBarConatiner = styled.div(({ theme, minHeight, isOpen }) => css`
  position: absolute;
  width: 100%;
  min-height: ${minHeight};
  bottom: ${isOpen ? `0` : `-${minHeight}`};
  transition: bottom ease-in-out 0.3s;
`)

const ToastBar = ({
  children,
  minHeight,
  isOpen
}) => (
  <ToastBarConatiner
    minHeight={minHeight}
    isOpen={isOpen}
  >
    {children}
  </ToastBarConatiner>
)

ToastBar.propTypes = {
  children: PropTypes.node,
  minHeight: PropTypes.string,
  isOpen: PropTypes.boopl
}

ToastBar.defaultProps = {
  minHeight: '50px',
  isOpen: false
}

export default ToastBar
