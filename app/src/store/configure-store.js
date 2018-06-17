import Immutable, { fromJS } from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux-immutable'
import { initializeCurrentLocation } from 'redux-little-router'
import { immutableRouterForBrowser } from 'redux-little-router/es/immutable'
import createSagaMiddleware, { END } from 'redux-saga'
import * as reducers from 'src/reducers'
import routes from 'src/routes'
import customMiddleware from 'src/middleware'

const { reducer, enhancer, middleware } = immutableRouterForBrowser({ routes })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware({
  onError: error => {
    // Raven.captureException(error)
    console.error('Caught a saga error --> ', error)
  }
})

const enhancersComposed = composeEnhancers(
  enhancer,
  applyMiddleware(
    ...customMiddleware,
    sagaMiddleware,
    middleware
  )
)

const initialState = window.__INITIAL_STATE ? fromJS(window.__INITIAL_STATE) : Immutable.Map()

const configureStore = () => {
  const rootReducer = combineReducers({
    ...reducers,
    router: reducer
  })

  const store = createStore(rootReducer, initialState, enhancersComposed)

  store.initLocation = () => {
    const initialLocation = store.getState().get('router')
    if (initialLocation) store.dispatch(initializeCurrentLocation(initialLocation))
  }
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)

  return store
}

export default configureStore
