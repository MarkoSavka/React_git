import React from "react";
import {useSelector} from "react-redux"


function CounterDisplay(){
    //навести хук на конкретну змінну
    const count=useSelector(state=>state.counter.value); //має слідкувати за цим стейтом(counter-імʼя зрізу)
    // цей хук отримуватиме доступ до цього сховища
    //дозволяє вам вибрати дані зі стану Redux. Він приймає функцію-селектор, яка визначає, які дані вибрати.

    return(
        <div>
            <h1>Counter: {count}</h1>
        </div>
    )
}
export default CounterDisplay