import { fromJS } from 'immutable'
import * as cells from 'src/TableCells'

export default fromJS({
  name: cells.TextCell,
  platform: cells.TextCell,
  status: cells.TextCell,
  spendSoFar: cells.TextCell,
  spendPerDay: cells.TextCell,
  pacing: cells.TextCell,
  startDate: cells.TextCell,
  endDate: cells.TextCell,
  netBudget: cells.TextCell,
  fee: cells.TextCell,
  grossBudget: cells.TextCell,
  notes: cells.TextCell
})
