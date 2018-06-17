import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import styled, { css } from 'react-emotion'
import { withTheme } from 'emotion-theming'
import { compose } from 'recompose'
import { UnmountClosed } from 'react-collapse'
import TableRow from 'src/Table/TableRow'
import { Edit, Archive, Plus } from 'src/Icons'
import { withClickWrapper, withIconStyles, withToggle } from 'src/utils'
import ClientHeadingCell, { ClientCell } from './ClientHeadingCell'

const ActionIcons = styled.div(props => `
  display: none;
  position: relative;
  top: 4px;
`)

/* istanbul ignore next */
export const ClientContainer = styled.div(props => css`
  display: inline-block;
  background-color: ${props.theme.grayLight2};
  margin-top: 9px;
  border-top: solid 1px ${props.theme.grayDark};
  border-bottom: solid 1px ${props.theme.grayDark};
  &:hover ${ActionIcons} {
    display: flex;
  }
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

/* istanbul ignore next */
const createActionIcon = compose(
  withIconStyles,
  withClickWrapper
)

export const iconStyles = props => `
  width: 24px;
  height: 24px;
  padding: 6px 5px;
  &:hover path {
    fill: ${props.theme.primaryColorLight};
  }
`
/* istanbul ignore next */
const EditIcon = createActionIcon(Edit)(iconStyles)
/* istanbul ignore next */
const PlusIcon = createActionIcon(Plus)(iconStyles)
/* istanbul ignore next */
const ArchiveIcon = createActionIcon(Archive)(props => `
  ${iconStyles(props)}
  width: 27px;
  height: 27px;
  padding: 6px 5px;
  margin-right: 14px;
`)

export const actionIconClick = ({ icon, clientId }) => console.log('action icon clicked: ', { icon, clientId })

// TODO: Waiting for patterns to emerge between all the major rows type components before generalizing this.
export const ClientRow = ({
  columns, initiatives: initiativeIds, children, // row props
  id, // cell props
  logo, name,
  theme, cells,
  toggle, toggledOn, // from recompose withToggle
  ...cellValues // (should potentially match cell ids: name, spendSoFar, spendPerDay, startDate, endDate, netBudget, fee, grossBudget, notes)
}) => (
  columns
    ? <ClientContainer>
      {/* This is a row */}
      <TableRow
        columns={columns.length}
        minRowHeight='80px'
        gap='0'
        stickyWidth={columns.get(0).get('sticky') && columns.get(0).get('minWidth')}
      >
        {columns.map((column, index) => (
          index === 0
            ? <ClientHeadingCell
              key={`${column.get('id')}${id}`}
              logo={logo}
              name={name}
              minWidth={`calc(${column.get('minWidth')} + ${theme.tablePadding}px)`}
              rowHeight='80px'
              onToggleOpen={toggle}
              isOpen={toggledOn}
            >
              <ActionIcons>
                <EditIcon onClick={() => actionIconClick({ icon: 'edit', clientId: id })} />
                <PlusIcon onClick={() => actionIconClick({ icon: 'plus', clientId: id })} />
                <ArchiveIcon onClick={() => actionIconClick({ icon: 'archive', clientId: id })} />
              </ActionIcons>
            </ClientHeadingCell>
            : <ClientCell key={`${column.get('id')}${id}`} />

        ))}
      </TableRow>

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
          {typeof children === 'function' ? children(initiativeIds) : children}
        </UnmountClosed>
      </FadeContainer>
    </ClientContainer>
    // SENTRY NOTE: We may want to report an error to sentry here
    : null
)

ClientRow.propTypes = {
  toggledOn: PropTypes.bool,
  toggle: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  initiatives: PropTypes.instanceOf(Immutable.List),
  logo: PropTypes.string,
  stickyColumnWidth: PropTypes.number,
  cells: PropTypes.instanceOf(Immutable.Map),
  theme: PropTypes.object
}

ClientRow.defaultProps = {
  toggledOn: true,
  toggle: undefined,
  id: '',
  name: '',
  initiatives: undefined,
  logo: '',
  stickyColumnWidth: undefined,
  cells: undefined,
  theme: {}
}

export default withTheme(withToggle(ClientRow))
