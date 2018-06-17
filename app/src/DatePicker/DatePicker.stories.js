/* istanbul ignore file */
import React from 'react'
import { storiesOf } from '@storybook/react'
import DemoContainer from 'storybook-utils/DemoContainer'
import DatePicker from '.'

import NOTES from './README.md'
import { withNotes } from '@storybook/addon-notes'

storiesOf('DatePicker', module)
  // decorator wraps all the stories in component with some margins
  .addDecorator(story => <DemoContainer>{story()}</DemoContainer>)
  .add(
    'component',
    withNotes(NOTES)(
      () => (
        <div>
          <DatePicker />
        </div>
      )
    )
  )
