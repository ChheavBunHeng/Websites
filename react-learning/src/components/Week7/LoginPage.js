import React from "react";
import "./LoginPage.css";

const LoginPage =() =>{
    return(
        <div className="loginpage">
            <h1>Login in to InterNow</h1>
            <h2>to continue, fill out your personal information</h2>
            <h3>Email</h3>
            <input type="text" className="Email" />
            <h3>Password</h3>
            <input type="text" className="Password" />
            <h4>By continuing, you agree to our Terms of Service and Privacy Policy</h4>    
            <button className="Login">Login</button>
        </div>
    );
};
export default LoginPage;