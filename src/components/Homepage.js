import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Button.css';

import './Homepage.css';


function Homepage() {
  return (
    <div className='hero-container'>
        <h1>WELCOME HOME</h1>
        <p>...In your abscence you were missed...</p>
        <div className='hero-btns'>
            <Link to='/sign-up'>
                <button 
                    className='btn--outline' 
                >
                    JOIN US
                </button>
            </Link>
            <Link to='/videos'>
                <button 
                    className='btn--primary' 
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Homepage