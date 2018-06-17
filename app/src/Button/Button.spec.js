import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'
import Button, { PRIMARY_BUTTON, SECONDARY_BUTTON, SMALL_BUTTON, MEDIUM_BUTTON, LARGE_BUTTON } from './Button'

// OPTIONS
test('Button component - children', (assert) => {
  const buttonWithChildren = shallow(<Button>Ima Button</Button>)
  assert.deepEqual(
    buttonWithChildren.prop('children'),
    'Ima Button',
    'the `children` prop should match'
  )

  assert.equal(buttonWithChildren.dive().text(), 'Ima Button', 'child content should match')
  assert.end()
})

// OPTIONS
test('Button component - options', (assert) => {
  const defaultButton = shallow(<Button />)
  assert.deepEqual(
    defaultButton.props(), {
      className: '',
      size: 'medium',
      option: undefined,
      href: undefined
    },
    'default button have correct default props'
  )

  const primaryButton = shallow(<Button option={PRIMARY_BUTTON} />)
  assert.deepEqual(
    primaryButton.props(), {
      className: '',
      size: 'medium',
      option: 'primary',
      href: undefined
    },
    'primary button should have correct props'
  )

  const secondaryButton = shallow(<Button option={SECONDARY_BUTTON} />)
  assert.deepEqual(
    secondaryButton.props(), {
      className: '',
      size: 'medium',
      option: 'secondary',
      href: undefined
    },
    'secondary button should have correct props'
  )

  assert.end()
})

// SIZE
test('Button component - size', (assert) => {
  const smallButton = shallow(<Button size={SMALL_BUTTON} />)
  assert.deepEqual(
    smallButton.props(), {
      className: '',
      size: 'small',
      option: undefined,
      href: undefined
    },
    'small button should have correct props'
  )

  const mediumButton = shallow(<Button size={MEDIUM_BUTTON} />)
  assert.deepEqual(
    mediumButton.props(), {
      className: '',
      size: 'medium',
      option: undefined,
      href: undefined
    },
    'medium button should have correct props'
  )

  const largeButton = shallow(<Button size={LARGE_BUTTON} />)
  assert.deepEqual(
    largeButton.props(), {
      className: '',
      size: 'large',
      option: undefined,
      href: undefined
    },
    'large button should have correct props'
  )

  assert.end()
})

// MODIFIERS
test('Button component - modifiers', (assert) => {
  const activeButton = shallow(<Button active />)
  assert.deepEqual(
    activeButton.props(), {
      className: 'active',
      size: 'medium',
      option: undefined,
      href: undefined
    },
    'active button should have correct props'
  )

  assert.end()
})

test('Button as Link component', (assert) => {
  const linkButton = shallow(<Button href='/foo/test' />)
  assert.deepEqual(
    linkButton.prop('href'),
    '/foo/test',
    'active button should have correct props'
  )

  assert.equal(
    linkButton.find('StyledButtonLink').length,
    1,
    'should render using <StyledButtonLink />'
  )
  assert.end()
})
