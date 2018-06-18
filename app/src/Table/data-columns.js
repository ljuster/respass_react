import { fromJS } from 'immutable'
import { stickyColumnWidth } from 'theme'

export default fromJS([
  {
    name: 'Name',
    id: 'name',
    minWidth: `${stickyColumnWidth}px`,
    sticky: true
  },
  {
    name: 'Location',
    id: 'location',
    minWidth: '80px',
    sticky: false
  },
  {
    name: 'Status',
    id: 'status',
    minWidth: '100px',
    sticky: false
  },
  {
    name: `Spend So Far
    Net Budget`,
    id: 'spendSoFar',
    minWidth: '125px',
    sticky: false
  },
  {
    name: 'Spend Per Day',
    id: 'spendPerDay',
    minWidth: '125px',
    sticky: false
  },
  {
    name: 'Pacing',
    id: 'pacing',
    minWidth: '180px',
    sticky: false
  },
  {
    name: 'Start',
    id: 'startDate',
    minWidth: '90px',
    sticky: false
  },
  {
    name: 'End',
    id: 'endDate',
    minWidth: '90px',
    sticky: false
  },
  {
    name: 'Net Budget',
    id: 'netBudget',
    minWidth: '100px',
    sticky: false
  },
  {
    name: 'Fee',
    id: 'fee',
    minWidth: '50px',
    sticky: false
  },
  {
    name: 'Gross Budget',
    id: 'grossBudget',
    minWidth: '100px',
    sticky: false
  },
  {
    name: 'Notes',
    id: 'notes',
    minWidth: '250px',
    sticky: false
  }
])
