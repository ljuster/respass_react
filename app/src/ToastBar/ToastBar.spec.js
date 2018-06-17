import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import ToastBar from './ToastBar'

test('ToastBar component', (assert) => {
  const wrapper = shallow(
    <ToastBar minHeight='50px' isOpen>
      <div>Hello</div>
    </ToastBar>
  )

  assert.equal(wrapper.exists(), true, 'renders ToastBar')
  assert.equal(wrapper.prop('minHeight'), '50px', 'ToastBar has proper minHeight prop')
  assert.equal(wrapper.prop('isOpen'), true, 'ToastBar has proper isOpen prop')
  assert.equal(wrapper.prop('children').type, 'div', 'ToastBar renders child element')
  assert.equal(wrapper.prop('children').props.children, 'Hello', 'ToastBar renders child element inner html')
  assert.end()
})
