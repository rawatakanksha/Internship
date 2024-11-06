import React, {useEffect, useState} from 'react'
import Card from '../Card';


function Home() {
  const[todo,setTodo]=useState([]);
  
 
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response)=>response.json())
    .then((res)=>
      setTodo(res)
    )  },[]);
  return (
    <>
    <h1>card </h1>
     <ul className=" flex flex-wrap justify-items-center " style={{listStyle:"none"}}>
      {todo.map((item)=>(
        <Card  key={item.id}
        userId={item.id}
        title={item.title}
        completed={item.completed}></Card>
      ))}
    </ul>
    </>
   
  )
}

export default Home