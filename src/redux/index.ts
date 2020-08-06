import { combineReducers, Action } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'
import { ThunkAction } from 'redux-thunk'
import countReducer from './reducers/counter'

const rootReducer = (history: History): any => combineReducers({
  router: connectRouter(history),
  counter: countReducer
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, null, Action<string>>
