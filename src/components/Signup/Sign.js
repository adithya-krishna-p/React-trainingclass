import React from 'react'

const Sign = () => {
    const isLoggedIn = true;
  return (
   <>
{
    isLoggedIn? <h1>user is login </h1> : <h1>user is not Login </h1>
}
   </>
  )
}

export default Sign