import React, { Component } from 'react';
import {createStore} from "redux";

const reducer=function(state, action)
{
if(action.type === "INC"){
  return state+1;
}
return state;


}

const store = createStore(reducer, "Ashok");

store.subscribe(()=>{
console.log("store changed", store.getState())

})
store.dispatch({type:"INC",payload:1})
store.dispatch({type:"INC",payload:1})



class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Ashok Reddy</h1>
      </div>
    );
  }
}

export default App;
