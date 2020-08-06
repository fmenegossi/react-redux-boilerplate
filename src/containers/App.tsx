import React from 'react'
import Button from '../components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { addCount, removeCount } from '../redux/actions/counter'

interface RootState {
  counter: number
}

const App: React.FC = () => {
  const dispatch = useDispatch()

  const clickAdd = (event: React.MouseEvent): void => {
    event.preventDefault()
    dispatch(addCount())
  }

  const clickRemove = (event: React.MouseEvent): void => {
    event.preventDefault()
    dispatch(removeCount())
  }

  const count = useSelector((state: RootState) => state.counter)
  return (
    <>
      <p> React Redux Boilerplate! </p>
      <p> Current count is {count}</p>
      <Button onClickEvent={clickAdd}>Count up</Button>
      <Button onClickEvent={clickRemove}>Count Down</Button>
    </>
  )
}

export default App
