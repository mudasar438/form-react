import logo from './logo.svg';
// import './App.css';
import {useForm} from 'react-hook-form'
import Form2 from './Component/form2';
import Form3 from './Component/Form3';
import Form4 from './Component/form4';
import Practice from './Component/Practice';
import './Component/Style1.css'

function App() {
  const {register, handleSubmit, formState:{errors} } = useForm()
  const mydata= data=>(console.log(data))

  
  return (
    <div className="App">
      <Practice />

      
      
      
      
      
      
      
      
      
      {/* <Form4 /> */}
{/* <Form3></Form3> */}
      {/* <Form2 /> */}
     








    {/* <form onSubmit={handleSubmit (mydata)}>
      <input type="text" defaultValue="Test"{...register("firstName")}/>
      <input type="text" {...register("lastName", {required : "true"})}/>
      {errors.lastName && <span>Please Fill Second Field</span>}
     <input type="submit" />
    </form> */}
    </div>
  );
}

export default App;
