/* istanbul ignore file */

import { css } from 'react-emotion'

// Wrapper
export const modal = css`
  position: relative;
  display: inline-block;
  top: calc(50% - 70px);
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 2px;
  outline: none;
  z-index: 1;
`

export const modalOverlay = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  &:after {
    content: '';
    position: fixed;
    width: 100%;
    height: 200%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
  }
`

export const closeButton = css`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  right: 0;
  padding: 0;
  background-color: transparent;
  border: 0;
  font-size: 22px;
  font-weight: 100;
  color: #333;
  cursor: pointer;
  z-index: 1;
`
