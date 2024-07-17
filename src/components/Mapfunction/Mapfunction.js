import React from 'react'
const Mapfunction = () => {
    const data = ['item1','item2', 'item3', 'item4']
  return (
    <>
    <div className='App'>
        <ul>
            {
                data.map((value)=>(
                    <li>{value}</li>
                ))
            }
        </ul>

    </div>

    </>
  )
}

export default Mapfunction;