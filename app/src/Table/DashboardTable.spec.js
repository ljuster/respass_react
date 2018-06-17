import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import DashboardTable from './DashboardTable'

// skipping for now until the component design settles
test.skip('DashboardTable component', (t) => {
  t.throws(() => shallow(<DashboardTable />), 'Should throw without `clients` prop')
  t.comment('No other tests yet for DahboardTable because this component isn\'t finished.')
  t.end()
})
