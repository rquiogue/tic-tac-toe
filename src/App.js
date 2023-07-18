import Board from "./components/Board";
import './App.css';
import NewGame from "./components/NewGame";
import { useEffect, useState } from "react";

const BLANK_BOARD = [
  '', '', '',
  '', '', '',
  '', '', '',
];

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
]


function App() {
  const [board, setBoard] = useState(JSON.parse(JSON.stringify(BLANK_BOARD)));
  const [whosTurn, setWhosTurn] = useState('X');
  const [winner, setWinner] = useState('');
  const [isGameDone, setIsGameDone] = useState(false);
  const [winnerText, setWinnerText] = useState('');

  useEffect(() => {
    checkWinner()
  }, [board]);

  function newGame(){
    setBoard(JSON.parse(JSON.stringify(BLANK_BOARD)));
    setWinner('');
    setIsGameDone(false);
    setWinnerText('');
  }

  function updateBox(index){
    if (board[index] !== '' || isGameDone){
      return;
    }

    setBoard((prevBoard) => {
      let newBoard = [...prevBoard];
      newBoard[index] = whosTurn;
      return newBoard;
    });

    if (whosTurn === 'X'){
      setWhosTurn('O');
    } else {
      setWhosTurn('X');
    }
  }

  function checkWinner(){
    console.log("Checking");

    for (const condition of winConditions){
      console.log(`${board[condition[0]]}, ${board[condition[1]]}, ${board[condition[2]]}`)
      if(board[condition[0]].length === 0 || board[condition[1]].length === 0 || board[condition[2]].length === 0){
        continue;
      }


      if (board[condition[0]] === board[condition[1]] && board[condition[1]] === board[condition[2]]){
        setWinnerText(`${board[condition[0]]} is the winner!`);
        setIsGameDone(true);
        return;
      }
    }

    for (const box of board){
      if(box === ''){
        return;
      }
    }

    setIsGameDone(true);
    setWinnerText("It's a tie");
  }



  return (
    <div className="App">
      <div className="card">
        <NewGame newGameFunc={newGame}/>
        <div className="display-winner">{winnerText}</div>
        <h2 className="turn">{whosTurn}'s turn</h2>
        <Board board_arr={board} box_updater={updateBox} winChecker={checkWinner}/>
      </div>
    </div>
  );
}

export default App;

