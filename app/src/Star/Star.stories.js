/* istanbul ignore file */
import React from 'react'
import { storiesOf } from '@storybook/react'
import DemoContainer from 'storybook-utils/DemoContainer'
import Star from './Star'
import { withToggle } from 'src/utils'
// import { withStateHandlers } from 'recompose'

import NOTES from './README.md'
import { withNotes } from '@storybook/addon-notes'

const StarPresenter = withToggle(Star)
storiesOf('Star', module)
  // decorator wraps all the stories in component with some margins
  .addDecorator(story => <DemoContainer>{story()}</DemoContainer>)
  .add(
    'component',
    withNotes(NOTES)(
      () => (<StarPresenter />)
    )
  )
