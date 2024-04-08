
import React,{useState} from "react"

function ClickButton(props)
{
    const[count,setCount]=useState(0); //useState повертає масив який склад з 2 елементів

    const press = function()
    {
        setCount(count+props.increment);
    }

    return(
        <div>
            <button onClick={press}>Click</button>
            <div>Counter:{count}</div>
        </div>
    )
}

export default ClickButton;
