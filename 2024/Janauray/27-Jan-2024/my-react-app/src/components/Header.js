import React from 'react';
// import '../css/Header.css'; // Replace 'Header.css' with the actual name of your CSS file
import "../css/Header.css";
const Header = () => {
  return (
    <section className="Header">
      <a className="School-Logo" href="#">
        CITO COMPUTER
      </a>
      <nav>
        <a href="./AddForm.html">add item</a>
        <a href="./Course.html">Courses</a>
        <a href="#">location</a>
        <a href="#">About</a>
      </nav>
    </section>
  );
};

export default Header;
