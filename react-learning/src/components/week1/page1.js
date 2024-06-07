import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Valentime from "./valentime";

const Page1 = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>page1</h1>
                <nav>
                    <Link to="/page2">Go to Page 2</Link>
                </nav>
                <Routes>
                    <Route path="/page2" element={<Valentime />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Page1;
