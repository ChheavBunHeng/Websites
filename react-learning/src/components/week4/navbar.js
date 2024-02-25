import React from "react";
import { BrowserRouter, Routes, Route,link } from "react-router-dom";
import Page1 from "./Page1";
navbar = () =>{
    return(
        <div>
            <BrowserRouter>
                <nav>
                    <link to="/page1">Go to page1</link>
                </nav>
                <Routes>
                    <Route path="/page1" element={<Page1/>}/>W
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Navbar;