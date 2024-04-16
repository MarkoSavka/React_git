import { createSlice } from "@reduxjs/toolkit";

//початковий state:
const initialState={value:0}
const counterSlice=createSlice({ //ф-ція яка опише редюсер,зріз
    name:'counter',
    initialState,
    reducers:{ //опишемо редюсери
        increment(state){
            state.value+=1;
            console.log(state.value)
        },
        decrement(state){
            state.value-=1;
        }
    }
})

export const{increment,decrement}=counterSlice.actions; //в нас є 2 екшини(інкремент і декремент)
export default counterSlice.reducer;
