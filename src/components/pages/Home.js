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
    .then(homeData => setHomes(homeData))
  }, [])

  function deleteHome(id) {
    const updatedHomes = homes.filter((home) => home.id === id)
    setHomes(updatedHomes)
  }

  return (
    <>
        <Homepage />
        <Cards homes={homes} onDelete={deleteHome} />
        <Footer />
    </>
  )
}

export default Home