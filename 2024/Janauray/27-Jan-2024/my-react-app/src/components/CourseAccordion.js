import React from 'react';
import "../css/CourseAccordion.css";
const CourseAccordion = () => {
  return (
    <section className="contain">
      {/* Search Bar */}
      <div className="Search">
        <input type="text" placeholder="Search" className="SearchBar" />
      </div>

      {/* Accordion */}
      <div className="Accordion">
        <button className="AccordionBTN">Computer for Administration</button>
        <div className="panel">
          {/* Course panels for Computer for Administration */}
          {/* Example panel-info */}
          <div className="panel-info">
            <h4>Microsoft Word</h4>
            <p></p>
            <h4>$15</h4>
          </div>
          {/* Repeat similar structures for other courses */}
        </div>
      </div>

      {/* Repeat the above structure for other course categories (Computer Design, Computer Accounting, etc.) */}

      {/* Example for Computer Design */}
      <div className="Accordion">
        <button className="AccordionBTN">Computer Design</button>
        <div className="panel">
          {/* Course panels for Computer Design */}
          {/* Example panel-info */}
          <div className="panel-info">
            <h4>Adobe Photoshop Level I</h4>
            <p></p>
            <h4>$25</h4>
          </div>
          {/* Repeat similar structures for other courses */}
        </div>
      </div>

      {/* Repeat the above structure for other course categories */}
    </section>
  );
};

export default CourseAccordion;
