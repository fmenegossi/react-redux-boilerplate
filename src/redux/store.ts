import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import ReduxThunk from 'redux-thunk'
import createRootReducer from '.'

let composeEnhancers

if (process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined') {
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
} else {
  composeEnhancers = compose
}

export const history = createBrowserHistory()

const enhancer = composeEnhancers(
  applyMiddleware(
    ReduxThunk,
    routerMiddleware(history)
  )
)

const store = createStore(
  createRootReducer(history),
  enhancer
)

export default store
