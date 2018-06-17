/**
 * THIS IS FOR EXAMPLE PURPOSES ONLY
 */
/**
 * An example of a slightly modified duck pattern for components.
 */
import reducer from './Counter.reducer'
import * as _actions from './Counter.actions'
// import * as _selectors from './Counter.selectors'

export Counter from './Counter'
export const actions = _actions
// export const selectors = _selectors

export default reducer
