// import React from "react";
// import { useSelector } from "react-redux"; //ми просто маємо прочитати тому юзселектор,а не діспатч
// function TextDisplay(){
//     const text=useSelector((state)=>state.text.text); //1 текст-імʼя зрізу
//     return(
//         <div>
//             {text}
//         </div>
//     )
// }

// export default TextDisplay

import React from "react"; 
import { useSelector } from "react-redux"; 
function TextDisplay() { 
  const text = useSelector((state) => state.text.text); 
  return <div>{text}</div>; 
}

export default TextDisplay
