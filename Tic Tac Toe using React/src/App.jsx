import { useState } from "react";

function App() {
 const [board,setboardturn]=useState(Array(9).fill(null));
 const [turn,setturn]=useState("X");
 const [win,setwin]=useState(null);


 const checkWin = (board) => {
  const winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6], // Diagonal 2
  ];
 for (let i=0;i<winningCombinations.length;i++){
  const [a,b,c]=winningCombinations[i];
  if(board[a]!==null && board[a]===board[b] && board[b]===board[c]){
    setwin(board[a]);
  }
 }
  }
 const setboard=(i)=>{
  if (board[i] || win) return;
  board[i]=turn;
  setboardturn(board);
  setturn(turn=="X"?"O":"X");
  checkWin(board);
 }
  return (
    <div className="tic-tac-toe">
    <div className="playermove">
      {turn} Move
    </div>
      <div className="board-row">
        <button onClick={()=>setboard(0)} className="square">
          {board[0]}
        </button>
        <button onClick={()=>setboard(1)}  className="square"> {board[1]}</button>
        <button onClick={()=>setboard(2)}  className="square"> {board[2]}</button>
      </div>
      <div className="board-row">
        <button onClick={()=>setboard(3)}  className="square"> {board[3]}</button>
        <button onClick={()=>setboard(4)}  className="square"> {board[4]}</button>
        <button onClick={()=>setboard(5)}  className="square"> {board[5]}</button>
      </div>
      <div className="board-row">
        <button onClick={()=>setboard(6)}  className="square"> {board[6]}</button>
        <button onClick={()=>setboard(7)}  className="square"> {board[7]}</button>
        <button onClick={()=>setboard(8)}  className="square"> {board[8]}</button>
      </div>
      <div className="win">
        {win && `${win} wins`}
      </div>
    </div>
  );
}

export default App;
