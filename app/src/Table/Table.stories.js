/* istanbul ignore file */
import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'react-emotion'
import NOTES from './README.md'
import { withNotes } from '@storybook/addon-notes'
import { DashboardTable } from 'src/Table/DashboardTable'

// entities as would be in the store
import clients from './data-clients'
import initiatives from './data-initiatives'
import groups from './data-groups'
import campaigns from './data-campaigns'

import { BaseCell } from 'src/TableCells'

const Row = styled.div`
  height: 50px;
  width: 100%;
`

storiesOf('Table', module)
  .add(
    'Base',
    withNotes(NOTES)(
      () => (
        <Row>
          <BaseCell minWidth='200px' sticky={false} rowHeight='50px' middle>Foo</BaseCell>
        </Row>
      )
    )
  )

  .add(
    'DashboardTable',
    withNotes(NOTES)(
      () => (
        <div>
          <DashboardTable
            clients={clients}
            initiatives={initiatives}
            groups={groups}
            campaigns={campaigns}
          />
        </div>
      )
    )
  )
