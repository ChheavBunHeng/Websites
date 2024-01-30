import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      {/* Use Link instead of link */}
      {/* <Link to="/Pages/Course">Course</Link> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
