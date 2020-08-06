export const ADD_COUNT = 'ADD_COUNT'
export const REMOVE_COUNT = 'REMOVE_COUNT'

export interface CountActionType {
  type: typeof ADD_COUNT | typeof REMOVE_COUNT | ''
}

export type CountState = number
