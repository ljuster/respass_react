/* istanbul ignore file */
import styled, { css } from 'react-emotion'
import { GridCell } from 'src/Grid'

export default styled(GridCell)(props => css`
  font-size: 10px;
  padding: 0 20px;
  background: linear-gradient(to bottom, #f4f4f4 0%,#e7e7e7 100%);
  border-top: solid 1px #d8d8d8;
  border-bottom: solid 1px ${props.theme.grayDark};
  box-shadow: inset 0px 1px 0px 0px #fff;
`)
