import React, { useState, useEffect } from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Homepage from '../Homepage';

function Home() {

  const [homes, setHomes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8004/houseData')
    .then(res => res.json())
    .then(homes => setHomes(homes))
  }, [])

  

  return (
    <>
        <Homepage />
        <Cards homes={homes}/>
        <Footer />
    </>
  )
}

export default Home