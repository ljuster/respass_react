import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'
import { ColumnHeaders } from './ColumnHeaders'
import { HeaderCell } from 'src/TableCells'
import { stickyColumnWidth } from 'theme'

const columns = fromJS([
  {
    name: 'Name',
    id: 'name',
    minWidth: `${stickyColumnWidth}px`,
    sticky: true
  },
  {
    name: 'Platform',
    id: 'platform',
    minWidth: '80px',
    sticky: false
  }
])

test('ColumnHeaders component', (t) => {
  t.doesNotThrow(() => shallow(<ColumnHeaders />), 'Should NOT throw without props')

  const headersNoData = shallow(<ColumnHeaders />)
  t.equal(headersNoData.find(HeaderCell).length, 1, 'should render one cell when no columns data')

  const headersWithData = shallow(<ColumnHeaders columns={columns} stickyWidth='420px' />)
  t.equal(headersWithData.find(HeaderCell).length, 2, 'should render one cell for each column in columns data')

  t.end()
})
