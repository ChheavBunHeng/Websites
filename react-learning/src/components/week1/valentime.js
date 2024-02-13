import React, { useRef } from "react";
import "./valentime.css";

const Valentime = () => {
    const btnRef = useRef(null);

    const handleMouseOver = () => {
        const btn = btnRef.current;
        const maxY = 300;
        const maxX = 300;

        // Adjust the range to keep the YES button within 100vw by 100vh
        const randomX = Math.min(Math.max(0, Math.floor(Math.random() * maxX)), maxX);
        const randomY = Math.min(Math.max(0, Math.floor(Math.random() * maxY)), maxY);
        
        btn.style.left = `${randomX}px`;
        btn.style.top = `${randomY}px`;
    };

    return (
        <div className="Valentime">
            {/* <h1>Can you be my valentine</h1> */}
            <img src="https://i.redd.it/sbxb48jdrct81.jpg" alt="" />
            <div className="BTN" ref={btnRef}>
                <button className="YES" onMouseOver={handleMouseOver}>YES</button>
            </div>
                <button className="NO">NO</button>
        </div>
    );
};

export default Valentime; 
