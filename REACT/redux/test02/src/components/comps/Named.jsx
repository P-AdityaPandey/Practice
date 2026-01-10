import { useRef } from "react";
import { useDispatch } from "react-redux";


function Name () {
    
   let inputRef = useRef() ;
   let dispatch = useDispatch();

    const getData = () => {

        var actionObj ={
            type :"NAME",
            nameComp :inputRef.current.value
        }

        dispatch(actionObj);
    }
    return (
   <div>
    <h2>Name Component</h2>
    <input ref={inputRef} type="text" />
    <button onClick={getData} style={{marginLeft : "10px"}}>Submit</button>
    
   </div>
  )
}

export default Name ;
