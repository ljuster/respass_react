import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import { ClientRow } from './ClientRow'
import columns from 'src/Table/data-columns'
import cells from 'src/Table/data-column-cells'

test('ClientRow component', (assert) => {
  const wrapperNoProps = shallow(<ClientRow />)
  assert.equal(wrapperNoProps.children().exists(), false, 'should render nothing without columns prop')

  const wrapper = shallow(<ClientRow columns={columns} cells={cells} />)
  assert.equal(wrapper.exists(), true, 'does not break')
  assert.equal(wrapper.find('ClientContainer').exists(), true, 'renders `ClientContainer`')
  assert.equal(wrapper.find('ClientHeadingCell').exists(), true, 'renders `ClientHeadingCell`')
  assert.equal(wrapper.find('FadeContainer').exists(), true, 'renders `FadeContainer`')
  assert.equal(wrapper.find('UnmountClosed').exists(), true, 'renders `UnmountClosed`')
  assert.equal(wrapper.find('UnmountClosed').prop('hasNestedCollapse'), true, 'should have collapsible component with nested flag set to `true`')
  assert.end()
})
