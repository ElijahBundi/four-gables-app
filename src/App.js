import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element='' />
          <Route exact path='/about' element='' />
          <Route exact path='/services' element='' />
          <Route exact path='/contact-us' element='' />
          <Route exact path='/sign-up' element='' />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
