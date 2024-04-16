import React, { Component } from 'react' 
import { connect } from 'react-redux'

function mapStateToProps(state) { 
    console.log(state)
    return { 
      counter: state.counter2.counter2
    } 
  } 
function mapDispatchToProps(dispatch){
    return{ 
        onAdd2:number=>dispatch({type:'ADD2',payload:number}) 
    } 
}
class Counter extends Component 
{ 
    render(){ 
        return( 
            <div> 
                <h1>Counter:{this.props.counter}</h1> 
                <div> 
                    <button onClick={()=>this.props.onAdd2(20)}>Add 20</button> 
                    <button onClick={()=>this.props.onAdd2(-20)}>Sub 20</button> 
                </div> 
            </div> 
        ) 
    } 
} 
export default connect(mapStateToProps,mapDispatchToProps)(Counter)