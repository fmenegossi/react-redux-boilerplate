import React from 'react'

interface ButtonProps {
  onClickEvent: (e: React.MouseEvent) => void
}

const Button: React.FC<ButtonProps> = ({ onClickEvent, children }) => {
  return (
    <button onClick={onClickEvent}> { children } </button>
  )
}

export default Button
