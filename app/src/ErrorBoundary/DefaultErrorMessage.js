import React from 'react'
import styled, { css } from 'react-emotion'

import { ResortPassLogo } from 'src/Global'

/* istanbul ignore next */
export const ErrorMessageContainer = styled.div(({ theme }) => css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
`)

/* istanbul ignore next */
export const LogoContainer = styled(ResortPassLogo)`
  height: 100px;
`

/* istanbul ignore next */
export const ErrorMessage = styled.div(({ theme }) => css`
  color: ${theme.defaultColorInverse}
  ${theme.h5}
`)

const DefaultErrorMessage = () => (
  <ErrorMessageContainer>
    <LogoContainer src='/img/resort-pass.svg' />
    <ErrorMessage>
      Oops! Something went wrong 😱
    </ErrorMessage>
  </ErrorMessageContainer>
)

DefaultErrorMessage.propTypes = {
}

DefaultErrorMessage.defaultProps = {
}

export default DefaultErrorMessage
