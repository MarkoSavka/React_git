import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { useState } from "react";

const TodoAdd=()=>{
    const [value,setValue]=useState('');
    const dispatch=useDispatch(); //діспатч через який ми передаємо дані

    const onSubmit=(event)=>{
        event.preventDefault();
        if(value.trim().length===0){
            alert('Enter task before pressing button!')
            setValue('');
            return;
        }
        else{
            dispatch(addTodo({task:value}));
            setValue('');
        }
    }

    return(
        <div>
            <input value={value} onChange={(event)=>setValue(event.target.value)}/>
            <button onClick={onSubmit}>Save</button>
        </div>
    )
};

export default TodoAdd