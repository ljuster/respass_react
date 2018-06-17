import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import styled, { css } from 'react-emotion'
import { withTheme } from 'emotion-theming'
import ExpandableRow from 'src/Table/ExpandableRow'
import TableRow from 'src/Table/TableRow'
import { TextCell } from 'src/TableCells'

/* istanbul ignore next */
export const InitiativeContainer = styled.div(props => css`
  padding: 0 ${props.theme.tablePadding}px;
  &>${TableRow}>${TextCell}:after {
    height: calc(100% + 6px);
  }
`)

const InitiativeExpandableRow = styled(ExpandableRow)`
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`

const InitiativeRow = styled(TableRow)(props => css`
  background-color: ${props.theme.grayLight};
  border-top: solid 1px ${props.theme.grayDark};
  border-bottom: solid 1px ${props.theme.grayDark};
`)

// TODO: Waiting for patterns to emerge between all the rows before generalizing this.
const Initiative = ({
  isOpen, columns, groups, children, // row props
  id, cells, // props for cells
  ...initiativeCellValues // (should potentially match cell ids: name, spendSoFar, spendPerDay, startDate, endDate, netBudget, fee, grossBudget, notes)
}) => (
  <InitiativeExpandableRow isOpen={isOpen} heightClosed='52px'>
    <InitiativeContainer>
      {/* This is a row */}
      <InitiativeRow
        columns={columns.length}
        minRowHeight='50px'
        gap='0'
        stickyWidth={columns.get(0).get('sticky') && columns.get(0).get('minWidth')}
      >
        {/* These are cells/columns in the row */}
        {columns.map((column, index) => {
          const { id: columnId, minWidth, sticky } = column.toObject()
          const Cell = index === 0
            ? styled(cells.get(columnId))(props => css`
              background-color: ${props.theme.grayLight};
              &:before { border-right: solid 1px #d8d8d8; }
            `)
            : cells.get(columnId)
          return (
            <Cell key={`${columnId}${id}`} minWidth={minWidth} sticky={sticky} rowHeight='50px' middle>
              {initiativeCellValues[columnId] !== undefined ? initiativeCellValues[columnId] : `(${columnId})`}
            </Cell>
          )
        })}
      </InitiativeRow>
      <div>
        {typeof children === 'function' ? children(groups) : children}
      </div>
    </InitiativeContainer>
  </InitiativeExpandableRow>
)

Initiative.propTypes = {
  isOpen: PropTypes.bool,
  columns: PropTypes.instanceOf(Immutable.List),
  groups: PropTypes.instanceOf(Immutable.List),
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ]),
  id: PropTypes.string,
  cells: PropTypes.instanceOf(Immutable.Map)
}

Initiative.defaultProps = {
  isOpen: false,
  columns: undefined,
  groups: undefined,
  children: undefined,
  id: undefined,
  cells: undefined
}

export default withTheme(Initiative)
