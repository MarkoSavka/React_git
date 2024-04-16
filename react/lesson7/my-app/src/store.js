import { configureStore } from "@reduxjs/toolkit"; //store
import counterReducer from "./redux"
const store=configureStore({ //configureStore-Вона автоматично об'єднує редюсори
    reducer:{
        counter:counterReducer
    }
})

export default store