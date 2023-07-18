import React from 'react'
import { useState } from 'react';

const DisplayWinner = ({winner}) => {
    const [text, setText] = useState("");

    if (winner === 'tie'){
        setText("It's a tie!");
    } else {
        setText(`${winner} is the winner!`);
    }

  return (
    <h1 className='winner'>
        {text}
    </h1>
  )
}

export default DisplayWinner