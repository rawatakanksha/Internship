import React, { useState } from 'react'

function Email() {
    const [email,setEmail]=useState('')
    const handlMail=(e)=>{
        setEmail(e.target.value)
    }
  return (
    <>
    <br></br><br></br>
    <label htmlFor='email'><strong>Email: </strong></label>
    <input type='email' 
    id="email" 
    name="email" 
     value={email}
      onChange={handlMail}
      className='rounded-lg shadow-lg border translate-x-1'></input>
    </>
  )
}

export default Email