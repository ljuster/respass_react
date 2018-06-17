/* istanbul ignore file */
import React from 'react'
import { storiesOf } from '@storybook/react'
import DemoContainer from 'storybook-utils/DemoContainer'
import SelectMenu from './SelectMenu'
import { withStateHandlers } from 'recompose'

import NOTES from './README.md'
import { withNotes } from '@storybook/addon-notes'

// SelectMenu state setup
const addSelectMenuState = withStateHandlers(
  () => ({
    selectedOption: '',
    options: [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
      { value: 'three', label: 'Three' },
      { value: 'four', label: 'Four' },
      { value: 'five', label: 'Five' }
    ]
  }),
  {
    handelOnChange: (props) => (value) => ({ selectedOption: value })
  }
)

const SelectMenuPresenter = addSelectMenuState(SelectMenu)

storiesOf('SelectMenu', module)
  // decorator wraps all the stories in component with some margins
  .addDecorator(story => <DemoContainer>{story()}</DemoContainer>)
  .add(
    'component',
    withNotes(NOTES)(
      () => (<SelectMenuPresenter maxWidth={'220px'} />)
    )
  )
