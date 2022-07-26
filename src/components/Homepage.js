import React from 'react';
import '../App.css'
// import { Button } from './Button'
import './Homepage.css'

function Homepage() {
  return (
    <div className='hero-container'>
        {/* <video src='/videos/video-1.mp4' autoplay loop muted /> */}
        <h1>WELCOME HOME</h1>
        <p>In your abscence you were missed!</p>
        <div className='hero-btns'>
            {/* <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large' 
            >
                GET STARTED
            </Button>
            <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large' 
            >
                WATCH TRAILER <i className='far fa-play-circle' />
            </Button> */}
        </div>
    </div>
  )
}

export default Homepage