import { useEffect, useState } from 'react'
import './index.css'
import './App.css'
import AddValue from './AddValue';
import DecValue from './DecValue';
import Display from './Diplay';
// useEffect

function App() {
const [counter,setCounter]=useState(0);
const[iD, setiD]=useState("")
// const [x,setX]=useState(0);
// const [y,setY]=useState(0);


useEffect(()=>{
  // if(x){
  //    setCounter(counter+1)
  //    setX(0)
  // }
  // else if(y){
  //   setCounter(counter-1)
  //   setY(0)
  // }
  
  if(iD==="add"){
    setCounter(counter+1)

  }
  else if(iD==="dec"){
    setCounter(counter-1)
  }

 
},[counter]);
function buttonClicked(id){
  console.log(id)
  setiD(id);
}

// function addValue(){
//     setX(1)
// }

// function decValue(){
//   setY(1)
// }

  return (
    <>   
       <Display counter={counter}/>
       <AddValue onShow={buttonClicked} counter={counter} id="add"/>
       <DecValue onShow={buttonClicked} counter={counter} id="dec"/>
      
    </>
  )
}

export default App
