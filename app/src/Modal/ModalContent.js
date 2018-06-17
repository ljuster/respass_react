/* istanbul ignore file */

import styled from 'react-emotion'

const ModalContent = styled.div(({ theme }) => `
  padding: 50px 0;
  width: calc(100vw - 320px);
  min-width: 400px;
  max-width: 650px;
  background-color: ${theme.defaultDarkBackground};
`)

export default ModalContent
