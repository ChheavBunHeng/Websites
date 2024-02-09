import React from "react";
import "../css/Signup.css";

const Signup = () => {
  return (
    <div className="Signup">
        <input type="text" className="UserNameKh" placeholder="Input khmer name" />
        <input type="text" className="UserNameEnglish" placeholder="Input english name" />
        <select name="" id="">
            <option value="Male">Male</option>  
            <option value="Female">Female</option>
        </select>
        <input type="text" className="Nationality" placeholder="Input nationality"/>
        <input type="datetime" name="DateOfBirth"/> 
        <input type="text" className="Job" placeholder="Input job"/>    
        <input type="text" className="Address" placeholder="Input address"/>    
        <input type="text" className="PhoneNumber" placeholder="Input phone number"/>
        <select name="Subject" id="">
            <option value="Math">Math</option>
            <option value="English">English</option>
            <option value="Science">Science</option>
            <option value="Social">Social</option>
        </select>      
    </div>
  );
};

export default Signup;
