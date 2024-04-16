import {createSlice} from '@reduxjs/toolkit'
const initialState={
    text:""
};
const textSlice=createSlice({
    name:"text", //назва зрізу
    initialState, //початковий стан
    reducers:{
        setText(state,action){
            state.text=action.payload //записуємо новий текст
        }
    }
})
export const {setText} =textSlice.actions; //textSlice.actions для відправки дій до магазину
export default textSlice.reducer;