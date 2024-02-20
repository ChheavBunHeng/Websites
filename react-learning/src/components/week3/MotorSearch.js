import React, { useState } from "react";
import "./MotorSearch.css";
const MotorSearch = () =>{
    
    const [selectBrand, setSelectBrand] = useState("Honda");
    const HandleBTN = () =>{
        console.log(selectBrand);
    }    
    return(
        <div className="container">

            <div className="MotorSearch">
            <h1>Motor Search</h1>
            <div className="Search">
            <select name="selectBrand" id="" value={selectBrand} onChange={(e) => setSelectBrand(e.target.value)}>
                <option value="Honda">Honda</option>    
                <option value="Yamaha">Yamaha</option>
                <option value="Kawasaki">Kawaski</option>
                <option value="Suzuki">Suzuki</option>
            </select>
            <input type="text" className="Search" placeholder="Input the name of the motor"/>    
            <button className="submit" onClick={HandleBTN}>Search</button>
            </div>
            <span className="MotorName">Motor Name</span>
            <span className="MakeModel">Make/Model</span>
            <span className="Year">Year</span>
            <span className="Engine">Engine</span>
            <span className="Capacity">Capacity</span>
            </div>
        </div>
    );
};

export default MotorSearch;