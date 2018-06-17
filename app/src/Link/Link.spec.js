import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import Link, { PRIMARY_LINK, SECONDARY_LINK, SMALL_LINK, MEDIUM_LINK, LARGE_LINK } from './Link'

test('Link component - options', (assert) => {
  const defaultLink = shallow(<Link />)
  assert.deepEqual(
    defaultLink.props(), {
      className: '',
      size: 'inherit',
      option: undefined
    },
    'default button have correct default props'
  )

  const primaryLink = shallow(<Link option={PRIMARY_LINK} />)
  assert.deepEqual(
    primaryLink.props(), {
      className: '',
      size: 'inherit',
      option: 'primary'
    },
    'primary button should have correct props'
  )

  const secondaryLink = shallow(<Link option={SECONDARY_LINK} />)
  assert.deepEqual(
    secondaryLink.props(), {
      className: '',
      size: 'inherit',
      option: 'secondary'
    },
    'secondary button should have correct props'
  )

  assert.end()
})

test('Link component - size', (assert) => {
  const smallLink = shallow(<Link size={SMALL_LINK} />)
  assert.deepEqual(
    smallLink.props(), {
      className: '',
      size: 'small',
      option: undefined
    },
    'small button should have correct props'
  )

  const mediumLink = shallow(<Link size={MEDIUM_LINK} />)
  assert.deepEqual(
    mediumLink.props(), {
      className: '',
      size: 'medium',
      option: undefined
    },
    'medium button should have correct props'
  )

  const largeLink = shallow(<Link size={LARGE_LINK} />)
  assert.deepEqual(
    largeLink.props(), {
      className: '',
      size: 'large',
      option: undefined
    },
    'large button should have correct props'
  )

  assert.end()
})

test('Link component - modifiers', (assert) => {
  const activeLink = shallow(<Link active />)
  assert.deepEqual(
    activeLink.props(), {
      className: 'active',
      size: 'inherit',
      option: undefined
    },
    'active button should have correct props'
  )

  assert.end()
})
