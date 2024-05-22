import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <h1>Page1</h1>
        </div>
    );
};

export default Page1;
