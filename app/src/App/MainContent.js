import styled, { css } from 'react-emotion'

export const MainContent = styled.div(({ theme }) => css`
  width: 100%;
  min-height: calc(100% - ${theme.toolbarHeight + theme.actionBarHeight}px);
  /* border: solid 2px red; */
`)

export default MainContent
