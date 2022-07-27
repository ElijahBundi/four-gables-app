import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Button.css';

import './Homepage.css';


function Homepage() {
  return (
    <div className='homepage-container'>
        <h1>FOUR-GABLES</h1>
        <p>...Home is where the Heart is...</p>
        <div className='homepage-btns'>
            <Link to='/sign-up'>
                <button 
                    className='btn--outline' 
                >
                    JOIN US
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Homepage