/* istanbul ignore file */
import React from 'react'
import { ImmutableLink } from 'redux-little-router/es/immutable'
import { storiesOf } from '@storybook/react'
import Provider from 'storybook-utils/Provider'
import DemoContainer from 'storybook-utils/DemoContainer'
import Button, { PRIMARY_BUTTON, SECONDARY_BUTTON, SMALL_BUTTON, LARGE_BUTTON } from './Button'
import styled from 'react-emotion'

import NOTES from './README.md'
import { withNotes } from '@storybook/addon-notes'

const Item = styled.div`
  margin: 25px 10px;
`

storiesOf('Button', module)
  // decorator wraps all the stories in component with some margins
  .addDecorator(story => <DemoContainer>{story()}</DemoContainer>)
  .add(
    'options',
    withNotes(NOTES)(
      () => (
        <div>
          <Item>
            <Button>Default Option</Button>
          </Item>

          <Item>
            <Button option={PRIMARY_BUTTON}>Primary Option</Button>
          </Item>

          <Item>
            <Button option={SECONDARY_BUTTON}>Secondary Option</Button>
          </Item>
        </div>
      )
    )
  )

  .add(
    'size',
    withNotes(NOTES)(
      () => (
        <div>
          <Item>
            <Button option={PRIMARY_BUTTON} size={SMALL_BUTTON}>Small Size</Button>
          </Item>

          <Item>
            <Button option={PRIMARY_BUTTON}>Medium Size (default)</Button>
          </Item>

          <Item>
            <Button option={PRIMARY_BUTTON} size={LARGE_BUTTON}>Large Size</Button>
          </Item>
        </div>
      )
    )
  )

  .add(
    'button link',
    withNotes(NOTES)(
      () => (
        <div>
          <Item>
            <Button href='/foo'>I'm actually a Link component!</Button>
          </Item>

          <Item>
            <Button href='/foo' option={PRIMARY_BUTTON}>I'm a link too!</Button>
          </Item>

          <Item>
            <Button href='/foo' option={SECONDARY_BUTTON}>Yup, me too.</Button>
          </Item>
        </div>
      )
    )
  )
  // decorator to wrap the story in a `Provider`
  .addDecorator(story => <Provider story={story()} />)
  .add(
    'button using ImmutableLink from RLR',
    withNotes(NOTES)(
      () => (
        <div>
          <Item>
            <Button component={ImmutableLink} href='/foo'>I'm actually an ImmutableLink component!</Button>
          </Item>

          <Item>
            <Button component={ImmutableLink} href='/foo' option={PRIMARY_BUTTON}>I am too!</Button>
          </Item>

          <Item>
            <Button component={ImmutableLink} href='/foo' option={SECONDARY_BUTTON}>Yup, me too.</Button>
          </Item>
        </div>
      )
    )
  )
