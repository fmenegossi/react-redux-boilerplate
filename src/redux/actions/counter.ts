import {
  ADD_COUNT,
  REMOVE_COUNT,
  CountActionType
} from '../types/counter'

export const addCount = (): CountActionType => ({ type: ADD_COUNT })
export const removeCount = (): CountActionType => ({ type: REMOVE_COUNT })
