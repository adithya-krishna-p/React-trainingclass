import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

const Todo = () => {
    const [value, setvalue] = React.useState('');
    const [todo , setTodo] = React.useState([]);

    const getfieldvalue = (e) => {
        setvalue(e.target.value);

    };

    const handlesubmit = () => {
        setTodo([todo , value]);
    };

    console.log(todo);
    return (

        <div>
        <div className="table-one">
        <h1>Todo App</h1>
            <p>Write Todo</p>
            <input className="input" placeholder="write your Todo" onChange={getfieldvalue} value={value} ></input>
            <button onClick={handlesubmit}>Add</button>
            <FaDeleteLeft size={30}  />
        </div>

        <div className="table-two">

        <h1>Todo List</h1>
        {setvalue}

        <MdDeleteOutline size={50} />
        </div>
            

        </div>
      
    )

};

export default Todo;