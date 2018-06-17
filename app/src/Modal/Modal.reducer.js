import { Map } from 'immutable'
import {
  OPEN_MODAL,
  CLOSE_MODALS
} from './Modal.actions'

const modalsReducer = (state = Map({}), action) => {
  const { type, payload } = action
  switch (type) {
    case OPEN_MODAL:
      return state.map(() => false).merge(Map({ [payload.id]: true }))
    case CLOSE_MODALS:
      return state.map(() => false)
    default:
      return state
  }
}

export default modalsReducer
