import React from 'react'
import { storiesOf } from '@storybook/react'
// For components that are connected.
// In general though your stories should use the presentational component only, however the `Header`
// uses the `Link` component from `redux-little-router` which is connected.
import Provider from 'storybook-utils/Provider'

import Header from './Header'

import NOTES from './README.md'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Header', module)
  // decorator to wrap the story in a `Provider`
  .addDecorator(story => <Provider story={story()} />)
  .add(
    'Basic',
    withNotes(NOTES)(
      () => (
        <Header />
      )
    )
  )
