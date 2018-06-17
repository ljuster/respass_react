/* istanbul ignore file */
import React from 'react'
import { storiesOf } from '@storybook/react'
import DemoContainer from 'storybook-utils/DemoContainer'
import Checkbox from './Checkbox'
import { withToggle } from 'src/utils'

import NOTES from './README.md'
import { withNotes } from '@storybook/addon-notes'

const CheckboxPresenter = withToggle(Checkbox)
storiesOf('Checkbox', module)
  // decorator wraps all the stories in component with some margins
  .addDecorator(story => <DemoContainer>{story()}</DemoContainer>)
  .add(
    'component',
    withNotes(NOTES)(
      () => (<CheckboxPresenter />)
    )
  )
