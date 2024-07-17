import React from 'react'
import './Signup.css'
import { useState } from 'react'

const Signup = () => {
   const [formData, setFormData] = useState({
    firstname: "",
   })
  return (
    <>
        <div className='signup-container'>
        <div className='signup-card'>
         <h1>Registration form</h1>
         <form>
            <label htmlFor=''>Firstname</label>
            <input type='text' placeholder='' name='firstname'></input>
            <label>Lastname</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Password</label>
            <input type='number'></input>
            <button>Sign in</button>
         </form>

        </div>
        </div>
    </>
  )
}

export default Signup;