// Page1.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Valentime from "./valentime";

const Page1 = () => {
    return (
        <div>
            <h2>This is Page 1</h2>
            <Link to="/valentime">Go to Valentime</Link>
            <Routes>
                <Route path="/valentime" element={<Valentime />} />
            </Routes>
        </div>
    );
};

export default Page1;