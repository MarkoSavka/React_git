//1 спосіб ,класика-redux
const redux=require('redux');

const initialState={
    counter:0
}

//Actions //це є джава обʼєкт,де є обовʼязковим поле type
const addCounter={
    type:'ADD'
}
const subCounter={
    type:"SUB"
}



//Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                counter: state.counter + 1
            }
            break;
        case 'SUB':
            return {
                counter: state.counter - 1
            }
            break;
        case 'ADD_NUMBER':
            return {
                counter: state.counter + action.value
            }
        default:
            break;
    }
    return state;
}


//Store
const store=redux.createStore(reducer)

store.subscribe(()=>{
    console.log(`сховище оновлено:`,store.getState())
});

//store.dispatch(addCounter) //взаємодія через діспатч
//---
//store.dispatch(subCounter)
//---
store.dispatch({type:'ADD_NUMBER',value:10}) //після діспатчку воно повідомить subscribe
//---

//console.log(store.getState()); //для отримання стейту


//коли сховище оновиться-ти повідом
// store.subscribe(()=>{
//     console.log(`сховище оновлено:`,store.getState())
// });