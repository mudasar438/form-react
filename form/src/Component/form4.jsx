import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Form4 = () => {
    const { register, handleSubmit,formState: { errors }  } = useForm();
    const [mydata, setMydata]=useState([])


    

    const  onSubmit = (data)=>{
        console.log(data)
       setMydata(data)
         
         }
    

  return (
    <div>

        <form  onSubmit={handleSubmit(onSubmit)}>
            <p>{errors.firstName && <span>This field is required</span>}</p>

            <input type="text"  placeholder='Enter Name' {...register("firstName", { required: true, maxLength: 10 ,minLength:3})}/>
            <p>{errors.age && <span>invalid pasword</span>}</p>
            
            <input type="text"  placeholder='Enter Age' {...register("age", {required:true,minLength:2,maxLength:5}, )}/>
            <input type="submit" />
        </form>
        <h1>
            {
                <h1>Name: {mydata.firstName} </h1>
               
               
            }
            { 
            <h1>Age: {mydata.age}</h1>
            }
        </h1>




    </div>
  )
}

export default Form4;
