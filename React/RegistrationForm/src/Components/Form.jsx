import React from 'react'
import { useState } from 'react'
import Dropdown from './Dropdown';
import Input from './Input';
import Checkbox from './Checkbox';
import Submit from './Submit';
import Email from './Email';
import { useForm } from 'react-hook-form';

function Form({action}) {
    const {
        register,
        handleSubmit,
        watch,
        formState:{ errors ,isSubmitting},
        
    }= useForm();

    async function onSubmit(data){
    await new Promise((resolve)=>setTimeout(resolve,5000));
    }

  return (

    <>
    <div className='h-96 m-14'>
     <form action={action} id='registration'
     onSubmit={handleSubmit(onSubmit)}>
      <Input register={register} errors={errors} />
      <Dropdown/>
      <Checkbox/>
      <Email/>
      <Submit  isSubmitting={isSubmitting}/>

     </form>
     </div>
    </>
  )
}

export default Form