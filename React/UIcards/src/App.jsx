import {useEffect, useState } from 'react'
import './App.css'
import Card from './Card'
import Home from './Components/Home'
import About from './Components/About'
import Dashbord from './Components/Dashbord'
import axios from 'axios'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage'

import NavBar from './Components/NavBar';
import SingleData from './Components/SingleData'
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<div>
        <NavBar/>
        <Home/>
       </div>,
       errorElement:<ErrorPage/>
       
    },
    {
      path:'/about',
      element:<div>
        <NavBar/>
        <About/>
      </div>,
      errorElement:<ErrorPage/>
    },
    {
      path:'/dashboard',
      element:<div>
        <NavBar/>
        <Dashbord/>
      </div>,
      errorElement:<ErrorPage/>
    },
    {
      path:'/data',
      element:<div>
        <NavBar/>
        <SingleData />
      </div>
    }
  ]
)
function App() {
  // const TodoList=()=>{
  //   const[todo,setTodo]=useState([]);
  
 
  // useEffect(()=>{
  //   // fetch("https://jsonplaceholder.typicode.com/todos")
  //   // .then((response)=>response.json())
  //   // .then((e)=> setTodo([e])
  //   // // .catch((error)=>console.log(error))
  //   // );

  //   axios("https://jsonplaceholder.typicode.com/todos")
  //   .then((response)=>{
  //     setTodo(response.data)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  // },[]);

 
     //   .then((e)=> setTodo([e])
      // .catch((error)=>console.log(error))
   

  
    return (
    <>
    <nav>
      <RouterProvider router={router}/>
    </nav>
    {/* <ul>
     {todo.map((todo)=>(
      <li key={todo.id}>
         {todo.userId}
        {todo.title}
     
      ({todo.completed?'Completed':'Pending'})
      
      
      </li>))}</ul>
     <Card />
     <Card/> */}
   
     
    </>
  )
}


export default App
