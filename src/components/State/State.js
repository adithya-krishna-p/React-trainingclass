import React, { useState } from 'react'

const State = () => {
    const [name,setName] = useState();
  return (
    <>
        <div>
            <h1>State handling - {name}</h1>
            <button onClick={()=>setName("any value")}>submit</button>
        </div>
    </>
  )
}

export default State;