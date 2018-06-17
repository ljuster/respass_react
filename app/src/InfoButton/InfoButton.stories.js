/* istanbul ignore file */
import React from 'react'
import { storiesOf } from '@storybook/react'
import DemoContainer from 'storybook-utils/DemoContainer'
import InfoButton from './InfoButton'
import styled from 'react-emotion'

import NOTES from './README.md'
import { withNotes } from '@storybook/addon-notes'

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: -webkit-fill-available;
`

storiesOf('InfoButton', module)
  // decorator wraps all the stories in component with some margins
  .addDecorator(story => <DemoContainer>{story()}</DemoContainer>)
  .add(
    'component',
    withNotes(NOTES)(
      () => (
        <Item>
          <InfoButton message={'This is an InfoButton Tooltip 👹 '} />
        </Item>
      )
    )
  )
