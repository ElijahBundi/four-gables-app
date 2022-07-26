import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Homepage from '../Homepage';

function Home() {
  return (
    <>
        <Homepage />
        <Cards />
        <Footer />
    </>
  )
}

export default Home