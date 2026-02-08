import React  from "react";
import Header from "./components/Header";
import './index.css'
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonails from "./components/Testimonails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer} from 'react-toastify';

const App = () => {
  return (
  <div className="w-full overflow-hidden">
    <ToastContainer/>
    <Header/>
    <About/>
    <Projects/>
    <Testimonails/>
    <Contact/>
    <Footer/>
  </div>
  )
}
export default App;