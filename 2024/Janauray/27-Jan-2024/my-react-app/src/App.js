import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Location from './components/Location';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Location></Location>
      <Footer></Footer>
    </div>
  );
}

export default App;
