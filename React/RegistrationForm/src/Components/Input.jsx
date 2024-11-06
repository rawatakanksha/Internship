import React, { useState } from 'react'

function Input({register,errors}) {

    const [inputValue,setInputValue]=useState('')

    const handleChange=(e)=>{

        
        
      setInputValue(e.target.value);
    }
  return (
   <>
   <div>
    <label htmlFor='textInput' ><strong>Input Value:</strong>  </label>
      <input type="text" 
      {...register('input',
        {required: true,
        minLength:{value:3, message:"min len atleast 3"},
        maxLength:{value:20, message:"max len 20"},
        pattern:{ value:/^[A-Za-z]+$/i, message:"input name should be alphabets"}
    })}
      id='textInput' 
      name='input' 
      value={inputValue}
      placeholder='  Input Field'
       onChange={handleChange}
       className='border translate-x-1 rounded-lg shadow-lg placeholder:opacity-60'/>
       {errors.input && <p className='text-lg text-red-800'>{errors.input.message}</p>}
       <br></br>
       <br></br>
      <p><strong>Input Value:</strong> {inputValue}</p>
      <br>
      </br>
      <br></br>
      </div>
   </>
  )
}

export default Input