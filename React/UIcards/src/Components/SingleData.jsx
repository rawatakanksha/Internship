import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function SingleData() {
     const location= useLocation();
     const { userId, title, completed } = location.state || {};
   
   

  return (
    <>
    <div>

   <p>User: {userId} </p> 
  <p>  Title: {title} </p>
  
    </div>
    </>
  )
}

export default SingleData