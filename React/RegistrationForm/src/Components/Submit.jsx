import React from 'react'
// import {useFormStatus} from "react-dom"

function Submit({ isSubmitting}) {
    // const {pending}=useFormStatus();
    

  return (
   <>
   <br></br>
   <br></br>
   <button type='submit'
   disabled={isSubmitting}
    className='w-20 border border-stone-900 rounded-md bg-white translate-x-1 shadow-lg'
    value={isSubmitting?"Submitting....":"Submit"}
    >
     
    Submit
   </button>
   </>
  )
}

export default Submit