import './BoardBox.css';

const BoardBox = ({children, index, clickHandler, winChecker}) => {



  return (
    <button className='board-box' onClick={() => 
      clickHandler(index)
    } style={children === 'X' ? {color: "red"} : {color: "blue"} }><strong>{children}</strong></button>
  )
}

export default BoardBox