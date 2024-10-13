// App.tsx
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Banner from './Components/Banner';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import History from './Components/Page/History';
import Careers from './Components/Page/Careers';


function App() {
  return (
    <Router>
      <NavBar />  {/* Navbar will persist on all pages */}
      
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Banner />} />   {/* Home displays Banner */}
        <Route path="/history" element={<History />} />  {/* History page */}
        <Route path="/careers" element={<Careers />} />  {/* Careers page */}
      </Routes>
      
      {/* Common sections like Testimonials and Footer */}
      <Testimonial />
      <Footer />
    </Router>
  );
}

export default App;

