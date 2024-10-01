
import './App.css'
import NavBar from './components/NavBar'
import Banner from "./Components/Banner.jsx"
import Testimonial from "./Components/Testimonial"
import Footer from "./Components/Footer.jsx"
import Histroy from "./Components/Page/History.jsx"

function App() {
  return(
    <>
      <NavBar></NavBar>
    <Histroy></Histroy>
      {/* <Banner></Banner> */}
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  )

  }

export default App
