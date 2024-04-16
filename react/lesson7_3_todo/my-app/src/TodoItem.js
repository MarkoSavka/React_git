import { useDispatch } from "react-redux";
import { deleteTodo } from "./todoSlice";

const TodoItem=({id,title})=>{
    const dispatch=useDispatch();

    const removeTodo=()=>{
        dispatch(deleteTodo({id:id}));
    }

    
    return(
        <li>
            <div>{title}</div>
            <div>
                <button onClick={()=>removeTodo()}></button>
                </div>
        </li>
    )
}

export default TodoItem