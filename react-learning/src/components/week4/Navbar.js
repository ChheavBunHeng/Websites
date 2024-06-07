import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <BrowserRouter>
                <nav style={{ display: "flex" , gap: "10px" }}>
                    <Link to="/page1">Home</Link>
                    <Link to="/page2">Page 2</Link>
                </nav>
                <Routes>
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Navbar;
