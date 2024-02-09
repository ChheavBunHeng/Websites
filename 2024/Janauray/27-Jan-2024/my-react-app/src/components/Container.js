// Inside CitoComputerApp.js

import React from 'react';
import "../css/Container.css"

// Create a functional component for an individual item
const Item = ({ imageUrl, title, price, course, duration }) => {
  return (
    <div className="Item">
      <img src={imageUrl} alt={title} />
      <h1>{title}</h1>
      <div className="Item-Info">
        <div className="Info">
          <a href="#">{price}$</a>
          <span>|</span>
          <a href="#">{course}</a>
        </div>
        <a href="#">{duration}</a>
      </div>
    </div>
  );
};

// Create the main Container component
const Container = () => {
  // Sample data for each item
  const items = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D',
      title: 'Word + Excel + PowerPoint + Internet',
      price: '35',
      course: 'Office Course',
      duration: '3.5 Months',
    },
    // Add more items as needed
    {
        imageUrl: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D',
        title: 'Word + Excel + PowerPoint + Internet',
        price: '35',
        course: 'Office Course',
        duration: '3.5 Months',
      },
    // Add more items as needed
      {
        imageUrl: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D',
        title: 'Word + Excel + PowerPoint + Internet',
        price: '35',
        course: 'Office Course',
        duration: '3.5 Months',
      },
          // Add more items as needed
    {
        imageUrl: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D',
        title: 'Word + Excel + PowerPoint + Internet',
        price: '35',
        course: 'Office Course',
        duration: '3.5 Months',
      },
    // Add more items as needed
      {
        imageUrl: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D',
        title: 'Word + Excel + PowerPoint + Internet',
        price: '35',
        course: 'Office Course',
        duration: '3.5 Months',
      },
       // Add more items as needed
       {
        imageUrl: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D',
        title: 'Word + Excel + PowerPoint + Internet',
        price: '35',
        course: 'Office Course',
        duration: '3.5 Months',
      },
  ];

  return (
    <section className="Container">
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </section>
  );
};

export default Container;
