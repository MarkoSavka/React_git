// import { configureStore } from "@reduxjs/toolkit";
// import textReducer from "./textSlice"

// export default configureStore({
//     text:textReducer
// })

import { configureStore } from "@reduxjs/toolkit"; 
import textReducer from "./textSlice"; 
export default configureStore({ 
  reducer: { 
    text: textReducer, 
  }, 
});