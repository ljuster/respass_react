import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import { camelCase } from 'lodash/fp'
import styled, { css } from 'react-emotion'
import { withTheme } from 'emotion-theming'
import { HeaderCell } from 'src/TableCells'
import TableRow from 'src/Table/TableRow'

/* istanbul ignore next */
export const Container = styled.div(props => css`
  background-color: ${props.theme.gray9};
`)

export const calcMinWidth = ({ minWidth, offset, isFirst, isLast }) => (
  isFirst
    ? `calc(${minWidth} + ${offset})`
    : isLast
      ? `calc(${minWidth} + ${offset} + 5px)`
      : minWidth
)

export const ColumnHeaders = ({ columns, stickyWidth, theme }) => (
  <Container>
    {columns
      ? (
        <TableRow columns={columns.size} minRowHeight='50px' gap='0' stickyWidth={stickyWidth}>
          {columns.map((column, index) => (
            <HeaderCell
              key={camelCase(`header${column.get('id')}`)}
              minWidth={calcMinWidth({
                minWidth: column.get('minWidth'),
                offset: `${theme.tablePadding}px`,
                isFirst: index === 0,
                isLast: index === columns.size - 1
              })}
              sticky={column.get('sticky')} rowHeight='50px' middle
            >
              {column.get('name')}
            </HeaderCell>
          ))}
        </TableRow>
      ) : (
        <TableRow columns='auto' minRowHeight='50px' gap='0'>
          <HeaderCell minWidth='100%' rowHeight='50px' middle />
        </TableRow>
      )
    }
  </Container>
)

ColumnHeaders.propTypes = {
  columns: PropTypes.instanceOf(Immutable.List),
  stickyWidth: PropTypes.string,
  theme: PropTypes.object
}

ColumnHeaders.defaultProps = {
  columns: undefined,
  stickyWidth: undefined,
  theme: {}
}

export default withTheme(ColumnHeaders)
