import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import styled, { css } from 'react-emotion'
import { withTheme } from 'emotion-theming'
import { UnmountClosed } from 'react-collapse'
import TableRow from 'src/Table/TableRow'
import { TextCell } from 'src/TableCells'
import { withToggle } from 'src/utils'
import InitiativeHeadingCell from './InitiativeHeadingCell'

/* istanbul ignore next */
export const InitiativeContainer = styled.div(props => css`
  padding: 0 ${props.theme.tablePadding}px;
  margin-bottom: 9px;
  &:last-child {
    margin-bottom: 0px;
  }
  &>${TableRow}>${TextCell}:after {
    height: calc(100% + 6px);
  }
`)

const InitiativeTableRow = styled(TableRow)(props => css`
  background-color: ${props.theme.grayLight};
  border-top: solid 1px ${props.theme.grayDark};
  border-bottom: solid 1px ${props.theme.grayDark};
  border-right: solid 1px ${props.theme.grayDark};
`)

/* istanbul ignore next */
const FadeContainer = styled.div(props => `
  margin-left: -50px;
  opacity: -0.5;
  transition: all 50ms ease-in-out;
  ${props.isOpen && `
    margin-left: 0;
    opacity: 1;
    transition-duration: 300ms;
    transition-delay: 200ms;
  `}
  /*
    NOTE: These shenanighans are required because the evaluated height based on the child content
    does not include margins. Adding the last bottom margin to the collapsible container makes it
    expand to the correct height.
  */
  .ReactCollapse--content {
    padding-bottom: 5px;
  }
`)

// TODO: Waiting for patterns to emerge between all the rows before generalizing this.
export const InitiativeRow = ({
  columns, groups: groupIds, children, // row props
  id, // cell props
  theme, cells,
  toggle, toggledOn, // from recompose withState
  ...cellValues // (should potentially match cell ids: name, spendSoFar, spendPerDay, startDate, endDate, netBudget, fee, grossBudget, notes)
}) => (
  <InitiativeContainer>
    {/* This is a row */}
    <InitiativeTableRow
      columns={columns.length}
      minRowHeight='50px'
      gap='0'
      stickyWidth={columns.get(0).get('sticky') && columns.get(0).get('minWidth')}
    >
      {columns.map((column, index) => {
        const { id: columnId, minWidth, sticky } = column.toObject()

        if (index === 0) {
          return (
            <InitiativeHeadingCell
              key={`${columnId}${id}`}
              name={cellValues[columnId]}
              minWidth={minWidth}
              rowHeight='50px'
              onToggleOpen={toggle}
              isOpen={toggledOn}
            />
          )
        }

        const Cell = cells.get(columnId)
        return (
          <Cell key={`${columnId}${id}`} minWidth={minWidth} sticky={sticky} rowHeight='50px' middle>
            {cellValues[columnId] !== undefined ? cellValues[columnId] : `(${columnId})`}
          </Cell>
        )
      })}
    </InitiativeTableRow>

    {/* Collapsing Content */}
    <FadeContainer isOpen={toggledOn}>
      <UnmountClosed
        isOpened={toggledOn}
        springConfig={{
          stiffness: 300,
          damping: 26
        }}
        hasNestedCollapse
      >
        {typeof children === 'function' ? children(groupIds) : children}
      </UnmountClosed>
    </FadeContainer>
  </InitiativeContainer>
)

InitiativeRow.propTypes = {
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

InitiativeRow.defaultProps = {
  isOpen: false,
  columns: undefined,
  groups: undefined,
  children: undefined,
  id: undefined,
  cells: undefined
}

export default withTheme(withToggle(InitiativeRow))
