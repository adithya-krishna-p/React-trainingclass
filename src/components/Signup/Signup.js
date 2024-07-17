import React from 'react'
import './Signup.css'
import { useState } from 'react'

const Signup = () => {
   const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
   })

   const handleInputChange =  (e)=> {
    const {name,value} = e.target
    setFormData((prevData)=>({...prevData,[name]: value}))
   }

   const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formData,"input data");
   }
  return (
    <>
        <div className='signup-container'>
        <div className='signup-card'>
         <h1>Registration form</h1>
         <form  onSubmit={handlesubmit}>
            <label htmlFor=''>Firstname</label>
            <input type='text' placeholder='firstname' name='firstname' value={formData.firstname} onChange={(e)=>handleInputChange(e)}></input>
            <label>Lastname</label>
            <input type='text' placeholder='lastname' name='lastname' value={formData.lastname} onChange={(e)=>handleInputChange(e)}></input>
            <label>Email</label>
            <input type='email' placeholder='email' name='email' value={formData.email} onChange={(e)=>handleInputChange(e)}></input>
            <label>Password</label>
            <input type='number' placeholder='password' name='password' value={formData.password} onChange={(e)=>handleInputChange(e)}></input>
            <button type='submit'>Sign in</button>
         </form>

        </div>
        </div>
    </>
  )
}

export default Signup;