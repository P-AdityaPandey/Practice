import "./Switchcard.css"
import { useState } from "react";

function Switchcard(){

     var [url, seturl] = useState("https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png");
     var [h2, seth2] = useState("REACT");
     var [p,setp] = useState("REACT- A JavaScript Library")
    var switchtoreact= () => {
        seturl("https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png")
        seth2("REACT")
        setp("REACT- A JavaScript Library")

    }
     var switchtoangular= () => {
        seturl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZrwrk5yFTnv8PO3MHzBkkcQ7r8hGj1aUvA&s")
        seth2("ANGULAR")
        setp("ANGULAR- A Framework")
    }
  

    return(
        <div id="card">
             <h2>{h2}</h2>
             <img src={url}/>
             <p>{p}</p>
            <button onClick={switchtoreact}>REACT</button> <br /><br />
            <button onClick={switchtoangular}>ANGULAR</button>
        </div>
    )
}

export default Switchcard;