import React from 'react'
import './NewGame.css'

const NewGame = ({newGameFunc}) => {
  return (
    <button className='btn' onClick={newGameFunc}>New Game</button>
  )
}

export default NewGame