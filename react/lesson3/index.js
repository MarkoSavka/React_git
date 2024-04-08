// class ClickButton extends React.Component 
// { 
//     constructor(props){ 
//         super(props); 
//         this.state={counter:0}; 
//         this.press=this.press.bind(this); 
//     } 
//     press() 
//     { 
//         this.setState(incrementCounter) 
//     } 
//     incrementCounter(prevState,props) 
//     { 
//           return{ 
//             counter:prevState.counter+props.increment 
//           } 
//     } 
//     render() 
//     { 
//         return <div> 
//             <button onClick={this.press}>Click</button> 
//             <div>Counter:{this.state.counter} </div> 
//         </div> 
//     } 
// } 
 
// ReactDOM.createRoot( 
//     document.getElementById('app') 
// ).render(<ClickButton increment={1}/>)



//--------------------
//описуємо це як функція+хук useState()
//у функціональних компонентах(функції) можна працювати через хуки
//в класах не можна
// function ClickButton(props)
// {
//     const[count,setCount]=React.useState(0); //useState повертає масив який склад з 2 елементів

//     const press = function()
//     {
//         setCount(count+props.increment);
//     }

//     return(
//         <div>
//             <button onClick={press}>Click</button>
//             <div>Counter:{count}</div>
//         </div>
//     )
// }

// ReactDOM.createRoot( 
//     document.getElementById('app') 
// ).render(<ClickButton increment={1}/>)



//------------------------
//розбиваємо компоненти у різні файли(тут неробочо,перейти на lesson3_2)
import { ClickButton } from "./clickButton";
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


// ReactDOM.createRoot( 
//     document.getElementById('app') 
// ).render(<ClickButton increment={1}/>)

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
   <ClickButton increment={1}/>
  </React.StrictMode>
);

reportWebVitals();