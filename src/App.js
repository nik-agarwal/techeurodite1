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
    </div>
  );
}

export default App;
