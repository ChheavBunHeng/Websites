import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { Link } from "react-router-dom";
import Container from './components/Container';
import Location from './components/Location';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Location></Location>
      {/* Use Link instead of link */}
      {/* <Link to="/Pages/Course">Course</Link> */}
      <Container></Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
