import React, { useState } from 'react'

function Checkbox() {
    const [isChecked, setIsChecked]=useState(false)
    const handleCheck=(e)=>{
        setIsChecked(e.target.checked)
    }
  return (
    <>
    <br></br>
    <label htmlFor='color'>
        <input type='checkbox' name='color' checked={isChecked} onChange={handleCheck}/>
        
      <strong> Blue</strong> 
        
    </label>
    <br></br>
    <label htmlFor='color'>
        <input type='checkbox' name='color' checked={isChecked} onChange={handleCheck}/>
        
      <strong> yellow</strong> 
        
    </label>
    {isChecked && <div>Blue is selected!</div>}
    </>
  )
}

export default Checkbox