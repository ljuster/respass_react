/* istanbul ignore file */

import styled from 'react-emotion'

const ModalFooter = styled.div(({ theme }) => `
  position: absolute;
  width: 100%;
  height: 50px;
  left: 0;
  padding: 0 16px;
  font-family: ${theme.semiboldFont};
  font-size: ${theme.mediumFontSize};
  color: ${theme.defaultColor};
  background-color: ${theme.defaultColorInverse};
  bottom: 0;
  border-top: solid 1px ${theme.defaultColorLight};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`)

export default ModalFooter
