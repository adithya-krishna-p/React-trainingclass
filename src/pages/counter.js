import React from "react";
import { useState } from "react";
const Counter = () => {
    const [count, setcount] = useState(0);

    const handleIncrement = () => {
        setcount(count + 1);
    };

    const handleDecrement = () => {
        setcount(count - 1);
    };

    const handleReset = () => {
        setcount(0);
    };

    return (
        <div>
            <h1>Counter App</h1>

            <p>{count}</p>

            <button style={{height:40,width:100,border:50,backgroundColor:"white" }} onClick={handleIncrement}>increment</button>

            <button style={{height:40,width:100,backgroundColor:"red" }} onClick={handleDecrement}>Decrement</button>

            <br></br>

            <button style={{height:40,width:100,backgroundColor:"red" }} onClick={handleReset}>Reset</button>
        </div>
    )
};

export default Counter;