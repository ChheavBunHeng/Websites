import react, { useState } from "react";
import './Item.css'
const Item = () =>{
    const [Quanlity,setQuanlity] = useState(1);
    const handleIncrease = () =>{
        setQuanlity(Quanlity + 1);
    };
    const handleDecrease = () =>{
        if(Quanlity > 1){
            setQuanlity(Quanlity - 1);
        }
    };
    return(
        <div className="itemcard">
        <div className="ImageSide">
        <img src="https://images.unsplash.com/photo-1708000590735-6aee991a7b29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="Info">
        <button className="GoBack">Back</button>    
        <h1>Crescent Midi Hoops</h1>
        <p>Transfrom your body with the Crescent Midi Hoops from adidas. Made with 100% recycled polyester fabric. Made in the USA. These hoops are lightweight and easy to put on.
            we dare they will easily become your go-to statment hoops
        </p>
        <div className="Purchase">
            <div className="Material">
                <h2>Material</h2>
                <div className="color">
                <button className="firstcolor"></button>
                <button className="secondcolor"></button>
                </div>
            </div>
            <div className="Quantity">
                <h2>Quanlity</h2>
                <div className="quantityinfo">
                <button className="increase" onClick={handleIncrease}>+</button>
                <span className="QuantityNumber">{Quanlity}</span>   
                <button className="decrease" onClick={handleDecrease}>-</button>
                </div>
            </div>
        </div>
        <h2>Price</h2>
        <button className="addCart">Add To Cart</button>
        </div>
        </div>
    );
};
export default Item;