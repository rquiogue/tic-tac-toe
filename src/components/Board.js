import React from 'react'
import BoardBox from './BoardBox'
import './Board.css'

const Board = ({board_arr, box_updater, winChecker}) => {

  return (
    <div className='board'>
      {board_arr.map( (box, index) => 
        <BoardBox key={index} index={index} clickHandler={box_updater}>{box}</BoardBox>
      )}
    </div>
  )
}

export default Board