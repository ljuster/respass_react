/* istanbul ignore file */
import styled, { css } from 'react-emotion'
import { GridCell } from 'src/Grid'
import { responsiveText } from 'src/utils'

export default styled(GridCell)(props => css`
  padding: 0 20px;
  ${responsiveText({
    min: 10,
    max: 14,
    minVw: 1200,
    maxVw: 2000
  })}
`)
