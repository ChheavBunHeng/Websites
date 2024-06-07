import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./valentime.css";

const Valentime = () => {
    const NoButtonRef = useRef(null);
    const YesButtonRef = useRef(null);

    const handleMouseOver = () => {
        const MaxY = 300;
        const MaxX = 300;

        const x = Math.floor(Math.random() * MaxX);
        const y = Math.floor(Math.random() * MaxY);

        if (NoButtonRef.current) {
            NoButtonRef.current.style.left = `${x}px`;
            NoButtonRef.current.style.top = `${y}px`;
        }
    };

    const handleMouseClick = () => {
        if (NoButtonRef.current) {
            NoButtonRef.current.classList.add("Hidden");
        }
    }

    const handleMouseClickYes = () => {
        // Handle logic for clicking "Yes" without navigating to another page
        // For example, you can show a message or perform some other action.
    }

    return (
        <div className="Valentime">
            <h1>Can you be my Valentine</h1>
            <img src="https://i.redd.it/sbxb48jdrct81.jpg" alt="" />
            <div className="BTN">
                <button className="Yes" ref={YesButtonRef} onClick={handleMouseClickYes}>Yes</button>
                <button className="No" ref={NoButtonRef} onMouseOver={handleMouseOver} onClick={handleMouseClick}>No</button>
            </div>
        </div>
    );
};

export default Valentime;
