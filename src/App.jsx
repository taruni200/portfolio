import React from 'react'
import Navbar from './Components/Navbar';
import Home1 from './Components/Home1';
import About from './Components/About';
import Services from './Components/Services';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
 const App=()=>{
  return(
    <div>
      <Navbar/>
       <Home1/>
      <Education/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
 }
 export default App;

