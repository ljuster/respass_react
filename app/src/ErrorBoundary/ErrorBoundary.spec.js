import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import ErrorBoundary from './ErrorBoundary'

test('ErrorBoundary component - renders children', (assert) => {
  const wrapper = shallow(
    <ErrorBoundary>
      <div>Some Children</div>
    </ErrorBoundary>
  )
  assert.deepEqual(
    wrapper.prop('children'),
    'Some Children',
    'the `children` prop should match'
  )
  assert.end()
})

test('ErrorBoundary component - can set error state for `error` and `errorInfo`', (assert) => {
  const wrapper = shallow(<ErrorBoundary />)
  wrapper.setState({
    error: 'error name',
    errorInfo: 'error info'
  })
  assert.deepEqual(
    wrapper.state().error,
    'error name',
    'the `error` state value should match'
  )
  assert.deepEqual(
    wrapper.state().errorInfo,
    'error info',
    'the `errorInfo` state value should match'
  )

  assert.end()
})

test('ErrorBoundary component - should display `<DefaultErrorMessage />`', (assert) => {
  const wrapper = shallow(<ErrorBoundary />)
  wrapper.setState({
    error: 'error name',
    errorInfo: 'error info'
  })
  assert.ok(wrapper.find('DefaultErrorMessage').length, 'Should use default error component when no render prop is used.')
  assert.equal(wrapper.debug(), '<DefaultErrorMessage />', 'does render `<DefaultErrorMessage />`')

  assert.end()
})

test('ErrorBoundary component - should not display `<DefaultErrorMessage />`', (assert) => {
  const wrapper = shallow(<ErrorBoundary render={() => <div>Ooops</div>} />)
  wrapper.setState({
    error: 'error name',
    errorInfo: 'error info'
  })
  assert.notok(wrapper.find('DefaultErrorComponent').length, 'Should NOT use default error component when the render prop is used.')
  assert.equal(wrapper.debug(), '<div>\n  Ooops\n</div>', 'does render `<div>Ooops</div>`')

  assert.end()
})
