import React from 'react'

import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
const Input = ({ label, register, required }) => (
    <>
      <label>{label}</label>
      <br />
      <input {...register(label, { required })} />
    </>
  );
  const Select = React.forwardRef(({ onChange, name, label }, ref) => (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange}>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  ));



const Form3 = () => {

    
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div> <form onSubmit={handleSubmit(onSubmit)}>
    <Input label="My Name " register={register} required />
    <Select label="Age" {...register("Age")} />
    <input type="submit" />
  </form></div>
  )
}

export default Form3









   
 


