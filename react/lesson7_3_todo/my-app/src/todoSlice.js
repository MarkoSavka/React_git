import {createSlice} from '@reduxjs/toolkit'

const initialState={
    todos:[]
};

const todoSlice=createSlice({ //створюємо зріз
    name:"todos",
    initialState,
    reducers:{
        addTodo(state,action){
            //state.todos.push(action.payload)

            //ускладнена версія з id
            const newTodo={
                id:new Date(),
                name:action.payload.todo,
            };
            state.todos.push(newTodo);
        },
        deleteTodo(state,action){
            return state.filter((item)=>item.id!==action.payload.id);
        }
    }
})

export const {addTodo,deleteTodo} =todoSlice.actions;
export default todoSlice.reducer;