import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'react-emotion'
import DemoContainer from 'storybook-utils/DemoContainer'
import FormDemo from './FormDemo'

import NOTES from './README.md'
import { withNotes } from '@storybook/addon-notes'
import {
  textSchema, textUiSchema
} from './all-the-things.schema'

const CenteredDemoContainer = styled(DemoContainer)`
  text-align: center;
`

storiesOf('Form Demo', module)
  .addDecorator(story => <CenteredDemoContainer>{story()}</CenteredDemoContainer>)
  .add(
    'Text Inputs',
    withNotes(NOTES)(
      () => (
        <FormDemo schema={textSchema} uiSchema={textUiSchema} />
      )
    )
  )
