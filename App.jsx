import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[board,setboard]=useState(Array(9).fill(null))
  const [isx,setisx]=useState(true)
  const[winner,setwinner]=useState(null)
  const indexno=(index)=>{
    if(board[index]!=null){
      return
    }
    console.log("Index no is: "+index)
    const newboard=[...board]
    newboard[index]=isx?"X":"0"
    setboard(newboard)
    setisx(!isx)
    const winneris=checkwinner(newboard)
    if(winneris){
      setwinner(newboard[winneris[0]])
    }
  }
  const btns=(index)=>{
    return(
      <button onClick={()=>{indexno(index)}} className='btn'>{board[index]}</button>
    )
  }
  const checkwinner=(newboard)=>{
    const combination=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ]
    for(let i=0;i<combination.length;i++){
      const [first,second,third]=combination[i]
      if(board[first] && board[first]===board[second] && board[second]===board[third]){
        return combination[i]
      }
    }
    return null
  }
  const handlereset=()=>{
    setboard(Array(9).fill(null))
    setwinner(null)
  }
  return (
    <>
    <div className='Container'>
      <div className='rows'>
        {btns(0)}
        {btns(1)}
        {btns(2)}
      </div>
      <div className='rows'>
        {btns(3)}
        {btns(4)}
        {btns(5)}
      </div>
      <div className='rows'>
        {btns(6)}
        {btns(7)}
        {btns(8)}
      </div>
    </div>
    {winner && <div className='Winner'>{winner} Won the Game</div>}
    <button onClick={handlereset} className='rst'>Reset</button>
    </>
    

  );
}

export default App;
