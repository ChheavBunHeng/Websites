// Page1.js
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Page2 from "./Page2";

const Navigation = () => {
    return (
        <nav>
            <Link to="/page2">Go to Page 2</Link>
            <Link to="/">Go to Home</Link>
        </nav>
    );
};

const Page1 = () => {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/page2" element={<Page2 />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Page1;
