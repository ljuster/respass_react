import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import Checkbox from './Checkbox'

test('Checkbox component', (assert) => {
  const wrapper = shallow(<Checkbox />)
  const wrapperChecked = shallow(<Checkbox toggledOn />)
  const wrapperUnchecked = shallow(<Checkbox toggledOn={false} />)

  assert.equal(
    wrapper.find('StyledCheckboxContainer').exists(),
    true,
    'Checkbox renders'
  )
  assert.equal(
    wrapperChecked.children().find('StyledCheckMark').exists(),
    true,
    'should render StyledCheckMark styled component if toggledOn prop is true'
  )
  assert.equal(
    wrapperUnchecked.children().find('StyledCheckMark').exists(),
    false,
    'should not render StyledCheckMark styled component if toggledOn prop is false'
  )
  assert.end()
})
