
import { useRef } from "react";
import { useDispatch } from "react-redux";

function Name() {
    let inputRef= useRef(null);
    let dispatch = useDispatch()

    const getData = () =>{
        var actionObj = {
            type : "NAME",
            nameComp:inputRef.current.value

        };
       // console.log(actionObj);
       dispatch(actionObj);
    };
 

  return (
    <div>
        <h2>Name Component</h2>
        <input ref={inputRef} type="text" placeholder=" Add Some Data" />
        <button style={{margin:"10px"}} onClick={getData}>Submit</button>
    </div>
    
  )
}

export default Name;
