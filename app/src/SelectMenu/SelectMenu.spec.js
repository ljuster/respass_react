import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import SelectMenu from './SelectMenu'
import Select from 'react-select'

test('SelectMenu component', (assert) => {
  const wrapper = shallow(<SelectMenu />)

  assert.equal(wrapper.exists(), true, 'does not break')
  assert.equal(wrapper.find(Select).exists(), true, 'renders Select child component')
  assert.equal(wrapper.find(Select).prop('clearable'), false, 'clearable prop value should be false')
  assert.equal(
    wrapper.find(Select).prop('arrowRenderer').displayName,
    'withProps(Arrow)',
    'arrowRenderer prop value should be withProps(Arrow) component'
  )
  assert.end()
})
