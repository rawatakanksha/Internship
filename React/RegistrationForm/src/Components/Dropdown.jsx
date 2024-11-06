import React, { useState } from 'react'


function Dropdown() {
    const [selectOp, setSelectOp]=useState("option1")
    const handleDropDown=(e)=>{
       setSelectOp(e.target.value)
    }
  return (
    <>
    
    <div>
        <label htmlFor='drop'> <strong> Select an option: </strong> </label>
        <select id='drop' 
        value={selectOp} 
        onChange={handleDropDown}
        className='rounded-md translate-x-1 shadow-xl'>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    </div>
    </>
  )
}

export default Dropdown