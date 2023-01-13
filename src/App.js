// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import AreaExpertise from './components/AreaExpertise';
import Mission from './components/Mission';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import Vision from './components/Vision';
import WhatWeDo from './components/WhatWeDo';
import More from './components/more';
import Brand from './components/Brand';
import Contact from './components/Contact';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Mission />
      <Vision />
      <AreaExpertise />
      <WhatWeDo />
      <More/>
      <Testimonial/>
      <Brand />
      <Contact />
      < Footer />
    </div>
  );
}

export default App;
