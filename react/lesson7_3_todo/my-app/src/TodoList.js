import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList=()=>{
    const todo=useSelector((state)=>{
        return state.todo;
    });
    
    return(
        <ul>
            {todo.map((todoo)=>(
                <TodoItem key={todoo.id} id={todoo.id} title={todoo.nane}/>
            ))}
        </ul>
    )
}

export default TodoList

