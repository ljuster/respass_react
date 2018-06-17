import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import ClientHeadingCell from './ClientHeadingCell'

test('ClientHeadingCell component', (assert) => {
  const wrapperNoProps = shallow(<ClientHeadingCell />)
  assert.equal(wrapperNoProps.exists(), true, 'should not break without props')
  assert.equal(wrapperNoProps.find('CampaignCount').dive().text(), '0 Campaigns', 'should show expected count message when no count prop is defined')

  const wrapper = shallow(
    <ClientHeadingCell count={10} name={'Horse Badorties'} logo='https://i.ytimg.com/vi/oHg5SJYRHA0/hqdefault.jpg' />
  )
  assert.equal(wrapper.exists(), true, 'does not break')
  assert.equal(wrapper.find('Container').exists(), true, 'renders `Container`')
  assert.equal(wrapper.find('ClientLogo').exists(), true, 'renders `ClientLogo`')
  assert.equal(wrapper.find('ExpandArrow').exists(), true, 'renders `ExpandArrow`')
  assert.equal(wrapper.find('ClientTitle').exists(), true, 'renders `ClientTitle`')
  assert.equal(wrapper.find('CampaignCount').exists(), true, 'renders `CampaignCount`')

  assert.equal(wrapper.find('ClientTitle').dive().text(), 'Horse Badorties', 'should render title with name prop')
  assert.equal(wrapper.find('CampaignCount').dive().text(), '10 Total Campaigns', 'should show expected count message when count prop is defined')
  assert.end()
})
