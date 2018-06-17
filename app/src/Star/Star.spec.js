import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import Star from './Star'

test('Star component', (assert) => {
  const wrapper = shallow(<Star />)
  const wrapperToggled = shallow(<Star toggledOn />)
  const wrapperUntoggled = shallow(<Star toggledOn={false} />)

  assert.equal(
    wrapper.find('StyledStarContainer').exists(),
    true,
    'Star renders'
  )
  assert.equal(
    wrapperToggled.find('StyledStar').prop('toggledOn'),
    true,
    'toggledOn prop should be true'
  )
  assert.equal(
    wrapperUntoggled.find('StyledStar').prop('toggledOn'),
    false,
    'toggledOn prop should be false'
  )
  assert.end()
})
