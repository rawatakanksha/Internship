import React from 'react'
import { useState } from "react"
import './index.css'
import './App.css'

export default function AddValue({onShow,counter,id}){
   
    return(
        <>
        <button id={id} onClick={()=>onShow(id)} className='  hover:bg-slate-600 hover:text-white shadow-md shadow-black transition ease-in-out delay-150 hover:translate-y-1 duration-300'>Add value {counter}
        </button><br></br> <br></br> 
         </>
    )
}