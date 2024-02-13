import React, { useRef } from "react";
import "./valentime.css";

const Valentime = () => {
    // Eventlistener: MouseOver
    const NoButtonRef = useRef(null);

    const handleMouseOver = () => {
        const MaxY = 300;
        const MaxX = 300;

        const x = Math.floor(Math.random() * MaxX);
        const y = Math.floor(Math.random() * MaxY);

        // Access the button element through the useRef reference
        if (NoButtonRef.current) {
            NoButtonRef.current.style.left = `${x}px`;
            NoButtonRef.current.style.top = `${y}px`;
        }
    };
    //EventListener: Click
    const HandleMouseClick = () =>{
        NoButtonRef.current.classList.add("Hidden");
    }

    return (
        <div className="Valentime">
            <h1>Can you be my Valentine</h1>
            <img src="https://i.redd.it/sbxb48jdrct81.jpg" alt="" />
            <div className="BTN">
                <button className="Yes">Yes</button>
                <button className="No" ref={NoButtonRef} onMouseOver={handleMouseOver} onClick={HandleMouseClick}>No</button>
            </div>
        </div>
    );
};

export default Valentime;
