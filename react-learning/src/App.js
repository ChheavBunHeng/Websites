// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Valentime from "./components/week1/valentime";
import Page1 from "./components/week1/page1";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Valentime />} />
                <Route path="/page1" element={<Page1 />} />
            </Routes>
        </Router>
    );
};
export default App;

