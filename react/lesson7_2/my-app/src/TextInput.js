// import React from "react";
// import {useDispatch} from "react-redux"
// import { setText } from "./textSlice"; //дія яку ми будемо виконувати

// function TextInput(){
//     const dispatch=useDispatch();

//     const handleChange=(e)=>{
//         dispatch(setText(e.target.value))
//     }

//     return(
//         <div>
//             <h2>Input text</h2>
//             <input onChange={handleChange}/>
//         </div>
//     )
// }

// export default TextInput


import React from "react"; 
import { useDispatch } from "react-redux"; 
import { setText } from "./textSlice"; 
function TextInput() { 
  const dispatch = useDispatch(); 
  const handleChange = (e) => { 
    dispatch(setText(e.target.value)); 
  }; 
 
  return ( 
    <div> 
      <h2>Input text</h2> 
      <input onChange={handleChange} /> 
    </div> 
  ); 
} 
export default TextInput;