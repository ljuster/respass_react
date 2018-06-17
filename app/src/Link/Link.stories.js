/* istanbul ignore file */
import React from 'react'
import { ImmutableLink } from 'redux-little-router/es/immutable'
import { storiesOf } from '@storybook/react'
import Provider from 'storybook-utils/Provider'
import DemoContainer from 'storybook-utils/DemoContainer'
import Link, { PRIMARY_LINK, SECONDARY_LINK, SMALL_LINK, LARGE_LINK } from './Link'
import styled from 'react-emotion'

import NOTES from './README.md'
import { withNotes } from '@storybook/addon-notes'

const Item = styled.div`
  margin: 25px 10px;
`

storiesOf('Link', module)
  // decorator wraps all the stories in component with some margins
  .addDecorator(story => <DemoContainer>{story()}</DemoContainer>)
  .add(
    'options',
    withNotes(NOTES)(
      () => (
        <div>
          <Item>
            <Link>Default Option</Link>
          </Item>

          <Item>
            <Link option={PRIMARY_LINK}>Primary Option</Link>
          </Item>

          <Item>
            <Link option={SECONDARY_LINK}>Secondary Option</Link>
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
            <Link option={PRIMARY_LINK} size={SMALL_LINK}>Small Size</Link>
          </Item>

          <Item>
            <Link option={PRIMARY_LINK}>Medium Size (default)</Link>
          </Item>

          <Item>
            <Link option={PRIMARY_LINK} size={LARGE_LINK}>Large Size</Link>
          </Item>
        </div>
      )
    )
  )

  .add(
    'link with onClick',
    withNotes(NOTES)(
      () => (
        <div>
          <Item>
            <Link onClick={() => console.log('Hello')}>I execute a function on click!</Link>
          </Item>

          <Item>
            <Link onClick={() => console.log('Hello')} option={PRIMARY_LINK}>I do too!</Link>
          </Item>

          <Item>
            <Link onClick={() => console.log('Hello')} option={SECONDARY_LINK}>Yup, me too.</Link>
          </Item>
        </div>
      )
    )
  )

  // decorator to wrap the story in a `Provider`
  .addDecorator(story => <Provider story={story()} />)
  .add(
    'link using ImmutableLink from RLR',
    withNotes(NOTES)(
      () => (
        <div>
          <Item>
            <Link component={ImmutableLink} href='/foo'>I'm actually an ImmutableLink component!</Link>
          </Item>

          <Item>
            <Link component={ImmutableLink} href='/foo' option={PRIMARY_LINK}>I am too!</Link>
          </Item>

          <Item>
            <Link component={ImmutableLink} href='/foo' option={SECONDARY_LINK}>Yup, me too.</Link>
          </Item>
        </div>
      )
    )
  )
