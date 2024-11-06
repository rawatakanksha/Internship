
import { useNavigate } from "react-router-dom";

import { useState } from "react";


export default function Card({userId,title,completed}){
   const [data,setData]=useState()
const navigate= useNavigate();

function onShow(e){
  const Data = { userId, title, completed };
  console.log("hello");
  navigate('/data' , { state: Data });
  console.log(data, setData)
 }

    
    return(
        <>
       
          <li className="flex flex-wrap">
      <div onClick={onShow} className=' w-96  my-3 mx-4  shadow-xl shadow-gray-400 rounded-lg pt-2 pl-2 hover:cursor-pointer'
     >
        <p><strong>User ID:</strong> {userId}</p>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Status:</strong> {completed ? "Completed" : "Pending"}</p>
      </div>     
     </li>
    
        </>
    )
}



 {/* <div className="bg-gray-600 p-52 m-8 rounded-xl shadow-lg shadow-black  w-9 h-8  justify-items-start align-top " > */}
            {/* <h1 className="text-2xl  ">Title</h1>
            <p className=" text-sm  h-32 w-72   ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe odio eligendi pariatur, possimus blanditiis quaerat aliquam, tempora accusamus quis repellendus harum, omnis accusantium molestias ullam. Ea aut fuga voluptatum?
            Nihil cum corrupti dolores non ipsum. Voluptatibus ratione maxime eligendi praesentium nisi sunt fugiat earum quibusdam ducimus libero, voluptatum suscipit ipsam autem animi obcaecati fuga voluptates exercitationem mollitia voluptate nam?
            </p> */}
     {/* <ul> */}
     {/* {todo.map((todo)=>(
      <li key={todo.id}>
         {todo.userId}
        {todo.title}
     
      ({todo.completed?'Completed':'Pending'})
      
      
      </li>))}*/}
       {/* <li>{props.userId}</li>
      <li>{props.title}</li>
      </ul> 

        </div>
        </> */}