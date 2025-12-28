import "./Counter.css"
import { useState } from "react";

function Counter(){

    var [state, setState]= useState(0);

    var increaseCount = () => {
        setState(state+1);
    };
     var decreaseCount = () => {
        setState(state-1);
    };
     var reset = () => {
        setState(0);
    };


   return(
    <div id="counter">
        <h2>COUNTER IN REACT</h2>
        <p>The Counter Value is : {state}</p>
        <button onClick={increaseCount}>IncCount</button><br />
        <button onClick={decreaseCount}>DecCount</button><br />
        <button onClick={reset}>Reset</button>
    </div>
   )
}

export default Counter;