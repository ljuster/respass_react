/* istanbul ignore file */
import React from 'react'
import { storiesOf } from '@storybook/react'
import NOTES from './README.md'
import { withNotes } from '@storybook/addon-notes'
import styled from 'react-emotion'

import { ColumnHeaders } from 'src/ColumnHeaders'
import columns from 'src/Table/data-columns'

const StoryContainer = styled.div`
  height: 100vh;
  overflow-x: scroll;
`

storiesOf('ColumnHeaders', module)
  .add(
    'Basic Column Headers',
    withNotes(NOTES)(
      () => (
        <StoryContainer>
          <ColumnHeaders columns={columns} stickyWidth={columns.get(0).get('sticky') && columns.get(0).get('minWidth')} />
        </StoryContainer>
      )
    )
  )
