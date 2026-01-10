import { Links } from "react-router-dom";
import "./Navbar.css"

function Navbar() {

    return (        
        <div id="navContainer">
                <div>
                    <h2>DemoApp</h2>
                </div>
                <div id="links">
                    <Links to="/">Home </Links>
                    <Links to="/products">Products </Links>
                    <Links to="/counters">Counter </Links>
                    <Links to="/switchcard">Switch Cards </Links>
                </div>
         
           </div>
    )
}

export default  Navbar; 