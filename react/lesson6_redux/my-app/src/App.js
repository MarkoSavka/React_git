import { Component } from "react";
import { connect } from "react-redux";
import Counter from "./Counter";

function mapStateToProps(state) {
  console.log(state)
  return {
    counter: state.counter1.counter1
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({ type: 'ADD' }),
    onSub: () => dispatch({ type: 'SUB' }),
    onAddNumber:number=>dispatch({type:'ADD_NUMBER',payload:number})
  }
}

// class App extends Component{

// state={
//   counter:0
// }

// updateCounter(value){
//   this.setState({counter:this.state.counter+value});
// }

//   render()
//   {
//     return(
//     <div>
//       <h1>Counter: {this.state.counter}</h1>
//       <div>
//         <button onClick={()=>this.updateCounter(1)}>Increment</button> 
//         <button onClick={()=>this.updateCounter(-1)}>Decrement</button>
//       </div>
//     </div>
//     )}
// }

// export default App;

class App extends Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <h1>Counter: {this.props.counter}</h1>
        <div>
          <button onClick={this.props.onAdd}>Increment</button>
          <button onClick={this.props.onSub}>Decrement</button>
          <button onClick={()=>this.props.onAddNumber(15)}>Add 15</button>
        <Counter/>
        </div>
      </div>
    )
  }
}

//те саме лиш на функціональтній компоненті
// function App(props){

//   console.log(props)
//   return(
//     <div>
//       <h1>Counter: {props.counter}</h1>
//     </div>
//   )
// }


export default connect(mapStateToProps,mapDispatchToProps)(App) //connect-дозволяє нашій компоненті звязатись з редаксом(стейтом)

