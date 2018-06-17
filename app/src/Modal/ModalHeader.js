/* istanbul ignore file */

import styled from 'react-emotion'

const ModalHeader = styled.div(({ theme }) => `
  position: absolute;
  width: 100%;
  height: 50px;
  left: 0;
  padding: 0 16px;
  font-family: ${theme.semiboldFont};
  font-size: ${theme.mediumFontSize};
  color: ${theme.defaultColor};
  background-color: ${theme.defaultColorInverse};
  top: 0;
  padding-right: 50px;
  white-space: nowrap;
  line-height: 50px;
  vertical-align: middle;
  border-bottom: solid 1px ${theme.defaultColorLight};
`)

export default ModalHeader
