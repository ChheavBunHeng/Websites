import React from "react";
import "./HelloWorld.css";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage.js";

const HelloWorld = () => {
  return (
    <>
      <Navbar />
      <div className="content">
      <LoginPage />
      </div>
    </>
  );
};

export default HelloWorld;
