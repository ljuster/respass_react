import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import Tooltip from './Tooltip'

test('Tooltip component', (assert) => {
  const wrapper = shallow(<Tooltip />)
  const wrapperMessageWithChild = shallow(
    <Tooltip message='Hello!'>
      <p>Hi</p>
    </Tooltip>
  )

  assert.equal(wrapper.exists(), true, 'renders Tooltip')
  assert.equal(wrapper.children().find('StyledTooltip').exists(), true, 'renders StyledTooltip')
  assert.equal(wrapper.children().find('span').exists(), true, 'renders span wrapper')
  assert.equal(wrapper.children().find('StyledTooltip').prop('id'), 'tooltip-1', 'StyledTooltip has a unique id')
  assert.equal(
    wrapperMessageWithChild.children().find('StyledTooltip').prop('children'),
    'Hello!',
    'StyledTooltip renders message prop value'
  )
  assert.equal(
    wrapperMessageWithChild.children().find('span').prop('children').props.children,
    'Hi',
    'span wrapper renders children prop value'
  )
  assert.end()
})
