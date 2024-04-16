// const initialState={
//     counter:1
// }
// export default function rootReducer(state=initialState,action){
//     switch (action.type) {
//         case 'ADD':
//             return {
//                 counter: state.counter + 1
//             }
//             break;
//         case 'SUB':
//             return {
//                 counter: state.counter - 1
//             }
//             break;
//             case 'ADD_NUMBER':
//                 return {
//                     counter: state.counter +action.payload
//                 }
//                 break;
//         default:
//             return state;
//     }
// }


import counter1 from "./reducers/counter1";
import counter2 from "./reducers/counter2";

import { combineReducers } from "redux";
export default combineReducers({counter1,counter2})