import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'react-emotion'
import { Check } from 'src/Icons'

/* istanbul ignore next */
const SpinnerContainer = styled.div(({ theme }) => `
  width: 100px;
  height: 100px;
  background-color: ${theme.defaultColorInverse};
  border-radius: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
`)

/* istanbul ignore next */
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

/* istanbul ignore next */
const pop = keyframes`
  0% {
    width: 0;
    height: 0;
  }
  90% {
    width: 20px;
    height: 20px;
  }
  100% {
    width: 15px;
    height: 15px;
  }
`

/* istanbul ignore next */
const spinner = css`
  font-size: 10px;
  text-indent: -9999em;
  border-top: 4px solid #DDDDDD;
  border-right: 4px solid #DDDDDD;
  border-bottom: 4px solid #DDDDDD;
  border-left: 4px solid #07A1BF;
  animation: ${spin} 1.1s infinite linear;
  position: relative;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  &:after {
    border-radius: 50%;
    width: 44px;
    height: 44px;
  }
`

/* istanbul ignore next */
const successSpinner = css`
  border: 4px solid #00BF55;
  animation: unset;
`

/* istanbul ignore next */
const check = css`
  display: block;
  fill: #00BF55;
  width: 15px;
  height: 15px;
  position: absolute;
  animation: ${pop} 500ms cubic-bezier(0.540, 0.285, 0.285, 0.990);
`

export const SpinnerModalContent = ({
  onAnimationEnd,
  success
}) => (
  <SpinnerContainer>
    <div className={success ? [spinner, successSpinner].join(' ') : spinner} />
    {
      spinner && (
        <Check
          onAnimationEnd={onAnimationEnd}
          className={check}
        />
      )
    }
  </SpinnerContainer>
)

SpinnerModalContent.propTypes = {
  onAnimationEnd: PropTypes.func,
  success: PropTypes.bool
}

SpinnerModalContent.defaultProps = {
  onAnimationEnd: () => {},
  success: false
}

export default SpinnerModalContent
