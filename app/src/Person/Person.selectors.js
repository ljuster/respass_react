/**
 * THIS IS FOR EXAMPLE PURPOSES ONLY
 */
import { createSelector } from 'reselect'

export const getPerson = state => state.getIn(['entities', 'people', 'data'])

export const getPeopleSelector = createSelector(
  getPerson,
  person => person
)
