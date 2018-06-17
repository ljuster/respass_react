import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import DatePicker from 'src/DatePicker'

test('DatePicker component', (assert) => {
  const wrapper = shallow(<DatePicker />)

  assert.equal(wrapper.exists(), true, 'does not break')
  assert.equal(wrapper.prop('closeOnSelect'), true, 'closeOnSelect uses defaultProp value true')
  assert.equal(wrapper.prop('viewMode'), 'days', 'viewMode uses defaultProp value "days"')
  assert.equal(wrapper.prop('timeFormat'), false, 'timeFormat uses defaultProp of false')
  assert.end()
})
