import React from "react";
import { useDispatch } from "react-redux";
import { increment,decrement } from "./redux";

function CounterButton(){
    const dispatch=useDispatch() //цей хук повідомляє про сховище. через нього ми взаємодіємо з сховищем
    //дозволяє вам відправляти дії до магазину Redux
    return(
        <div>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Increment</button>
        </div>
    )
 }
 export default CounterButton; 