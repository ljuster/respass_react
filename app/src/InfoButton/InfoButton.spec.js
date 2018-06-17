import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import InfoButton from './InfoButton'

test('InfoButton component', (assert) => {
  const wrapper = shallow(<InfoButton message='Hello!' />)

  assert.equal(wrapper.exists(), true, 'renders InfoButton')
  assert.equal(wrapper.find('Tooltip').exists(), true, 'renders Tooltip')
  assert.equal(wrapper.find('Tooltip').children().find('InfoIcon').exists(), true, 'renders InfoIcon')
  assert.equal(wrapper.find('Tooltip').prop('message'), 'Hello!', 'Tooltip has message prop')
  assert.end()
})
