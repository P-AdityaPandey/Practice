import "./Counter.css"
import { useState } from "react"


function Counter(){
    var [value, setValue] = useState(0);

    var incCount = () => {
        setValue(value+1)
    }

    var decCount = () => {
        setValue(value-1)
    }
    
    var reset = () => {
        setValue(0)
    }



    return(
        <div id="counter">
           
           <h2>COUNTER IN REACT </h2>
           <p>The Value of Counter is : {value}</p>
           <button onClick={incCount}> IncCount</button><br />
           <button onClick={decCount}> DecCount</button><br />
           <button onClick={reset}> Reset</button>

        </div>
    )
}

export default Counter;