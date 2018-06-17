import { createSelector } from 'reselect'

export const isModalOpen = (state, { modalId }) => state.getIn(['modals', modalId])
export const isModalOpenSelector = createSelector(
  isModalOpen,
  open => open
)
