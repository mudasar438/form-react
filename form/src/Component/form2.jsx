import React from 'react'
import { useForm } from 'react-hook-form'

const Form2 = () => {
  const {register, handleSubmit, formState:{errors} } = useForm()
  const submit = data=>(console.log(data))
 
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder='firstName' {...register("FirstName", {required:"true",maxLength:10})}/>
            <input  placeholder='lastname'{...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <input type="number" placeholder='Enter Number' {...register("age", { min: 8, max: 11 })} />
            <input type="submit" />




        </form>



    </div>
  )
}

export default Form2