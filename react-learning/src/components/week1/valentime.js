import React, { useRef } from "react";
import "./valentime.css";
import page1 from "../week1/page1";
import { useHistory } from "react-router-dom";

const Valentime = () => {
    const NoButtonRef = useRef(null);
    const YesButtonRef = useRef(null);
    const history = useHistory();

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

    const HandleMouseClick = () => {
        if (NoButtonRef.current) {
            NoButtonRef.current.classList.add("Hidden");
        }
    }

    const HandleMouseClickYes = () => {
        history.push(page1);
    }

    return (
        <div className="Valentime">
            <h1>Can you be my Valentine</h1>
            <img src="https://i.redd.it/sbxb48jdrct81.jpg" alt="" />
            <div className="BTN">
                <button className="Yes" ref={YesButtonRef} onClick={HandleMouseClickYes}>Yes</button>
                <button className="No" ref={NoButtonRef} onMouseOver={handleMouseOver} onClick={HandleMouseClick}>No</button>
            </div>
        </div>
    );
};

export default Valentime;
