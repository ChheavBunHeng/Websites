import React from "react";
import "./Navbar.css";

const Navbar = () =>{
    return(
        <div className="navbar">
            <a href="#">InterNow</a>
            <div className="BTN">
                <button className="login">Login</button>
                <button className="Signup">Signup</button>
            </div>
        </div>
    );
};
export default Navbar;