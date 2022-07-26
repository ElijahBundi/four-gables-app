import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/contact-us' element={<ContactUs />} />
          <Route exact path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
