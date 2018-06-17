/* istanbul ignore file */
import styled, { css } from 'react-emotion'
import { Grid } from 'src/Grid'

const TableRow = styled(Grid)(props => css`
  ${props.stickyWidth && `padding-left: ${props.stickyWidth};`}
`)

export default TableRow
