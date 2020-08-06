import {
  ADD_COUNT,
  REMOVE_COUNT,
  CountState,
  CountActionType
} from '../types/counter'

const defaultAction: CountActionType = { type: '' }
const defaultState: CountState = 0

const countReducer = (state = defaultState, action = defaultAction): CountState => {
  switch (action.type) {
    case ADD_COUNT:
      return state + 1
    case REMOVE_COUNT:
      return state - 1
    default:
      return state
  }
}

export default countReducer
