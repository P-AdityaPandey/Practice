import { useRef } from "react";
import {useDispatch} from "react-redux"

function Name() { 

  let inputRef= useRef(null);
  let dispatch = useDispatch()
  
  const getData = () => {
       //create an obj to store the input data
       var actionObj ={
        type :"NAME",
        nameComp : inputRef.current.value
       }
       dispatch(actionObj);
  }

  return (
   <div>

    <h2>Named Component</h2>
    <input ref={inputRef} type="text" />
    <button onClick={getData} style={{marginLeft : 10}}>Submit</button>
  
    
   </div>
  )
}

export default Name;
