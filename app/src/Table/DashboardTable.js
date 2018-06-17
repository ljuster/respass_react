import React from 'react'
import PropTypes from 'prop-types'
import Immutable, { fromJS } from 'immutable'
import styled from 'react-emotion'
import { ClientRow } from 'src/ClientRow'
import { InitiativeRow } from 'src/InitiativeRow'
import columns from './data-columns'
import cells from './data-column-cells'
import { collectEntities } from 'src/Table'
import { ColumnHeaders } from 'src/ColumnHeaders'

// import { ConnectedThing } from 'src/ConnectedThing'

const TableContainer = styled.div`
  display: grid; /* This is important to ensure all rows in table scroll together! */
  width: 100vw;
  overflow-x: scroll;
`

const stickyWidth = columns.get(0).get('sticky') && columns.get(0).get('minWidth')

const transformClientResp = (clients = []) => fromJS(clients.map(client => ({
  id: client.id,
  name: client.name,
  logo: client.logoUrl,
  hyfn8BrandId: client.hyfn8BrandId,
  initiatives: client.initiatives.map(initiative => initiative.id)
})))

const logData = (label, data) => {
  console.groupCollapsed(label)
  console.log('data: ', JSON.stringify(data, null, '  '))
  console.groupEnd()
}

export const DashboardTable = ({
  clientData,
  clients,
  initiatives,
  groups,
  passes
}) => (
  <TableContainer>
    {logData('remote clients data', clientData)}
    {logData('transformed clients data', transformClientResp(clientData && clientData.clients))}
    {/*
      <pre>
        transformed data: {data && data.clients && JSON.stringify(transformClientResp(data.clients), null, '  ')}
      </pre>
    */}
    {/* <ConnectedThing id='1' /> */}
    <ColumnHeaders columns={columns} stickyWidth={`calc(${stickyWidth} + 15px)`} />
    {clients
      ? collectEntities(clients, clients.keySeq()).map(client =>
        <ClientRow columns={columns} cells={cells} key={client.get('id')} {...client.toObject()}>{
          // --------------------------------
          // INITIATIVE
          // --------------------------------
          // render function to map over initiative ids from the client
          initiativeIds => collectEntities(initiatives, initiativeIds).map(initiative =>
            <InitiativeRow columns={columns} cells={cells} key={initiative.get('id')} {...initiative.toObject()}>{

              // --------------------------------
              // GROUP
              // --------------------------------
              // render function to map over group ids from the initiative
              // groupIds => collectEntities(groups, groupIds).map(group =>
              //   <GroupRow columns={columns} cells={cells} key={group.get('id')} {...group.toObject()}>
              //     Group!
              //   </GroupRow>
              // )

              <ul>
                <li><h5>Group Item</h5></li>
                <li><h5>Group Item</h5></li>
                <li><h5>Group Item</h5></li>
                <li><h5>Group Item</h5></li>
                <li><h5>Group Item</h5></li>
                <li><h5>Group Item</h5></li>
                <li><h5>Group Item</h5></li>
                <li><h5>Group Item</h5></li>
                <li><h5>Group Item</h5></li>
              </ul>

            }</InitiativeRow>
          )
          // --------------------------------
        }</ClientRow>
      )
      : <div>Loading ...</div>
    }
  </TableContainer>
)

DashboardTable.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    networkStatus: PropTypes.number,
    clients: PropTypes.array
  }),
  clients: PropTypes.instanceOf(Immutable.Map),
  initiatives: PropTypes.instanceOf(Immutable.Map),
  groups: PropTypes.instanceOf(Immutable.Map),
  campaigns: PropTypes.instanceOf(Immutable.Map)
}

DashboardTable.defaultProps = {
  data: undefined,
  clients: undefined,
  initiatives: undefined,
  groups: undefined,
  passes: undefined
}

export default DashboardTable
