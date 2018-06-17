/* istanbul ignore file */
import React from 'react'
import { storiesOf } from '@storybook/react'
import NOTES from './README.md'
import { withNotes } from '@storybook/addon-notes'
import styled from 'react-emotion'
import { stickyColumnWidth } from 'theme'

import { ClientRow } from 'src/ClientRow'
import columns from 'src/Table/data-columns'
import cells from 'src/Table/data-column-cells'

const FullWidthSpacer = styled.div`
  width: 100vw;
`

storiesOf('ClientRow', module)
  .add(
    'example',
    withNotes(NOTES)(
      () => (
        <div>
          <ClientRow
            logo='https://placeimg.com/60/60/animals/sepia'
            stickyColumnWidth={stickyColumnWidth}
            columns={columns}
            cells={cells}
          >
            <FullWidthSpacer />
          </ClientRow>
        </div>
      )
    )
  )
