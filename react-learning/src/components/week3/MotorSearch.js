// import React, { useState, useEffect } from "react";
// import "./MotorSearch.css";

// const MotorSearch = () => {
//     const [selectBrand, setSelectBrand] = useState("Honda");

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`https://api.api-ninjas.com/v1/motorcycles?make=${selectBrand.toLowerCase()}&model=ninja`, {
//                     headers: {
//                         "X-Api-Key": "PeqLKZU2ZBHRdnuJT/jOwA==5ZSOTy4psVSUGjKr"
//                     }
//                 });

//                 const data = await response.json();
//                 console.log(data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData(); // Call the fetchData function on component mount
//     }, [selectBrand]); // Include selectBrand in the dependency array to trigger useEffect when it changes

//     const handleBtnClick = async () => {
//         await fetchData(); // Call the fetchData function when the button is clicked
//     };

//     return (
//         <div className="container">
//             <div className="MotorSearch">
//                 <h1>Motor Search</h1>
//                 <div className="Search">
//                     <select name="selectBrand" id="" value={selectBrand} onChange={(e) => setSelectBrand(e.target.value)}>
//                         <option value="Honda">Honda</option>
//                         <option value="Yamaha">Yamaha</option>
//                         <option value="Kawasaki">Kawasaki</option>
//                         <option value="Suzuki">Suzuki</option>
//                     </select>
//                     <input type="text" className="Search" placeholder="Input the name of the motor" />
//                     <button className="submit" onClick={handleBtnClick}>Search</button>
//                 </div>
//                 <span className="MotorName">Motor Name</span>
//                 <span className="MakeModel">Make/Model</span>
//                 <span className="Year">Year</span>
//                 <span className="Engine">Engine</span>
//                 <span className="Capacity">Capacity</span>
//             </div>
//         </div>
//     );
// };

// export default MotorSearch;
