import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
